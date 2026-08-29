import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Sparkles, Target, Rocket, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import './Founder.css';

const Founder: FC = () => {
    const timeline = useMemo(() => [
        { year: 'Vision', title: 'Founded Futora Group', description: 'Started with a vision to build billion-dollar AI platforms' },
        { year: 'Innovation', title: 'Multiple Ventures', description: 'Launched multiple AI-first companies across fintech, social, tools, and growth engineering' },
        { year: 'Future', title: 'Global Expansion & Services', description: 'Scaling self-owned products and high-impact technology services worldwide' }
    ], []);

    const traits = useMemo(() => [
        { icon: <Sparkles size={32} />, title: 'Visionary', description: 'Sees beyond the horizon with AI-first architecture' },
        { icon: <Target size={32} />, title: 'Strategic', description: 'Executes with technical precision and scalable systems' },
        { icon: <Rocket size={32} />, title: 'Ambitious', description: 'Builds billion-dollar ecosystem platforms for global scale' }
    ], []);

    const founderSchema = useMemo(() => ({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Madhur Dhadve',
        'jobTitle': 'Founder & CEO',
        'worksFor': {
            '@type': 'Organization',
            'name': 'Futora Group of Companies',
            'url': 'https://futoragroup.in'
        },
        'description': 'Founder and visionary behind Futora Group, leading an ecosystem of AI products and growth services.',
        'url': 'https://futoragroup.in/founder',
        'sameAs': [
            'https://in.linkedin.com/in/madhur-dhadve-5b598433a',
            'https://instagram.com/madhur_dhadve'
        ]
    }), []);

    return (
        <div className="founder-page">
            <div className="founder-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SEO
                            title="Madhur Dhadve — Founder & Visionary"
                            description="Meet Madhur Dhadve, the visionary founder and CEO behind Futora Group. Building billion-dollar AI platforms across fintech, social, and growth services."
                            url="https://futoragroup.in/founder"
                            schema={founderSchema}
                        />
                        <motion.div
                            className="founder-avatar"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="avatar-placeholder">
                                <span>MD</span>
                            </div>
                        </motion.div>
                        <h1><span className="gradient-text">Madhur Dhadve</span></h1>
                        <p className="founder-title">Founder & Visionary</p>
                        <div className="founder-social">
                            <a href="https://in.linkedin.com/in/madhur-dhadve-5b598433a" target="_blank" rel="noopener noreferrer" aria-label="Madhur Dhadve on LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/madhur_dhadve" target="_blank" rel="noopener noreferrer" aria-label="Madhur Dhadve on Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:madhurdhadve@gmail.com" aria-label="Send email to Madhur Dhadve">
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="section founder-bio">
                <div className="container">
                    <motion.div
                        className="bio-content glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>About Madhur</h2>
                        <ul className="main-points">
                            <li><strong>Visionary Founder:</strong> Leading Futora Group with a mission to build a powerful ecosystem of AI-driven companies and partner services.</li>
                            <li><strong>AI Specialist:</strong> Passionate about artificial intelligence, autonomous agent workflows, and future technology systems.</li>
                            <li><strong>Scale Strategist:</strong> Dedicated to building ethical, scalable, and transformative solutions for the global digital economy.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="section traits-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Leadership Traits
                    </motion.h2>
                    <div className="traits-grid">
                        {traits.map((trait, index) => (
                            <motion.div
                                key={trait.title}
                                className="trait-card glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="trait-icon">{trait.icon}</div>
                                <h3>{trait.title}</h3>
                                <p>{trait.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section timeline-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Journey Highlights
                    </motion.h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className="timeline-item glass-card"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                <div className="timeline-badge">{item.year}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section legal-section">
                <div className="container">
                    <motion.div
                        className="legal-card glass-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Legal & Compliance</h2>
                        <div className="legal-content-wrapper">
                            <div className="legal-logo-column">
                                <img
                                    src="/msme-logo.webp"
                                    alt="Government of India MSME Logo"
                                    className="legal-msme-logo"
                                    width="160"
                                    height="80"
                                    loading="lazy"
                                />
                            </div>
                            <div className="legal-text-column">
                                <p>
                                    Futora Group of Companies is a Government of India recognized MSME, operating as a registered technology holding company focused on AI, fintech, and digital platforms.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default memo(Founder);
