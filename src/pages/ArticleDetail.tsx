import { useEffect, memo } from 'react';
import type { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { articleData } from '../data/articles';
import './ArticleDetail.css';

const ArticleDetail: FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const article = articleData.find(a => a.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="article-not-found">
                <h1>Article Not Found</h1>
                <button onClick={() => navigate('/insights')}>← Back to Insights</button>
            </div>
        );
    }

    return (
        <div className="article-detail-page">
            <SEO
                title={`${article.title} | Futora Intelligence`}
                description={article.excerpt}
                url={`https://futora.com/insights/${article.id}`}
            />

            {/* Hero Section */}
            <section className="article-hero">
                <div className="article-hero-overlay"></div>
                <img src={article.image} alt={article.title} className="article-hero-image" />
                <div className="article-hero-content container">
                    <motion.button
                        className="back-button"
                        onClick={() => navigate('/insights')}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ x: -5 }}
                    >
                        <ArrowLeft size={18} /> Back to Insights
                    </motion.button>
                    <motion.div
                        className="article-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="article-meta">
                            <span className="article-category">
                                <Tag size={14} /> {article.category}
                            </span>
                            <span className="article-date">
                                <Calendar size={14} /> {article.date}
                            </span>
                        </div>
                        <h1>{article.title}</h1>
                        <p className="article-excerpt">{article.excerpt}</p>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="article-body container">
                <motion.div
                    className="article-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {article.content.map((section, index) => (
                        <div key={index} className="article-section">
                            <h2>{section.heading}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                            {section.quote && (
                                <blockquote className="article-quote">
                                    "{section.quote}"
                                </blockquote>
                            )}
                        </div>
                    ))}

                    {/* Conclusion */}
                    <div className="article-conclusion">
                        <h2>The Path Forward</h2>
                        <p>{article.conclusion}</p>
                    </div>

                    {/* Tags */}
                    <div className="article-tags">
                        {article.tags.map((tag, index) => (
                            <span key={index} className="tag-pill">{tag}</span>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default memo(ArticleDetail);
