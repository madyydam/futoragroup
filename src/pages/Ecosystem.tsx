import { useMemo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Zap,
    Shield,
    CheckCircle,
    Users,
    Network,
    Rocket,
    LineChart,
    Wallet,
    Briefcase,
    TrendingUp,
    CreditCard
} from 'lucide-react';
import SEO from '../components/SEO';
import './Ecosystem.css';

const Ecosystem: FC = () => {
    const currentCompanies = useMemo(() => [
        { name: 'FutoraLift', icon: <TrendingUp size={20} />, color: '#0066ff' },
        { name: 'FutoraPay', icon: <CreditCard size={20} />, color: '#00df9a' },
        { name: 'FutoraOne', icon: <Users size={20} />, color: '#a855f7' },
        { name: 'Futora AI', icon: <Brain size={20} />, color: '#00ffff' }
    ], []);

    const categories = useMemo(() => [
        {
            title: 'Core Intelligence',
            products: [
                {
                    name: 'FutoraAgents',
                    desc: 'Autonomous AI agents & workflow builder.',
                    icon: <Brain size={24} />,
                    tag: 'AI',
                    hook: 'Command autonomy.'
                },
                {
                    name: 'FutoraFlow',
                    desc: 'AI execution brain for tasks & productivity.',
                    icon: <Zap size={24} />,
                    tag: 'AI',
                    hook: 'Flow at lightspeed.'
                }
            ]
        },
        {
            title: 'Identity, Trust & Infrastructure',
            products: [
                {
                    name: 'FutoraID',
                    desc: 'Verified tech identity & reputation layer.',
                    icon: <Shield size={24} />,
                    tag: 'Trust',
                    hook: 'Proof over promises.'
                },
                {
                    name: 'FutoraTrust',
                    desc: 'Authenticity & internet trust scoring.',
                    icon: <CheckCircle size={24} />,
                    tag: 'Trust',
                    hook: 'Trust the future.'
                }
            ]
        },
        {
            title: 'Community & Collaboration',
            products: [
                {
                    name: 'FutoraCircle',
                    desc: 'Private micro‑communities for builders.',
                    icon: <Users size={24} />,
                    tag: 'Social',
                    hook: 'Built for Builders.'
                },
                {
                    name: 'FutoraGroup',
                    desc: 'Partnerships & scaling network.',
                    icon: <Network size={24} />,
                    tag: 'Network',
                    hook: 'Scale together.'
                }
            ]
        },
        {
            title: 'Growth, Launch & Distribution',
            products: [
                {
                    name: 'FutoraDrop',
                    desc: 'Global product launch & distribution engine.',
                    icon: <Rocket size={24} />,
                    tag: 'Growth',
                    hook: 'Launch or vanish.'
                },
                {
                    name: 'FutoraPulse',
                    desc: 'Social insights & trend detection.',
                    icon: <LineChart size={24} />,
                    tag: 'Insights',
                    hook: 'Signal. Trends. Action.'
                }
            ]
        },
        {
            title: 'Finance & Payments',
            products: [
                {
                    name: 'FutoraFinance AI',
                    desc: 'AI financial assistant & global wallet.',
                    icon: <Wallet size={24} />,
                    tag: 'Fintech',
                    hook: 'Money, mastered.'
                }
            ]
        },
        {
            title: 'Work & Opportunities',
            products: [
                {
                    name: 'FutoraJobs Lite',
                    desc: 'Proof‑of‑work focused startup jobs platform.',
                    icon: <Briefcase size={24} />,
                    tag: 'Jobs',
                    hook: 'Work that matters.'
                }
            ]
        }
    ], []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const sectionHeaderVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 20
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <div className="ecosystem-page">
            <SEO
                title="Futora Ecosystem | The Future Roadmap"
                description="Explore the Futora Group ecosystem and upcoming AI-powered products. From autonomous agents to global fintech solutions."
                url="https://futora.com/ecosystem"
            />

            <div className="ecosystem-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                    >
                        <h1 className="gradient-text">Futora Ecosystem</h1>
                        <p>The roadmap to a machine-intelligent future. One weapon at a time.</p>

                        <div className="active-arsenal">
                            <motion.div
                                className="active-grid"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {currentCompanies.map((company) => (
                                    <motion.div
                                        key={company.name}
                                        className="active-card glass-card"
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <div className="active-icon" style={{ background: company.color }}>
                                            {company.icon}
                                        </div>
                                        <div className="active-info">
                                            <h4>{company.name}</h4>
                                            <p>Active</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="section future-frontier">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Future Frontier</h2>
                        <p>Incoming breakthroughs. Built for speed and acceleration.</p>
                    </motion.div>

                    {categories.map((cat) => (
                        <div key={cat.title} className="category-section">
                            <motion.div
                                className="category-header"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={sectionHeaderVariants}
                            >
                                <h3>{cat.title}</h3>
                            </motion.div>

                            <motion.div
                                className="product-grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {cat.products.map((product) => (
                                    <motion.div
                                        key={product.name}
                                        className="product-card glass-card"
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <div className="status-badge">In Dev</div>
                                        <div className="product-icon">{product.icon}</div>
                                        <div className="product-content">
                                            <h4>{product.name}</h4>
                                            <p className="product-desc">{product.desc}</p>
                                        </div>
                                        <div className="product-footer">
                                            <span className="category-tag">{product.tag}</span>
                                            <span className="product-hook">{product.hook}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Ecosystem;
