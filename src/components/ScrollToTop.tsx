import { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, we might want to scroll to that element instead of top
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // Default scroll to top on every route change
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default memo(ScrollToTop);
