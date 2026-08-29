import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import type { FC, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, Instagram, Linkedin, Phone } from 'lucide-react';
import './ContactSection.css';

interface ContactSectionProps {
    id?: string;
}

const ContactSection: FC<ContactSectionProps> = ({ id }) => {
    useEffect(() => {
        emailjs.init("hJPMIZlyhM9e5aUYp");
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const successTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (successTimerRef.current) {
                clearTimeout(successTimerRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send via Serverless SMTP API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('SMTP Email Sent successfully via /api/contact');
            } else {
                // Fallback attempt via EmailJS
                console.warn('API endpoint returned error, trying EmailJS fallback...');
                await emailjs.send(
                    'service_jh0dmnn',
                    'template_jkesqkz',
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    },
                    'hJPMIZlyhM9e5aUYp'
                );
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error: unknown) {
            console.error('Submission encountered an issue, trying direct fallback:', error);
            try {
                await emailjs.send(
                    'service_jh0dmnn',
                    'template_jkesqkz',
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    },
                    'hJPMIZlyhM9e5aUYp'
                );
            } catch (fallbackErr) {
                console.error('Fallback error:', fallbackErr);
            }
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id={id} className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Let's Build the <span className="gradient-text">Future Together</span></h1>
                    <p>Have a question, partnership opportunity, or just want to connect? We'd love to hear from you.</p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-wrapper glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Get in <span className="gradient-text">Touch</span></h2>
                        {submitted ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="success-icon">✓</div>
                                <h3>Inquiry Received!</h3>
                                <p className="success-notice">
                                    Our team will contact you within <strong>24 hours</strong>.
                                </p>
                                <div className="whatsapp-fast-reply">
                                    <span>For a faster reply, reach us on WhatsApp:</span>
                                    <a
                                        href="https://wa.me/918446653644?text=Hello%20Futora%20Group%2C%20I%20just%20submitted%20the%20contact%20form%20on%20your%20website."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-lead-btn"
                                        aria-label="Chat on WhatsApp"
                                    >
                                        <MessageSquare size={16} /> WhatsApp: +91 8446653644
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="send-again-btn"
                                    onClick={() => setSubmitted(false)}
                                    aria-label="Send another inquiry"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="home-name">
                                        <User size={15} /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="home-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="home-email">
                                        <Mail size={15} /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="home-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="home-message">
                                        <MessageSquare size={15} /> Message
                                    </label>
                                    <textarea
                                        id="home-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting} aria-label="Submit contact form">
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={16} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="info-card glass-card">
                            <h3>Connect with Me</h3>
                            <div className="contact-links">
                                <a href="mailto:futoragroup@gmail.com" className="contact-link-item" aria-label="Send email to futoragroup@gmail.com">
                                    <Mail size={18} /> futoragroup@gmail.com
                                </a>
                                <a href="tel:+918446653644" className="contact-link-item" aria-label="Call +91 8446653644">
                                    <Phone size={18} /> +91 8446653644
                                </a>
                                <a href="https://instagram.com/madhur.dhadve" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="Madhur Dhadve Instagram">
                                    <Instagram size={18} /> @madhur.dhadve
                                </a>
                                <a href="https://in.linkedin.com/in/madhur-dhadve-5b598433a" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="Madhur Dhadve LinkedIn">
                                    <Linkedin size={18} /> Madhur Dhadve
                                </a>
                            </div>
                            <div className="contact-compliance" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <p style={{ fontSize: '0.75rem', color: 'var(--gray-300)', opacity: 0.8, lineHeight: 1.5 }}>
                                    Futora Group of Companies is a Government of India recognized MSME.
                                </p>
                            </div>
                        </div>

                        <div className="social-icons-row">
                            <a href="https://instagram.com/madhur.dhadve" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram" aria-label="Visit Madhur Dhadve on Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:futoragroup@gmail.com" className="social-icon-btn email" aria-label="Send email to Futora Group">
                                <Mail size={20} />
                            </a>
                            <a href="https://wa.me/918446653644" target="_blank" rel="noopener noreferrer" className="social-icon-btn whatsapp" aria-label="Chat on WhatsApp">
                                <MessageSquare size={20} />
                            </a>
                            <a href="https://in.linkedin.com/in/madhur-dhadve-5b598433a" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin" aria-label="Connect on LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ContactSection);
