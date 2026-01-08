import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="not-found">
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />

            <motion.div
                className="not-found-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="error-code">404</div>
                <h2>Lost in Space?</h2>
                <p>The page you're looking for seems to have drifted into a black hole.</p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="/" className="home-btn">
                        <ArrowLeft size={20} />
                        Return to Base
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}
