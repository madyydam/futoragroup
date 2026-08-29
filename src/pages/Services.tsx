import { useMemo, memo } from 'react';
import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
    Code2, 
    Globe,
    Smartphone,
    Layers,
    Cpu,
    LayoutDashboard,
    RefreshCw,
    Zap,
    Brain, 
    Bot,
    GitBranch,
    Eye,
    Database,
    Network,
    Cloud, 
    GitPullRequest,
    Terminal,
    Boxes,
    Activity,
    TrendingDown,
    Gauge,
    HardDrive,
    Building2, 
    Users,
    Briefcase,
    Workflow,
    CreditCard,
    Server,
    ShoppingBag, 
    Store,
    Target,
    FileCode,
    Search, 
    BookOpen,
    PenTool,
    Link2,
    MapPin,
    BarChart2,
    Sparkles, 
    Award,
    Palette,
    Megaphone,
    LineChart,
    Share2,
    Compass, 
    CheckSquare,
    TrendingUp,
    Map,
    FileCheck,
    UserPlus,
    Crown,
    ShieldCheck, 
    ShieldAlert,
    LifeBuoy,
    Sliders,
    CheckCircle2,
    ArrowRight, 
    ArrowUpRight 
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import './Services.css';

interface ServiceItem {
    name: string;
    icon: ReactNode;
}

interface ServiceCategory {
    id: string;
    title: string;
    icon: ReactNode;
    accent: string;
    badge: string;
    items: ServiceItem[];
}

const Services: FC = () => {
    const serviceCategories: ServiceCategory[] = useMemo(() => [
        {
            id: 'software-development',
            title: 'Software Development',
            icon: <Code2 size={22} />,
            accent: '#00ffff',
            badge: 'Engineering',
            items: [
                { name: 'Custom Software Development', icon: <Code2 size={18} /> },
                { name: 'Web Application Development', icon: <Globe size={18} /> },
                { name: 'Mobile App Development (iOS & Android)', icon: <Smartphone size={18} /> },
                { name: 'SaaS Product Development (MVP to Scale)', icon: <Layers size={18} /> },
                { name: 'API Design & Development', icon: <Cpu size={18} /> },
                { name: 'Internal Tools & Admin Dashboards', icon: <LayoutDashboard size={18} /> },
                { name: 'Legacy System Modernization & Migration', icon: <RefreshCw size={18} /> },
                { name: 'Progressive Web Apps (PWAs)', icon: <Zap size={18} /> }
            ]
        },
        {
            id: 'ai-automation',
            title: 'AI & Automation',
            icon: <Brain size={22} />,
            accent: '#a855f7',
            badge: 'Intelligence',
            items: [
                { name: 'AI-Powered Feature Integration', icon: <Sparkles size={18} /> },
                { name: 'Custom LLM & Chatbot Development', icon: <Bot size={18} /> },
                { name: 'Workflow Automation', icon: <GitBranch size={18} /> },
                { name: 'Machine Learning Model Development', icon: <Brain size={18} /> },
                { name: 'Computer Vision Solutions', icon: <Eye size={18} /> },
                { name: 'AI Agents & Copilots', icon: <Cpu size={18} /> },
                { name: 'Data Pipeline & Analytics Automation', icon: <Database size={18} /> },
                { name: 'RAG (Retrieval-Augmented Generation) Systems', icon: <Network size={18} /> }
            ]
        },
        {
            id: 'cloud-infrastructure',
            title: 'Cloud & Infrastructure',
            icon: <Cloud size={22} />,
            accent: '#00df9a',
            badge: 'DevOps & Scale',
            items: [
                { name: 'Cloud Architecture & Migration (AWS, Azure, GCP)', icon: <Cloud size={18} /> },
                { name: 'DevOps & CI/CD Pipeline Setup', icon: <GitPullRequest size={18} /> },
                { name: 'Infrastructure as Code (Terraform, CloudFormation)', icon: <Terminal size={18} /> },
                { name: 'Kubernetes & Container Orchestration', icon: <Boxes size={18} /> },
                { name: 'Site Reliability Engineering (SRE)', icon: <Activity size={18} /> },
                { name: 'Cloud Cost Optimization', icon: <TrendingDown size={18} /> },
                { name: 'Monitoring & Observability Setup', icon: <Gauge size={18} /> },
                { name: 'Disaster Recovery & Backup Solutions', icon: <HardDrive size={18} /> }
            ]
        },
        {
            id: 'enterprise-systems',
            title: 'Enterprise Systems',
            icon: <Building2 size={22} />,
            accent: '#ffaa00',
            badge: 'Enterprise Operations',
            items: [
                { name: 'ERP Systems (Inventory, Billing, HR, Operations)', icon: <Building2 size={18} /> },
                { name: 'CRM Development & Integration', icon: <Users size={18} /> },
                { name: 'HRMS / Payroll Systems', icon: <Briefcase size={18} /> },
                { name: 'Business Process Automation', icon: <Workflow size={18} /> },
                { name: 'Third-Party Integrations & Payment Gateways', icon: <CreditCard size={18} /> },
                { name: 'Database Design & Optimization', icon: <Server size={18} /> }
            ]
        },
        {
            id: 'web-commerce',
            title: 'Web & Commerce',
            icon: <ShoppingBag size={22} />,
            accent: '#00a3ff',
            badge: 'Commerce & Web',
            items: [
                { name: 'Marketing Websites (High-Performance & Conversion)', icon: <Globe size={18} /> },
                { name: 'E-commerce Development', icon: <ShoppingBag size={18} /> },
                { name: 'Headless Commerce Solutions', icon: <Store size={18} /> },
                { name: 'Landing Page Design & Optimization', icon: <Target size={18} /> },
                { name: 'CMS Development (WordPress & Custom CMS)', icon: <FileCode size={18} /> }
            ]
        },
        {
            id: 'seo-content',
            title: 'SEO & Content',
            icon: <Search size={22} />,
            accent: '#6366f1',
            badge: 'Organic Growth',
            items: [
                { name: 'Technical SEO Audits & Implementation', icon: <Search size={18} /> },
                { name: 'Content Strategy & Topical Authority Building', icon: <BookOpen size={18} /> },
                { name: 'Content Engine Development (Blogs & Hubs)', icon: <PenTool size={18} /> },
                { name: 'Link Building & Off-page SEO', icon: <Link2 size={18} /> },
                { name: 'Local SEO & Geo-Targeting', icon: <MapPin size={18} /> },
                { name: 'SEO Performance Reporting', icon: <BarChart2 size={18} /> }
            ]
        },
        {
            id: 'branding-marketing',
            title: 'Branding & Marketing',
            icon: <Sparkles size={22} />,
            accent: '#ec4899',
            badge: 'Growth & Brand',
            items: [
                { name: 'Brand Identity & Positioning', icon: <Award size={18} /> },
                { name: 'UI/UX Design & Design Systems', icon: <Palette size={18} /> },
                { name: 'Paid Growth / Performance Marketing (PPC & Ads)', icon: <Megaphone size={18} /> },
                { name: 'Marketing Automation Setup', icon: <Zap size={18} /> },
                { name: 'Analytics & Conversion Rate Optimization (CRO)', icon: <LineChart size={18} /> },
                { name: 'Social Media Strategy', icon: <Share2 size={18} /> }
            ]
        },
        {
            id: 'consulting-strategy',
            title: 'Consulting & Strategy',
            icon: <Compass size={22} />,
            accent: '#14b8a6',
            badge: 'Technical Advisory',
            items: [
                { name: 'IT Strategy Consulting', icon: <Compass size={18} /> },
                { name: 'Technical Architecture Reviews', icon: <CheckSquare size={18} /> },
                { name: 'Digital Transformation Consulting', icon: <TrendingUp size={18} /> },
                { name: 'Product Discovery & Roadmapping', icon: <Map size={18} /> },
                { name: 'Technology Due Diligence (Investors/M&A)', icon: <FileCheck size={18} /> },
                { name: 'Team & Staff Augmentation', icon: <UserPlus size={18} /> },
                { name: 'Fractional CTO Services', icon: <Crown size={18} /> }
            ]
        },
        {
            id: 'quality-support',
            title: 'Quality & Support',
            icon: <ShieldCheck size={22} />,
            accent: '#10b981',
            badge: 'Assurance & Security',
            items: [
                { name: 'QA & Software Testing (Manual & Automated)', icon: <CheckCircle2 size={18} /> },
                { name: 'Security Audits & Penetration Testing', icon: <ShieldAlert size={18} /> },
                { name: 'Ongoing Maintenance & Support (SLA-based)', icon: <LifeBuoy size={18} /> },
                { name: 'Performance Optimization & Hardening', icon: <Sliders size={18} /> },
                { name: 'Compliance Consulting (GDPR, HIPAA, SOC 2)', icon: <ShieldCheck size={18} /> }
            ]
        }
    ], []);

    const serviceSchema = useMemo(() => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Technology & Growth Services',
        'provider': {
            '@type': 'Organization',
            'name': 'Futora Group of Companies',
            'url': 'https://futoragroup.in',
            'logo': 'https://futoragroup.in/logo.webp'
        },
        'areaServed': 'Global',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Futora Group Technology and Growth Services',
            'itemListElement': serviceCategories.map((category) => ({
                '@type': 'OfferCatalog',
                'name': category.title,
                'itemListElement': category.items.map((item) => ({
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': item.name
                    }
                }))
            }))
        }
    }), [serviceCategories]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35 }
        }
    };

    return (
        <div className="services-page">
            <SEO
                title="Technology & Growth Services — Software, AI, Cloud & Marketing"
                description="Comprehensive technology and growth consulting by Futora Group: Software Development, AI & Automation, Cloud & DevOps, Enterprise Systems, Web & Commerce, SEO, Branding & Marketing, and Strategy."
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
                            <Sparkles size={14} /> Partner & Enterprise Solutions
                        </div>
                        <h1>
                            Technology & <span className="gradient-text">Growth Services</span>
                        </h1>
                        <p className="services-quotable">
                            High-velocity engineering, AI systems, cloud infrastructure, and growth engines built to scale modern businesses.
                        </p>
                        <div className="services-hero-cta">
                            <a href="#services-contact" className="btn btn-primary" aria-label="Book a consultation with Futora Group">
                                Partner With Us <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories & Service Cards Grid */}
            <section id="services-categories" className="section services-categories-section">
                <div className="container">
                    <div className="services-categories-container">
                        {serviceCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                className="service-category-block"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="service-category-header">
                                    <div 
                                        className="service-category-icon"
                                        style={{ 
                                            color: category.accent,
                                            borderColor: `${category.accent}60`,
                                            background: `${category.accent}15`
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <div className="service-category-title-wrap">
                                        <h2>{category.title}</h2>
                                        <span 
                                            className="service-category-badge"
                                            style={{
                                                color: category.accent,
                                                borderColor: `${category.accent}40`,
                                                background: `${category.accent}10`
                                            }}
                                        >
                                            {category.badge}
                                        </span>
                                    </div>
                                </div>

                                <motion.div
                                    className="service-items-grid"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {category.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="service-item-card"
                                            variants={itemVariants}
                                        >
                                            <div 
                                                className="service-item-icon-wrap"
                                                style={{
                                                    color: category.accent,
                                                    borderColor: 'rgba(255, 255, 255, 0.25)',
                                                    background: 'rgba(255, 255, 255, 0.05)'
                                                }}
                                            >
                                                {item.icon}
                                            </div>
                                            <span className="service-item-name">{item.name}</span>
                                            <ArrowUpRight 
                                                className="service-item-arrow" 
                                                size={15} 
                                                style={{ color: category.accent }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
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
