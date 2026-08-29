import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide name, email, and message.' });
        }

        // Configure Gmail SMTP Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'futoralift@gmail.com',
                pass: 'olifirudgbrvzgos'
            }
        });

        const submissionDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'medium'
        });

        // 1. Send Notification Email to futoragroup@gmail.com
        const adminMailOptions = {
            from: `"Futora Group Forms" <futoralift@gmail.com>`,
            to: 'futoragroup@gmail.com',
            replyTo: email,
            subject: `🚀 New Lead: ${name} — Futora Group Website`,
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #0d0e15; color: #ffffff; padding: 30px; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 25px;">
                        <h2 style="color: #00ffff; margin: 0; font-size: 24px;">New Contact Submission</h2>
                        <p style="color: #9ca3af; font-size: 14px; margin-top: 5px;">Futora Group Website ("Let's Build the Future Together")</p>
                    </div>

                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 10px; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; font-size: 15px;">
                            <strong style="color: #00ffff;">👤 Full Name:</strong> ${name}
                        </p>
                        <p style="margin: 0 0 10px 0; font-size: 15px;">
                            <strong style="color: #00ffff;">📧 Email Address:</strong> <a href="mailto:${email}" style="color: #00df9a; text-decoration: none;">${email}</a>
                        </p>
                        <p style="margin: 0 0 10px 0; font-size: 15px;">
                            <strong style="color: #00ffff;">🕒 Timestamp (IST):</strong> ${submissionDate}
                        </p>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 15px 0;" />
                        <p style="margin: 0 0 5px 0; font-size: 15px; color: #00ffff;"><strong>💬 Message:</strong></p>
                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap; background: #161824; padding: 12px; border-radius: 6px;">${message}</p>
                    </div>

                    <div style="text-align: center; margin-top: 20px;">
                        <a href="mailto:${email}" style="background: #00ffff; color: #000000; font-weight: bold; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${name}</a>
                    </div>
                </div>
            `
        };

        // 2. Send Auto-Confirmation to Submitter
        const userConfirmationOptions = {
            from: `"Futora Group" <futoralift@gmail.com>`,
            to: email,
            subject: `Thank you for contacting Futora Group, ${name}!`,
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #0d0e15; color: #ffffff; padding: 30px; border-radius: 12px;">
                    <h2 style="color: #00ffff; margin-top: 0;">Hello ${name},</h2>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">
                        Thank you for reaching out to <strong>Futora Group of Companies</strong>! We have received your inquiry.
                    </p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">
                        Our team will review your message and get back to you <strong>within 24 hours</strong>.
                    </p>
                    <div style="background: rgba(0, 223, 154, 0.1); border: 1px solid rgba(0, 223, 154, 0.3); border-radius: 8px; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #00df9a; font-size: 14px; font-weight: bold;">
                            ⚡ Need a faster reply?
                        </p>
                        <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 14px;">
                            You can connect with us directly on WhatsApp at <a href="https://wa.me/918446653644" style="color: #00ffff; text-decoration: underline;">+91 8446653644</a>.
                        </p>
                    </div>
                    <p style="color: #9ca3af; font-size: 13px; margin-top: 25px;">
                        Warm regards,<br />
                        <strong>Futora Group of Companies</strong><br />
                        <span style="font-size: 12px; opacity: 0.7;">Corporate Office: Pune, India (Government of India Recognized MSME)</span>
                    </p>
                </div>
            `
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userConfirmationOptions)
        ]);

        return res.status(200).json({ success: true, message: 'Emails sent successfully via SMTP' });
    } catch (error: any) {
        console.error('SMTP Send Error:', error);
        return res.status(500).json({ error: error.message || 'Failed to send email via SMTP' });
    }
}
