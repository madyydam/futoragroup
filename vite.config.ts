import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

// Dev server middleware for local SMTP testing
const smtpDevPlugin = (): Plugin => ({
  name: 'smtp-dev-server',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body || '{}');

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Please provide name, email, and message.' }));
              return;
            }

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

            // 1. Send notification to ceo@futoragroup.in
            const adminMailOptions = {
              from: `"Futora Group Forms" <futoralift@gmail.com>`,
              to: 'ceo@futoragroup.in',
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

            // 2. Auto-confirmation to submitter
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

            await Promise.all([
              transporter.sendMail(adminMailOptions),
              transporter.sendMail(userConfirmationOptions)
            ]);

            console.log(`[SMTP DEV] Emails successfully sent for ${email}`);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully via SMTP' }));
          } catch (err: any) {
            console.error('[SMTP DEV ERROR]:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'SMTP Error' }));
          }
        });
        return;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), smtpDevPlugin()],
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', 'maath'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['lucide-react', 'cmdk', '@emailjs/browser']
        }
      }
    }
  }
});
