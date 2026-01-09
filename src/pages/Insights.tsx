import { useMemo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import './Insights.css';

const Insights: FC = () => {
    const articles = useMemo(() => [
        {
            id: 1,
            title: 'The Singularity of Finance: When AI Becomes the Bank',
            excerpt: 'We are approaching a horizon where algorithmic decision-making surpasses human capability in capital allocation. What happens when the bank is code?',
            category: 'Deep Tech',
            date: 'LIVE NOW',
            image: '/ai-finance-hero.png',
            url: 'https://futorapay.vercel.app/',
            featured: true
        },
        {
            id: 2,
            title: 'Neuromorphic Computing & HFT',
            excerpt: 'Hardware that mimics the human brain is the next step for high-frequency trading and real-time financial intelligence.',
            category: 'Hardware',
            date: 'Jan 5, 2026',
            image: '/neuromorphic-computing.png',
            url: 'https://futoraai.vercel.app/'
        },
        {
            id: 3,
            title: 'Sovereign Identity Stacks',
            excerpt: 'The end of passwords and the rise of mathematical proof of existence through blockchain-native authentication.',
            category: 'Web3',
            date: 'Dec 28, 2025',
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
            url: 'https://futora.com/'
        },
        {
            id: 4,
            title: 'The Green Compute Paradox',
            excerpt: 'Solving the energy crisis of massive AI model training with sustainable infrastructure and efficient algorithms.',
            category: 'Sustainability',
            date: 'Dec 15, 2025',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
            url: 'https://futora.com/'
        }
    ], []);

    const featured = articles[0];
    const gridArticles = articles.slice(1);

    return (
        <div className="insights-page">
            <SEO
                title="Futora Intelligence | The Edge"
                description="Cutting-edge analysis on the future of money, tech, and humanity."
                url="https://futora.com/insights"
            />

            <section className="insights-header container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="live-tag">
                        <span className="blink">●</span> INTELLIGENCE FEED
                    </div>
                    <h1>THE <span className="gradient-text">EDGE</span></h1>
                </motion.div>
            </section>

            {/* Featured Article - Hero Style */}
            <section className="featured-section container">
                <motion.div
                    className="featured-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="featured-image">
                        <img src={featured.image} alt={featured.title} />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-meta">
                            <span className="tag play-font">{featured.category}</span>
                            <span className="date">{featured.date}</span>
                        </div>
                        <h2>{featured.title}</h2>
                        <p>{featured.excerpt}</p>
                        <a href={featured.url} target="_blank" rel="noopener noreferrer" className="read-btn">
                            READ DOSSIER <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Grid Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h3><Zap size={20} className="icon-zap" /> LATEST SIGNALS</h3>
                    </div>
                    <div className="insights-grid">
                        {gridArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="insight-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => window.open(article.url, '_blank')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={article.image} alt={article.title} />
                                    <div className="card-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <div className="card-meta">
                                        <span className="card-tag">{article.category}</span>
                                        <span className="card-date">{article.date}</span>
                                    </div>
                                    <h4>{article.title}</h4>
                                    <p>{article.excerpt}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link" onClick={(e) => e.stopPropagation()}>
                                        Read Analysis <ArrowRight size={14} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;
