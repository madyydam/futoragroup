import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3 className="gradient-text">FUTORA</h3>
                        <p>Building the Future with AI, Automation & Innovation</p>
                        <div className="footer-socials">
                            <a href="mailto:madhurdhadve@gmail.com" aria-label="Send email to Futora Group">
                                <Mail size={20} />
                            </a>
                            <a href="https://in.linkedin.com/in/madhur-dhadve-5b598433a" target="_blank" rel="noopener noreferrer" aria-label="Visit Futora Group on LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/madhur_dhadve" target="_blank" rel="noopener noreferrer" aria-label="Visit Madhur Dhadve on Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Quick Links for SEO & Crawlers */}
                    <div className="footer-links-group" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 600 }}>Ecosystem</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                                <li><Link to="/companies" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Products</Link></li>
                                <li><Link to="/services" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Growth Services</Link></li>
                                <li><Link to="/founder" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Founder</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 600 }}>Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                                <li><Link to="/insights" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Insights & Edge</Link></li>
                                <li><Link to="/careers" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Careers</Link></li>
                                <li><Link to="/contact" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-section newsletter-section">
                    <h3>Join the Inner Circle</h3>
                    <p>Get exclusive updates on our billion-dollar journey.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="newsletter-email-input" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Email Address</label>
                        <input id="newsletter-email-input" type="email" placeholder="Enter your email" required aria-label="Enter your email address for updates" />
                        <button type="submit" aria-label="Subscribe to newsletter">Join</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <div className="footer-compliance">
                        <p className="msme-text">Futora Group of Companies — A Government of India recognized MSME</p>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Futora Group of Companies. All rights reserved.</p>
                        <p>Founded by <span className="gradient-text">Madhur Dhadve</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
