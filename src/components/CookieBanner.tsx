import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import './CookieBanner.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('futora_cookie_consent');
        if (!consent) {
            // Show after a small delay
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('futora_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('futora_cookie_consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="cookie-banner"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="cookie-content">
                        <Cookie className="cookie-icon" size={24} />
                        <div className="cookie-text">
                            <h3>We respect your privacy</h3>
                            <p>
                                We use cookies to enhance your browsing experience and analyze our traffic.
                                By clicking "Accept", you consent to our use of cookies.
                            </p>
                        </div>
                    </div>
                    <div className="cookie-actions">
                        <button onClick={handleDecline} className="cookie-btn decline">Decline</button>
                        <button onClick={handleAccept} className="cookie-btn accept">Accept</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default memo(CookieBanner);
