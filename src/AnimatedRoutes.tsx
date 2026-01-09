import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import PageTransition from './components/PageTransition';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Companies = lazy(() => import('./pages/Companies'));
const Founder = lazy(() => import('./pages/Founder'));
const Careers = lazy(() => import('./pages/Careers'));
const Insights = lazy(() => import('./pages/Insights'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
    <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-dark)',
        color: 'var(--primary-color)'
    }}>
        Loading...
    </div>
);

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/companies" element={<PageTransition><Companies /></PageTransition>} />
                    <Route path="/founder" element={<PageTransition><Founder /></PageTransition>} />
                    <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                    <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
                    <Route path="/insights/:id" element={<PageTransition><ArticleDetail /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}
