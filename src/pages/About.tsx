import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe, Shield } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    const pillars = useMemo(() => [
        {
            icon: <Target size={40} />,
            title: 'Vision',
            description: 'To build a global ecosystem of AI-powered platforms that redefine industries and empower billions worldwide.'
        },
        {
            icon: <Zap size={40} />,
            title: 'Innovation',
            description: 'Pioneering cutting-edge solutions that push the boundaries of technology, automation, and intelligence.'
        },
        {
            icon: <Globe size={40} />,
            title: 'Global Impact',
            description: 'Scaling solutions that transcend borders, creating meaningful change across continents and cultures.'
        },
        {
            icon: <Shield size={40} />,
            title: 'Ethics & Trust',
            description: 'Building with integrity, transparency, and a commitment to responsible AI that serves humanity.'
        }
    ], []);

    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>About <span className="gradient-text">Futora</span></h1>
                        <p>Shaping tomorrow with visionary technology and unwavering innovation.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section about-story">
                <div className="container">
                    <motion.div
                        className="story-content glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>What Futora Stands For</h2>
                        <p>
                            Futora Group of Companies is not just a business—it's a movement. Founded by Madhur Dhadve,
                            Futora represents a vision to build billion-dollar AI platforms that transform how we live, work, and connect.
                        </p>
                        <p>
                            From intelligent fintech solutions to global social communities, AI-driven growth strategies to
                            cutting-edge automation, Futora is building an interconnected ecosystem where innovation thrives.
                        </p>
                        <p>
                            We believe in the power of AI-first thinking, scalable solutions, and ethical innovation.
                            Every company under the Futora umbrella is designed to create massive impact while maintaining
                            the highest standards of excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section pillars-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Pillars
                    </motion.h2>
                    <div className="pillars-grid">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                className="pillar-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="pillar-icon">{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section future-vision">
                <div className="container">
                    <motion.div
                        className="vision-card glass-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="gradient-text">The Future We're Building</h2>
                        <p>
                            By 2030, Futora aims to be a multi-billion dollar ecosystem powering millions of businesses
                            and individuals worldwide. Through relentless innovation, strategic scaling, and an AI-first
                            approach, we're not just adapting to the future—we're creating it.
                        </p>
                        <p>
                            Join us on this journey to redefine what's possible and build a better tomorrow, today.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
