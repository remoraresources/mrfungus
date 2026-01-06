'use client';

import { useState, useEffect } from 'react';

import Image from "next/image"

import { motion } from "framer-motion"
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const MotionLink = motion.create(Link);

export function Hero() {
    const t = useTranslations('Hero');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="snap-section relative bg-gray-900 text-white h-dvh flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/images/lions_mane_hero_minimal.webp"
                    alt="Mushroom Farm"
                    fill
                    className="object-cover opacity-60"
                    priority
                    sizes="100vw"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* LCP Optimization: Removed ScrollAnimation delay for title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('title')}</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 drop-shadow-lg">
                    {t('subtitle')}
                </p>

                <div>
                    <MotionLink
                        href="/#about"
                        onClick={handleDiscoverClick}
                        className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold"
                        animate={isMobile ? {} : {
                            backgroundColor: ["#BC6C25", "#A65D20", "#BC6C25"],
                            scale: 1,
                        }}
                        transition={isMobile ? {} : {
                            backgroundColor: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            scale: {
                                duration: 0.2,
                            },
                        }}
                        whileHover={isMobile ? {} : {
                            backgroundColor: "#A65D20",
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {t('cta')}
                    </MotionLink>
                </div>
            </div>
        </section>
    );
}
