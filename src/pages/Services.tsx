import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import './Services.css';

const Services: FC = () => {
    const services = useMemo(() => [
        {
            id: 'ai-consulting',
            icon: <Brain size={32} />,
            title: 'AI Consulting & Strategy',
            quotable: 'Futora Group provides enterprise AI strategy, autonomous agent architecture, and AI roadmap design for modern companies.',
            description: 'We audit your technical architecture and identify high-leverage opportunities to integrate autonomous AI workflows, reduce operational costs, and build defensible moats.',
            features: [
                'Autonomous Agent & Workflow Architecture',
                'Enterprise LLM & Model Selection',
                'Data Pipeline & Retrieval-Augmented Generation (RAG)',
                'AI Security & Governance Audits'
            ],
            accent: '#00ffff'
        },
        {
            id: 'custom-engineering',
            icon: <Cpu size={32} />,
            title: 'Custom AI & Product Engineering',
            quotable: 'Futora Group builds high-concurrency web, mobile, and cloud software platforms with embedded artificial intelligence.',
            description: 'From zero-to-one MVP development to high-throughput financial and data platforms, our engineering team turns complex AI concepts into production-grade, scalable systems.',
            features: [
                'Full-Stack Web & Mobile App Development',
                'Fintech & Payment Integration Pipelines',
                'Custom Machine Learning Model Fine-Tuning',
                'Microservices & High-Concurrency Cloud Systems'
            ],
            accent: '#6366f1'
        },
        {
            id: 'growth-engineering',
            icon: <TrendingUp size={32} />,
            title: 'Growth Marketing & Distribution (FutoraLift)',
            quotable: 'FutoraLift is Futora Group\'s growth arm delivering performance marketing, launch distribution, and automated user acquisition.',
            description: 'Scaling is a science of algorithmic testing. We execute high-conversion marketing funnels, viral distribution loops, and programmatic ad optimization to acquire your first 10,000 users.',
            features: [
                'Programmatic & AI-Driven Ad Optimization',
                'Launch Distribution & PR Distribution Loops',
                'Conversion Rate Optimization (CRO)',
                'Global & India Go-To-Market Execution'
            ],
            accent: '#0066ff'
        },
        {
            id: 'cloud-infrastructure',
            icon: <ShieldCheck size={32} />,
            title: 'Infrastructure Scaling & Hardening',
            quotable: 'Futora Group optimizes cloud infrastructure for microsecond latency, zero-downtime reliability, and institutional security.',
            description: 'We modernize legacy infrastructure into lightning-fast, secure cloud architectures ready for global spikes in traffic and stringent compliance.',
            features: [
                'Cloud Architecture & Cost Optimization',
                'Performance Hardening & Latency Minimization',
                'Compliance & Security Hardening',
                'DevOps & Automated CI/CD Pipelines'
            ],
            accent: '#00df9a'
        }
    ], []);

    const serviceSchema = useMemo(() => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Technology & AI Growth Services',
        'provider': {
            '@type': 'Organization',
            'name': 'Futora Group of Companies',
            'url': 'https://futoragroup.in',
            'logo': 'https://futoragroup.in/logo.webp'
        },
        'areaServed': 'Global',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Futora Group Growth & Technology Services',
            'itemListElement': services.map((service) => ({
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': service.title,
                    'description': service.quotable
                }
            }))
        }
    }), [services]);

    return (
        <div className="services-page">
            <SEO
                title="Growth Services — AI Consulting, Engineering & Scaling"
                description="Futora Group offers custom AI consulting, product engineering, performance marketing (FutoraLift), and cloud scaling services to partner businesses."
                url="https://futoragroup.in/services"
                schema={serviceSchema}
            />

            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="services-badge">
                            <Sparkles size={16} /> Partner & Enterprise Solutions
                        </div>
                        <h1>
                            Technology & <span className="gradient-text">Growth Services</span>
                        </h1>
                        <p className="services-quotable">
                            Futora Group delivers high-impact AI strategy, custom software engineering, and growth marketing to partner companies and high-growth ventures.
                        </p>
                        <div className="services-hero-cta">
                            <a href="#services-contact" className="btn btn-primary" aria-label="Book a consultation with Futora Group">
                                Partner With Us <ArrowRight size={18} />
                            </a>
                            <a href="#services-list" className="secondary-link" aria-label="Explore all services offered by Futora Group">
                                View Service Offerings
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services-list" className="section services-grid-section">
                <div className="container">
                    <motion.div
                        className="section-header-compact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>How We Partner With Businesses</h2>
                        <p className="services-subtitle">
                            We bring the same world-class engineering and growth engines that power our proprietary platforms to our clients.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.article
                                key={service.id}
                                className="service-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="service-icon-wrapper" style={{ color: service.accent, borderColor: `${service.accent}40` }}>
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-quotable-text">{service.quotable}</p>
                                <p className="service-description-text">{service.description}</p>

                                <div className="service-features-list">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="service-feature-item">
                                            <CheckCircle2 size={16} style={{ color: service.accent, flexShrink: 0 }} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#services-contact"
                                    className="service-card-cta"
                                    aria-label={`Inquire about ${service.title}`}
                                    style={{ color: service.accent }}
                                >
                                    Inquire about {service.title} <ArrowRight size={16} />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner with Us */}
            <section className="section services-edge">
                <div className="container">
                    <motion.div
                        className="services-edge-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>The Futora Advantage: Product-Grade Builders</h2>
                        <p>
                            Unlike traditional agencies that only consult, Futora Group actively builds, ships, and operates billion-dollar AI platforms. Every framework, automation model, and growth tactic we implement for clients has been battle-tested in our own ecosystem.
                        </p>
                        <div className="services-edge-stats">
                            <div className="stat-box">
                                <span className="stat-number gradient-text">10x</span>
                                <span className="stat-label">Faster Time to Market</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number gradient-text">AI-Native</span>
                                <span className="stat-label">Modern Tech Stack</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number gradient-text">MSME</span>
                                <span className="stat-label">Govt. of India Recognized</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="services-contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default memo(Services);
