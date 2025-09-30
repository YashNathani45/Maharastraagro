'use client';

import { motion } from 'framer-motion';

export default function Reveal({ as: Tag = 'div', children, delay = 0, className = '' }) {
    const variants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut', delay }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            className={className}
            as={Tag}
        >
            {children}
        </motion.div>
    );
}



