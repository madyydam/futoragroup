import React, { type FC } from 'react';
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
                            <a href="mailto:madhurdhadve@gmail.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                            <a href="https://in.linkedin.com/in/madhur-dhadve-5b598433a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/madhur_dhadve" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>




                </div>

                <div className="footer-section newsletter-section">
                    <h3>Join the Inner Circle</h3>
                    <p>Get exclusive updates on our billion-dollar journey.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Join</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Futora Group of Companies. All rights reserved.</p>
                    <p>Founded by <span className="gradient-text">Madhur Dhadve</span></p>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
