import type { FC } from 'react';
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

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/companies">Our Companies</Link>
                        <Link to="/about">About</Link>
                        <Link to="/founder">Founder</Link>
                    </div>

                    {/* Companies */}
                    <div className="footer-links">
                        <h4>Companies</h4>
                        <a href="https://futoralift.vercel.app/" target="_blank" rel="noopener noreferrer">FutoraLift</a>
                        <a href="https://futorapay.vercel.app/" target="_blank" rel="noopener noreferrer">FutoraPay</a>
                        <a href="#futoraone">FutoraOne</a>
                        <a href="https://futoraai.vercel.app/" target="_blank" rel="noopener noreferrer">Futora AI</a>
                    </div>

                    {/* Contact */}
                    <div className="footer-links">
                        <h4>Get in Touch</h4>
                        <Link to="/contact">Contact Us</Link>
                        <a href="mailto:madhurdhadve@gmail.com">Email</a>
                        <p className="footer-small">Let's build the future together</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Futora Group of Companies. All rights reserved.</p>
                    <p>Founded by <span className="gradient-text">Madhur Dhadve</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
