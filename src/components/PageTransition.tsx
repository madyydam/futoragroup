import { memo } from 'react';
import type { ReactNode } from 'react';
import { motion, type Easing } from 'framer-motion';

const fadeVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut" as Easing,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3 }
    }
};

const PageTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default memo(PageTransition);
