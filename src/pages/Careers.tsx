import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Globe, Users, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import './Careers.css';

const Careers: FC = () => {
    const benefits = useMemo(() => [
        { icon: <Zap />, title: 'High Impact Work', description: 'Build billion-dollar AI platforms that shape the future.' },
        { icon: <Globe />, title: 'Remote First', description: 'Work from anywhere in the world. We care about output, not hours.' },
        { icon: <Users />, title: 'Top 1% Talent', description: 'Collaborate with visionary founders, engineers, and creators.' }
    ], []);

    const jobs = useMemo(() => [
        {
            title: 'Senior AI Engineer',
            department: 'Futora AI',
            location: 'Remote',
            type: 'Full-time',
            description: 'Lead architecture of autonomous AI agent workflows and LLM infrastructure across Futora AI platforms.'
        },
        {
            title: 'Growth Marketing Lead',
            department: 'FutoraLift',
            location: 'Remote',
            type: 'Full-time',
            description: 'Scale programmatic performance marketing, conversion funnels, and distribution loops for fast-scaling brands.'
        },
        {
            title: 'Full Stack Developer',
            department: 'FutoraPay',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build secure, high-concurrency fintech platforms, UPI transaction pipelines, and intelligent wallet UI.'
        },
        {
            title: 'Community Manager',
            department: 'FutoraOne',
            location: 'Remote',
            type: 'Part-time',
            description: 'Grow and foster our global developer, builder, and tech creator community on FutoraOne.'
        }
    ], []);

    const careersSchema = useMemo(() => ({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': jobs.map((job, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'item': {
                '@type': 'JobPosting',
                'title': job.title,
                'description': job.description,
                'datePosted': '2026-08-01',
                'employmentType': job.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
                'hiringOrganization': {
                    '@type': 'Organization',
                    'name': `Futora Group - ${job.department}`,
                    'sameAs': 'https://futoragroup.in'
                },
                'jobLocationType': 'TELECOMMUTE',
                'applicantLocationRequirements': {
                    '@type': 'Country',
                    'name': 'India'
                }
            }
        }))
    }), [jobs]);

    return (
        <div className="careers-page">
            <SEO
                title="Careers at Futora Group — Build the Future of AI"
                description="Join Futora Group. We are hiring visionaries, AI engineers, and growth marketers to build proprietary platforms and scale technology services."
                url="https://futoragroup.in/careers"
                schema={careersSchema}
            />

            <section className="careers-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Join the <span className="gradient-text">Revolution</span></h1>
                        <p>We're looking for the crazy ones, the misfits, the rebels—the visionaries who want to build the future of AI products and growth services.</p>
                    </motion.div>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                className="benefit-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section open-roles">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Future Opportunities <span className="highlight-badge">Hiring Soon</span>
                    </motion.h2>

                    <div className="job-list">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.title}
                                className="job-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-tags">
                                        <span className="job-tag"><Briefcase size={16} /> {job.department}</span>
                                        <span className="job-tag"><MapPin size={16} /> {job.location}</span>
                                        <span className="job-tag status-tag">Opening Q2 2026</span>
                                    </div>
                                </div>
                                <a
                                    href={`mailto:madhurdhadve@gmail.com?subject=Interest%20in%20${encodeURIComponent(job.title)}`}
                                    className="apply-btn secondary"
                                    aria-label={`Express interest in ${job.title} position`}
                                >
                                    Express Interest
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2>Don't see your specific role?</h2>
                        <p style={{ maxWidth: '500px', margin: '1rem auto 2rem', color: 'var(--text-secondary)' }}>
                            We are always looking for exceptional builders. If you think you can add massive value, email us directly.
                        </p>
                        <a href="mailto:madhurdhadve@gmail.com" className="btn btn-primary" aria-label="Email Founder Madhur Dhadve regarding careers">
                            Email Founder <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default memo(Careers);
