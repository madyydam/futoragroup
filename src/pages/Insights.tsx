import { useMemo, memo } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target } from 'lucide-react';
import SEO from '../components/SEO';
import { articleData } from '../data/articles';
import type { Article } from '../data/articles';
import './Insights.css';

// Performance: Memoized Card Components
const FeaturedCard = memo(({ article }: { article: Article }) => (
    <motion.div
        className="featured-card no-click"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
    >
        <div className="featured-image">
            <img src={article.image} alt={article.title} loading="eager" />
            <div className="featured-overlay"></div>
        </div>
        <div className="featured-content">
            <div className="featured-meta">
                <span className="tag play-font">{article.category}</span>
                <span className="date">{article.date}</span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>

            <div className="insight-report">
                <div className="report-header">
                    <Target size={16} /> CORE INTELLIGENCE
                </div>
                <ul className="insight-list">
                    {article.insights.map((insight, i) => (
                        <li key={i}>{insight}</li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
));

const InsightCard = memo(({ article, index }: { article: Article; index: number }) => (
    <motion.article
        className="insight-card no-click"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
    >
        <div className="card-image-wrapper">
            <img src={article.image} alt={article.title} loading="lazy" />
            <div className="card-overlay"></div>
        </div>
        <div className="card-content">
            <div className="card-meta">
                <span className="card-tag">{article.category}</span>
                <span className="card-date">{article.date}</span>
            </div>
            <h4>{article.title}</h4>

            <div className="insight-report compact">
                <ul className="insight-list">
                    {article.insights.slice(0, 2).map((insight, i) => (
                        <li key={i}>{insight}</li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.article>
));

const Insights: FC = () => {
    const { featured, gridArticles } = useMemo(() => {
        const processed = articleData.map(article => ({
            ...article,
            date: article.id === 1 ? 'LIVE NOW' : article.date,
            featured: article.featured || false
        }));
        return {
            featured: processed[0],
            gridArticles: processed.slice(1)
        };
    }, []);

    // SEO: Structured Data (JSON-LD)
    const jsonLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Futora Intelligence | The Edge",
        "description": "Exclusive financial intelligence and deep tech analysis for the modern era.",
        "publisher": {
            "@type": "Organization",
            "name": "Futora Group",
            "logo": "https://futora.com/logo.png"
        }
    }), []);

    return (
        <div className="insights-page">
            <SEO
                title="Futora Intelligence | The Edge | Deep Tech & Finance Analysis"
                description="Cutting-edge analysis on the future of money, neural finance, and sovereign identity. Stay ahead with Futora's core intelligence feed."
                url="https://futora.com/insights"
            />

            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

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
                <FeaturedCard article={featured} />
            </section>

            {/* Grid Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h3><Zap size={20} className="icon-zap" /> LATEST SIGNALS</h3>
                    </div>
                    <div className="insights-grid">
                        {gridArticles.map((article, index) => (
                            <InsightCard key={article.id} article={article} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default memo(Insights);
