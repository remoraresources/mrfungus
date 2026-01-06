'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="no-mobile-fade"
        >
            {children}
        </motion.div>
    );
}
