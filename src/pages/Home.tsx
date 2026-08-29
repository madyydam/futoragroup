import { useState, useMemo, memo } from 'react';
import type { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, Target, Zap, Brain, Users, CreditCard, TrendingUp, ExternalLink, CheckCircle, Rocket, LineChart, Wallet, Briefcase, Radio, ChevronDown, Code2, Cloud, Building2, ShoppingBag, Search, Compass, ShieldCheck } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import Hero3D from '../components/Hero3D';
import './Home.css';

interface CompanyModule {
    name: string;
    role: string;
    icon: ReactNode;
    features: string[];
    url: string;
}

interface CompanyItem {
    id: string;
    icon?: ReactNode;
    logo?: string;
    name: string;
    tagline: string;
    quotable?: string;
    description?: string;
    theme: string;
    gradient: string;
    buttonGradient?: string;
    accentColor?: string;
    link?: string;
    modules?: CompanyModule[];
}

const Home: FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const companies = useMemo(() => [
        {
            id: 'futoralift',
            icon: <TrendingUp size={32} />,
            name: 'FutoraLift',
            tagline: 'Growth at Scale',
            quotable: 'FutoraLift is an AI-powered growth marketing and user acquisition engine helping businesses scale with automated data pipelines.',
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
            quotable: 'FutoraDrop is a high-velocity distribution launchpad helping tech startups secure their first 1,000 active users in India.',
            description: 'Global launch and distribution engine for startups to get their first 1000 users in India.',
            theme: 'growth',
            gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            accentColor: '#4F46E5',
            link: 'https://futoradrop.vercel.app/'
        },
        {
            id: 'futorafinance',
            logo: '/futorafinance-logo.webp',
            name: 'Futora Finance',
            tagline: 'AI-Powered Financial Infrastructure',
            quotable: 'Futora Finance is a next-generation AI financial infrastructure providing intelligent wealth management and instant UPI payments.',
            description: 'Intelligent fintech operating system powering AI asset management and instant transactions.',
            theme: 'futorapay-premium',
            gradient: 'linear-gradient(135deg, #00df9a 0%, #00b881 100%)',
            accentColor: '#00df9a',
            link: 'https://futorapay.vercel.app/',
            modules: [
                {
                    name: 'Futora Wallet',
                    role: 'AI Financial Management OS',
                    icon: <Wallet size={16} />,
                    features: ['Finance mgmt', 'AI insights', 'Wallet infra'],
                    url: 'https://futorapay.vercel.app/'
                },
                {
                    name: 'Futora Pay',
                    role: 'Next-Gen UPI Payments App',
                    icon: <CreditCard size={16} />,
                    features: ['Fast transactions', 'Secure checkout', 'UPI Integration'],
                    url: 'https://futorawallet.vercel.app/'
                }
            ]
        },
        {
            id: 'futoraone',
            logo: '/futoraone-logo.webp',
            name: 'FutoraOne',
            tagline: 'Connect. Build. Grow.',
            quotable: 'FutoraOne is an AI-native social network and collaborative ecosystem for developers, tech creators, and founders.',
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
            quotable: 'Futora AI is the core intelligence and research engine developing autonomous AI agent workflows and developer tools.',
            description: 'AI education, tools & future tech brand building and showcasing cutting-edge AI solutions.',
            theme: 'neon',
            gradient: 'linear-gradient(135deg, #00ffff 0%, #0080ff 100%)',
            accentColor: '#00ffff',
            link: 'https://futoraai.vercel.app/'
        },
        {
            id: 'futoraflow',
            logo: '/futoraflow-logo.webp',
            name: 'FutoraFlow',
            tagline: 'AI Operating System',
            quotable: 'FutoraFlow is an autonomous business execution OS that orchestrates workflows, automation, and tasks from a unified dashboard.',
            description: 'Fully AI-commanded business operating system an execution brain for tasks, automation, and growth from one dashboard.',
            theme: 'flow',
            gradient: 'linear-gradient(135deg, #050010 0%, #0c001a 100%)',
            buttonGradient: 'linear-gradient(135deg, #a855f7 0%, #00b4d8 100%)',
            accentColor: '#a855f7',
            link: 'https://futoraflow.vercel.app/'
        },
        {
            id: 'careeros',
            icon: <Briefcase size={32} />,
            name: 'Career OS',
            tagline: 'Courses • Internships • Jobs',
            quotable: 'Career OS is a proof-of-work talent platform connecting ambitious developers and builders with top startup opportunities.',
            description: 'The ultimate proof-of-work platform to learn, get internships, and land high-impact startup jobs.',
            theme: 'jobs',
            gradient: 'linear-gradient(135deg, #ffffff 0%, #a1a1a1 100%)',
            accentColor: '#ffffff',
            link: 'https://careerosx.vercel.app/'
        }
    ], []);

    const values = useMemo(() => [
        { icon: <Sparkles />, title: 'AI-First Mindset', description: 'Every solution powered by cutting-edge AI' },
        { icon: <Target />, title: 'Global Ambition', description: 'Building for worldwide impact and scale' },
        { icon: <Zap />, title: 'Innovation at Core', description: 'Pushing boundaries of what\'s possible' }
    ], []);

    const upcomingProducts = useMemo(() => [
        {
            name: 'FutoraAgents',
            icon: <Brain size={18} />,
            tag: 'AI',
            description: 'Builder for autonomous AI agents & workflows',
            theme: 'ai'
        },
        {
            name: 'FutoraSense',
            icon: <Radio size={18} />,
            tag: 'Launching Soon',
            description: 'AI platform that senses business signals, risks & opportunities in real-time. Coming soon to the Futora ecosystem.',
            theme: 'insights'
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

    const homeServices = useMemo(() => [
        { name: 'Software Development', icon: <Code2 size={20} />, color: '#00ffff', badge: 'Engineering' },
        { name: 'AI & Automation', icon: <Brain size={20} />, color: '#a855f7', badge: 'Intelligence' },
        { name: 'Cloud & Infrastructure', icon: <Cloud size={20} />, color: '#00df9a', badge: 'DevOps & Scale' },
        { name: 'Enterprise Systems', icon: <Building2 size={20} />, color: '#ffaa00', badge: 'Enterprise' },
        { name: 'Web & Commerce', icon: <ShoppingBag size={20} />, color: '#00a3ff', badge: 'Commerce' },
        { name: 'SEO & Content', icon: <Search size={20} />, color: '#6366f1', badge: 'Organic Growth' },
        { name: 'Branding & Marketing', icon: <Sparkles size={20} />, color: '#ec4899', badge: 'Growth' },
        { name: 'Consulting & Strategy', icon: <Compass size={20} />, color: '#14b8a6', badge: 'Advisory' },
        { name: 'Quality & Support', icon: <ShieldCheck size={20} />, color: '#10b981', badge: 'Assurance' }
    ], []);

    const faqs = useMemo(() => [
        {
            question: 'Who is Madhur Dhadve?',
            answer: 'Madhur Dhadve is the founder and CEO of Futora Group, an Indian technology entrepreneur and AI specialist building venture-scale software platforms and growth engineering ecosystems.'
        },
        {
            question: 'What is Futora Group?',
            answer: 'Futora Group is an AI-first technology company and conglomerate founded by Madhur Dhadve, building proprietary AI software platforms (FutoraPay, FutoraOne, Futora AI, FutoraLift, FutoraFlow) while providing enterprise growth engineering and technology consulting.'
        },
        {
            question: 'What does Futora Group do?',
            answer: 'Futora Group invents, scales, and operates proprietary AI platforms in fintech, social media, and automation, while offering custom AI development, performance marketing, and technology consulting to external partner companies.'
        },
        {
            question: 'Is Futora Group a product company or a service company?',
            answer: 'Futora Group operates on a dual model: we build and own proprietary AI products (FutoraOne, FutoraPay, Futora AI, FutoraLift, FutoraFlow) and deliver high-impact technology and growth services (Growth Services) to help partner companies scale.'
        },
        {
            question: 'What is FutoraPay and how does it work with UPI?',
            answer: 'FutoraPay is an AI-powered financial infrastructure platform that combines smart personal wealth management with secure, high-concurrency instant UPI transaction processing.'
        },
        {
            question: 'What is FutoraOne?',
            answer: 'FutoraOne is an AI-powered social media and tech community platform where developers, creators, and startup founders connect, showcase projects, and build together.'
        },
        {
            question: 'What services does Futora Group offer to external businesses?',
            answer: 'Through our Growth Services division, we provide enterprise AI consulting, custom software and AI engineering, performance marketing and launch distribution via FutoraLift, and cloud infrastructure optimization.'
        }
    ], []);

    const homeSchemas = useMemo(() => [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Futora Group of Companies',
            'alternateName': 'Futora Group',
            'url': 'https://futoragroup.in',
            'logo': 'https://futoragroup.in/logo.webp',
            'founder': {
                '@type': 'Person',
                'name': 'Madhur Dhadve',
                'jobTitle': 'Founder & Visionary',
                'sameAs': [
                    'https://in.linkedin.com/in/madhur-dhadve-5b598433a',
                    'https://instagram.com/madhur.dhadve'
                ]
            },
            'sameAs': [
                'https://in.linkedin.com/in/madhur-dhadve-5b598433a',
                'https://instagram.com/madhur.dhadve'
            ],
            'description': 'Futora Group is a product-and-service technology company building AI platforms across fintech, social media, marketing, and growth sectors.',
            'brand': companies.map((c) => ({
                '@type': 'Brand',
                'name': c.name,
                'description': c.quotable || c.description,
                'url': c.link
            }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map((faq) => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.answer
                }
            }))
        }
    ], [faqs]);

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
                damping: 12,
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
                title="Building the Future with AI Products & Growth Services"
                description="Futora Group is a product-and-service tech ecosystem founded by Madhur Dhadve, building AI platforms across fintech (FutoraPay), social (FutoraOne), AI (Futora AI), and marketing (FutoraLift)."
                url="https://futoragroup.in/"
                schema={homeSchemas}
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
                            <img
                                src="/logo.webp"
                                alt="Futora Group Phoenix Logo"
                                className="phoenix-logo"
                                width="140"
                                height="140"
                                fetchPriority="high"
                            />
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
                            Building the future of AI-driven platforms.<br />
                            Vision. Scale. Innovation.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            variants={heroVariants}
                            custom={3}
                        >
                            <a href="#companies" className="btn btn-primary" aria-label="Explore Futora Group Companies and Products">
                                Explore Products
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
                        Our Companies & Products
                    </motion.h2>
                    <motion.div
                        className="companies-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {companies.map((company: CompanyItem) => (
                            <motion.article
                                key={company.name}
                                id={company.id}
                                className={`company-card company-card-${company.theme}`}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="company-icon" style={{ background: company.gradient }}>
                                    {company.logo ? (
                                        <img
                                            src={company.logo}
                                            alt={`${company.name} official logo`}
                                            width="44"
                                            height="44"
                                            loading="lazy"
                                        />
                                    ) : (
                                        company.icon
                                    )}
                                </div>
                                <h3 style={{ marginBottom: '4px' }}>{company.name}</h3>
                                <p className="company-role" style={{ fontSize: '0.7rem', opacity: 0.9, marginBottom: '8px' }}>{company.tagline}</p>
                                {company.description && (
                                    <p className="company-description" style={{ marginBottom: company.modules ? '12px' : '8px' }}>{company.description}</p>
                                )}

                                {company.modules && (
                                    <div className="finance-modules-grid">
                                        {company.modules.map((module: CompanyModule, idx: number) => (
                                            <a
                                                key={idx}
                                                href={module.url || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${module.name} application`}
                                                style={{
                                                    textDecoration: 'none',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.06)',
                                                    borderRadius: '8px',
                                                    padding: '8px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.2s ease',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                }}
                                            >
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    marginBottom: '8px',
                                                    color: company.accentColor
                                                }}>
                                                    {module.icon}
                                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>{module.name}</span>
                                                </div>
                                                <div style={{
                                                    background: 'rgba(0, 223, 154, 0.1)',
                                                    border: '1px solid rgba(0, 223, 154, 0.3)',
                                                    borderRadius: '100px',
                                                    padding: '2px 8px',
                                                    fontSize: '0.6rem',
                                                    color: '#00df9a',
                                                    fontWeight: 600,
                                                    width: 'fit-content',
                                                    marginBottom: '4px',
                                                    cursor: 'default',
                                                    boxShadow: '0 0 10px rgba(0, 223, 154, 0.1)'
                                                }}>
                                                    {module.role}
                                                </div>

                                                <div style={{
                                                    marginTop: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    fontSize: '0.65rem',
                                                    color: company.accentColor,
                                                    fontWeight: 600,
                                                    textShadow: '0 0 8px rgba(0, 223, 154, 0.6)',
                                                    opacity: 1
                                                }}>
                                                    Visit App <ArrowRight size={12} />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {!company.modules && (
                                    <a
                                        href={company.link}
                                        target={company.link !== '#' ? '_blank' : undefined}
                                        rel={company.link !== '#' ? 'noopener noreferrer' : undefined}
                                        className="company-btn"
                                        aria-label={`Visit ${company.name} website`}
                                        style={{ background: company.buttonGradient || company.gradient, marginTop: 'auto' }}
                                    >
                                        View Website <ExternalLink size={16} />
                                    </a>
                                )}
                            </motion.article>
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

            {/* Technology & Growth Services Section */}
            <section className="section home-services-section">
                <div className="container">
                    <motion.div
                        className="section-header-compact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="innovation-badge">
                            <Sparkles size={14} /> Partner & Enterprise Solutions
                        </div>
                        <h2>Technology & <span className="gradient-text">Growth Services</span></h2>
                        <p className="upcoming-subtitle">
                            High-velocity engineering, custom AI architectures, cloud scaling, and performance growth engines built for modern businesses.
                        </p>
                    </motion.div>

                    <div className="home-services-grid">
                        {homeServices.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04, duration: 0.4 }}
                            >
                                <Link 
                                    to="/services" 
                                    className="home-service-card"
                                    aria-label={`Explore ${cat.name} services`}
                                >
                                    <div 
                                        className="home-service-icon"
                                        style={{ 
                                            color: cat.color,
                                            borderColor: `${cat.color}40`,
                                            background: `${cat.color}12`
                                        }}
                                    >
                                        {cat.icon}
                                    </div>
                                    <div className="home-service-text">
                                        <h4>{cat.name}</h4>
                                        <span 
                                            className="home-service-badge"
                                            style={{
                                                color: cat.color,
                                                borderColor: `${cat.color}30`,
                                                background: `${cat.color}0a`
                                            }}
                                        >
                                            {cat.badge}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="home-service-arrow" size={16} style={{ color: cat.color }} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/services" className="btn btn-primary" aria-label="Explore all technology and growth services">
                            Explore All Services <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section (AEO & GEO Powerhouse) */}
            <section className="section faq-section">
                <div className="container">
                    <motion.div
                        className="section-header-compact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="innovation-badge">
                            <Brain size={14} /> Clear Facts & Questions
                        </div>
                        <h2>Frequently Asked Questions</h2>
                        <p className="upcoming-subtitle">
                            Everything you need to know about the Futora Group ecosystem, platforms, and services.
                        </p>
                    </motion.div>

                    <div className="faq-accordion" style={{ maxWidth: '800px', margin: '36px auto 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {faqs.map((faq, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    className="glass-card faq-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: isOpen ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '20px 24px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#fff',
                                            textAlign: 'left',
                                            fontSize: '1.05rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            size={20}
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                                color: isOpen ? '#6366f1' : 'var(--gray-300)',
                                                flexShrink: 0
                                            }}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                id={`faq-answer-${index}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div style={{
                                                    padding: '0 24px 20px',
                                                    color: 'var(--gray-200)',
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.6',
                                                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                                    paddingTop: '16px'
                                                }}>
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
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
                            <Link to="/founder" className="btn btn-primary" aria-label="Read full story of Madhur Dhadve">
                                Read Full Story <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Legal & Compliance Section */}
            <section className="section legal-compliance-home" style={{ paddingTop: 0 }}>
                <div className="container">
                    <motion.div
                        className="legal-card-home glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ padding: '40px' }}
                    >
                        <h2 style={{ marginBottom: '30px', fontSize: '1.5rem', color: '#fff' }}>Legal & Compliance</h2>
                        <div className="legal-content-wrapper-home">
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
                                <p style={{ fontSize: '1.1rem', color: 'var(--gray-200)', lineHeight: '1.6' }}>
                                    Futora Group of Companies is a Government of India recognized MSME, operating as a registered technology holding company focused on AI, fintech, and digital platforms.
                                </p>
                            </div>
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
