import { useMemo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Brain, Users, CreditCard, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import './Companies.css';

const Companies: FC = () => {
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
            link: '#'
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

    return (
        <div className="companies-page">
            <div className="companies-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
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
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            className={`company-detail-card company-card-${company.theme} glass-card`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
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
                </div>
            </section>
        </div>
    );
};

export default Companies;
