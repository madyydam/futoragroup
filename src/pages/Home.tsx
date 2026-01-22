import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Brain, Users, CreditCard, TrendingUp, ExternalLink, CheckCircle, Rocket, LineChart, Wallet, Briefcase } from 'lucide-react';
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
            id: 'futoradrop',
            icon: <Rocket size={32} />,
            name: 'FutoraDrop',
            tagline: 'Global Launch Engine',
            description: 'Global launch and distribution engine for startups to get their first 1000 users in India.',
            theme: 'growth',
            gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            accentColor: '#4F46E5',
            link: 'https://futoradrop.vercel.app/'
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
            logo: '/futoraone-logo.png',
            name: 'FutoraOne',
            tagline: 'Connect. Build. Grow.',
            description: 'An AI-powered social media and tech community platform where creators, developers, and founders connect, share, and build together.',
            theme: 'purple',
            gradient: 'linear-gradient(135deg, #0a0118 0%, #1a1a2e 100%)',
            buttonGradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            accentColor: '#6366f1',
            link: 'https://futora1.vercel.app/'
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
        },
        {
            id: 'futoraflow',
            logo: '/futoraflow-logo.png',
            name: 'FutoraFlow',
            tagline: 'AI Operating System',
            description: 'Fully AI-commanded business operating system an execution brain for tasks, automation, and growth from one dashboard.',
            theme: 'flow',
            gradient: 'linear-gradient(135deg, #050010 0%, #0c001a 100%)',
            buttonGradient: 'linear-gradient(135deg, #a855f7 0%, #00b4d8 100%)',
            accentColor: '#a855f7',
            link: 'https://futoraflow.vercel.app/'
        }
    ], []);

    const values = useMemo(() => [
        { icon: <Sparkles />, title: 'AI-First Mindset', description: 'Every solution powered by cutting-edge AI' },
        { icon: <Target />, title: 'Global Ambition', description: 'Building for worldwide impact and scale' },
        { icon: <Zap />, title: 'Innovation at Core', description: 'Pushing boundaries of what\'s possible' }
    ], []);

    const upcomingProducts = useMemo(() => [
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
            name: 'FutoraWallet',
            icon: <Wallet size={18} />,
            tag: 'Fintech',
            description: 'Secure, AI-powered global wallet for the digital age',
            theme: 'wallet'
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
        },
        {
            name: 'FutoraID',
            icon: <Target size={18} />,
            tag: 'Identity',
            description: 'Decentralized digital identity & reputation system for the AI era',
            theme: 'ai'
        }
    ], []);

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12, // slightly bouncy but controlled
                mass: 0.9
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const heroVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        })
    };

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
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="hero-logo"
                            variants={heroVariants}
                            custom={0}
                        >
                            <img src="/logo.png" alt="Futora Logo" className="phoenix-logo" />
                        </motion.div>

                        <motion.h1
                            variants={heroVariants}
                            custom={1}
                        >
                            Futora Group <br />
                            <span className="gradient-text">of Companies</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            variants={heroVariants}
                            custom={2}
                        >
                            Futora is a group of companies building AI, fintech,<br />social, and growth platforms.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            variants={heroVariants}
                            custom={3}
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
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Companies
                    </motion.h2>
                    <motion.div
                        className="companies-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {companies.map((company) => (
                            <motion.div
                                key={company.name}
                                id={company.id}
                                className={`company-card company-card-${company.theme}`}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="company-icon" style={{ background: company.gradient }}>
                                    {company.logo ? (
                                        <img src={company.logo} alt={`${company.name} logo`} />
                                    ) : (
                                        company.icon
                                    )}
                                </div>
                                <h3>{company.name}</h3>
                                <p className="company-role">{company.tagline}</p>
                                <p className="company-description">{company.description}</p>
                                <a
                                    href={company.link}
                                    target={company.link !== '#' ? '_blank' : undefined}
                                    rel={company.link !== '#' ? 'noopener noreferrer' : undefined}
                                    className="company-btn"
                                    style={{ background: company.buttonGradient || company.gradient }}
                                >
                                    View Website <ExternalLink size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
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
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Upcoming Innovation</h2>
                        <p className="upcoming-subtitle">In Dev • AI, Trust, Social & Growth Ecosystem</p>
                    </motion.div>

                    <motion.div
                        className="mini-cards-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {upcomingProducts.map((product) => (
                            <motion.div
                                key={product.name}
                                className={`mini-card mini-card-${product.theme}`}
                                variants={cardVariants}
                                whileHover="hover"
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
                    </motion.div>
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
                    <motion.div
                        className="values-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                className="value-card glass-card"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Founder Highlight */}
            <section className="section founder-highlight">
                <div className="container">
                    <motion.div
                        className="founder-card glass-card"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
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
