import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Brain, Users, CreditCard, TrendingUp, ExternalLink, Shield, CheckCircle, Rocket, LineChart, Wallet, Briefcase } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import Hero3D from '../components/Hero3D';
import './Home.css';

const Home: FC = () => {
    const companies = useMemo(() => [
        {
            id: 'futoralift',
            icon: <TrendingUp size={32} />,
            name: 'FutoraLift',
            tagline: 'Growth at Scale',
            description: 'AI-powered growth & marketing agency helping brands scale faster with data and automation.',
            theme: 'blue',
            gradient: 'linear-gradient(135deg, #0066ff 0%, #00a3ff 100%)',
            accentColor: '#0066ff',
            link: 'https://futoralift.vercel.app/'
        },
        {
            id: 'futorapay',
            icon: <CreditCard size={32} />,
            name: 'FutoraPay',
            tagline: 'Intelligent Money Management',
            description: 'AI-powered smart payments and financial management platform.',
            theme: 'futorapay-premium',
            gradient: 'linear-gradient(135deg, #00df9a 0%, #00b881 100%)',
            accentColor: '#00df9a',
            link: 'https://futorapay.vercel.app/'
        },
        {
            id: 'futoraone',
            icon: <Users size={32} />,
            name: 'FutoraOne',
            tagline: 'Connect. Build. Grow.',
            description: 'An AI-powered social media and tech community platform where creators, developers, and founders connect, share, and build together.',
            theme: 'purple',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            accentColor: '#6366f1',
            link: '#'
        },
        {
            id: 'futoraai',
            icon: <Brain size={32} />,
            name: 'Futora AI',
            tagline: 'Intelligence for Tomorrow',
            description: 'AI education, tools & future tech brand building and showcasing cutting-edge AI solutions.',
            theme: 'neon',
            gradient: 'linear-gradient(135deg, #00ffff 0%, #0080ff 100%)',
            accentColor: '#00ffff',
            link: 'https://futoraai.vercel.app/'
        }
    ], []);

    const values = useMemo(() => [
        { icon: <Sparkles />, title: 'AI-First Mindset', description: 'Every solution powered by cutting-edge AI' },
        { icon: <Target />, title: 'Global Ambition', description: 'Building for worldwide impact and scale' },
        { icon: <Zap />, title: 'Innovation at Core', description: 'Pushing boundaries of what\'s possible' }
    ], []);

    const upcomingProducts = useMemo(() => [
        {
            name: 'FutoraDrop',
            icon: <Rocket size={18} />,
            tag: 'Growth',
            description: 'Global launch and distribution engine',
            theme: 'growth'
        },
        {
            name: 'FutoraFlow',
            icon: <Zap size={18} />,
            tag: 'AI',
            description: 'AI execution brain for task orchestration',
            theme: 'ai'
        },
        {
            name: 'FutoraJobs Lite',
            icon: <Briefcase size={18} />,
            tag: 'Jobs',
            description: 'Startup jobs platform for proof of work',
            theme: 'jobs'
        },
        {
            name: 'FutoraAgents',
            icon: <Brain size={18} />,
            tag: 'AI',
            description: 'Builder for autonomous AI agents & workflows',
            theme: 'ai'
        },
        {
            name: 'FutoraFinance AI',
            icon: <Wallet size={18} />,
            tag: 'Fintech',
            description: 'Smart financial assistant & global wallet',
            theme: 'fintech'
        },
        {
            name: 'FutoraPulse',
            icon: <LineChart size={18} />,
            tag: 'Insights',
            description: 'AI-driven social insights & trend detection',
            theme: 'insights'
        },
        {
            name: 'FutoraID',
            icon: <Shield size={18} />,
            tag: 'Trust',
            description: 'Verified tech identity & reputation backbone',
            theme: 'trust'
        },
        {
            name: 'FutoraTrust',
            icon: <CheckCircle size={18} />,
            tag: 'Trust',
            description: 'Internet trust engine for credibility scoring',
            theme: 'trust'
        },
        {
            name: 'FutoraCircle',
            icon: <Users size={18} />,
            tag: 'Social',
            description: 'Private micro-communities for builders',
            theme: 'social'
        }
    ], []);

    return (
        <div className="home">
            <SEO
                title="Home"
                description="Futora Group is a multi-company tech ecosystem building billion-dollar AI platforms across fintech, social, marketing, and growth."
            />
            {/* Hero Section */}
            <section className="hero">
                <Hero3D />
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="hero-logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src="/logo.png" alt="Futora Logo" className="phoenix-logo" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Futora Group <br />
                            <span className="gradient-text">of Companies</span>
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Futora is a group of companies building AI, fintech,<br />social, and growth platforms.
                        </motion.p>
                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <a href="#companies" className="btn btn-primary">
                                Explore Companies
                            </a>
                            <a href="#contact" className="secondary-link">
                                Contact Futora <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Companies */}
            <section id="companies" className="section companies-grid-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Companies
                    </motion.h2>
                    <div className="companies-grid">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                id={company.id}
                                className={`company-card company-card-${company.theme}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="company-icon" style={{ background: company.gradient }}>
                                    {company.icon}
                                </div>
                                <h3>{company.name}</h3>
                                <p className="company-role">{company.tagline}</p>
                                <p className="company-description">{company.description}</p>
                                <a
                                    href={company.link}
                                    target={company.link !== '#' ? '_blank' : undefined}
                                    rel={company.link !== '#' ? 'noopener noreferrer' : undefined}
                                    className="company-btn"
                                    style={{ background: company.gradient }}
                                >
                                    View Website <ExternalLink size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Innovation Section */}
            <section className="section upcoming-innovation">
                <div className="container">
                    <motion.div
                        className="section-header-compact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Upcoming Innovation</h2>
                        <p className="upcoming-subtitle">In Dev • AI, Trust, Social & Growth Ecosystem</p>
                    </motion.div>

                    <div className="mini-cards-grid">
                        {upcomingProducts.map((product, index) => (
                            <motion.div
                                key={product.name}
                                className={`mini-card mini-card-${product.theme}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                <div className="mini-card-icon">
                                    {product.icon}
                                </div>
                                <div className="mini-card-content">
                                    <h4>{product.name}</h4>
                                    <p className="mini-card-description">{product.description}</p>
                                    <span className="mini-card-tag">{product.tag}</span>
                                </div>
                                <div className="mini-card-badge">In Dev</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Futora */}
            <section className="section why-futora">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Futora
                    </motion.h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="value-card glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Highlight */}
            <section className="section founder-highlight">
                <div className="container">
                    <motion.div
                        className="founder-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="founder-content">
                            <h2>Meet the Founder</h2>
                            <h3 className="gradient-text">Madhur Dhadve</h3>
                            <p className="founder-role">Founder & Visionary</p>
                            <p className="founder-bio">
                                A passionate innovator dedicated to building billion-dollar AI platforms that shape the future.
                                With expertise in AI, startups, and future tech, Madhur is creating an ecosystem that scales globally.
                            </p>
                            <a href="/founder" className="btn btn-primary">
                                Read Full Story <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default memo(Home);
