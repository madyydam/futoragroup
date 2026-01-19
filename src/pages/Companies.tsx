import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Brain, Users, CreditCard, TrendingUp, Rocket, Zap, Briefcase, Wallet, LineChart, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import './Companies.css';

const Companies: FC = () => {
    const upcomingProducts = useMemo(() => [

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
        }
    ], []);

    const companies = useMemo(() => [
        {
            icon: <TrendingUp size={32} />,
            name: 'FutoraLift',
            tagline: 'Growth at Scale',
            description: 'AI-powered growth & marketing agency helping brands scale faster with data and automation.',
            features: ['AI Marketing Strategy', 'Data-Driven Growth', 'Ad Automation', 'Performance Analytics'],
            theme: 'blue',
            gradient: 'linear-gradient(135deg, #0066ff 0%, #00a3ff 100%)',
            link: 'https://futoralift.vercel.app/'
        },
        {
            icon: <Rocket size={32} />,
            name: 'FutoraDrop',
            tagline: 'Global Launch Engine',
            description: 'Global launch and distribution engine for startups to get their first 1000 users in India.',
            features: ['Global Distribution', 'Launch Analytics', 'Growth Tools', 'Startup Showcase'],
            theme: 'growth',
            gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            link: 'https://futoradrop.vercel.app/'
        },
        {
            icon: <CreditCard size={32} />,
            name: 'FutoraPay',
            tagline: 'Intelligent Money Management',
            description: 'AI-powered smart payments and financial management platform.',
            features: ['Smart Payments', 'Financial Analytics', 'Money Management', 'AI-Driven Insights'],
            theme: 'futorapay-premium',
            gradient: 'linear-gradient(135deg, #00df9a 0%, #00b881 100%)',
            link: 'https://futorapay.vercel.app/'
        },
        {
            icon: <Users size={32} />,
            name: 'FutoraOne',
            tagline: 'Connect. Build. Grow.',
            description: 'An AI-powered social media and tech community platform where creators, developers, and founders connect, share, and build together.',
            features: ['Tech Community Network', 'AI-Powered Connections', 'Project Showcasing', 'Creator Ecosystem'],
            theme: 'purple',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            link: 'https://futora1.vercel.app/'
        },
        {
            icon: <Brain size={32} />,
            name: 'Futora AI',
            tagline: 'Intelligence for Tomorrow',
            description: 'AI education, tools & future tech brand building and showcasing cutting-edge AI solutions.',
            features: ['AI Education & Resources', 'Cutting-edge AI Tools', 'Automation Systems', 'Intelligence Platforms'],
            theme: 'neon',
            gradient: 'linear-gradient(135deg, #00ffff 0%, #0080ff 100%)',
            link: 'https://futoraai.vercel.app/'
        }
    ], []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                mass: 0.9
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <div className="companies-page">
            <div className="companies-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                    >
                        <SEO
                            title="Our Companies"
                            description="Explore the Futora Group ecosystem: FutoraLift (Marketing), FutoraPay (Fintech), FutoraOne (Social), and Futora AI (Education & Tools)."
                            url="https://futora.com/companies"
                        />
                        <h1>Our <span className="gradient-text">Companies</span></h1>
                        <p>Four visionary brands, one powerful ecosystem—transforming industries with AI, automation, and innovation.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section companies-list">
                <div className="container">
                    <motion.div
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {companies.map((company) => (
                            <motion.div
                                key={company.name}
                                className={`company-detail-card company-card-${company.theme} glass-card`}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="company-detail-header">
                                    <div className="company-detail-icon" style={{ background: company.gradient }}>
                                        {company.icon}
                                    </div>
                                    <div className="company-detail-title">
                                        <h2>{company.name}</h2>
                                        <p className="company-tagline">{company.tagline}</p>
                                    </div>
                                </div>
                                <p className="company-description">{company.description}</p>
                                <div className="company-features">
                                    {company.features.map((feature, i) => (
                                        <span key={i} className="feature-badge">{feature}</span>
                                    ))}
                                </div>
                                <a href={company.link} className="visit-btn">
                                    View Website <ExternalLink size={18} />
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    >
                        <h2>Upcoming <span className="gradient-text">Innovation</span></h2>
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
        </div>
    );
};

export default memo(Companies);
