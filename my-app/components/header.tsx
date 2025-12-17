"use client"

import { Link, usePathname, useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Search, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const router = useRouter();


    const isHomepage = pathname === '/' || pathname === '/en' || pathname === '/zh';

    const [isTransparent, setIsTransparent] = useState(isHomepage)

    useEffect(() => {
        if (!isHomepage) {
            setIsTransparent(false);
            return;
        }

        const handleScroll = () => {
            const threshold = window.innerHeight - 80; // Buffer for header height
            setIsTransparent(window.scrollY < threshold);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomepage]);

    // Derived classes for transitions
    const headerBgClass = isTransparent
        ? "bg-transparent border-transparent"
        : "bg-[var(--background)]/80 backdrop-blur-md border-[var(--border)]";


    const textColorClass = isTransparent
        ? "text-white drop-shadow-md"
        : "text-[var(--foreground)]";

    const mutedColorClass = isTransparent
        ? "text-white/80 drop-shadow-md"
        : "text-[var(--muted-foreground)]";

    const hoverColorClass = isTransparent
        ? "hover:text-[var(--primary)]"
        : "hover:text-[var(--primary)]";

    const logoClass = isTransparent
        ? "text-white drop-shadow-md"
        : "text-[var(--primary)]";

    const logoImageClass = isTransparent
        ? "brightness-0 invert drop-shadow-md"
        : "";


    return (
        <header className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ease-in-out ${headerBgClass}`}>
            <div className="container mx-auto px-4">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 -ml-2 transition-colors duration-500 ${mutedColorClass} ${hoverColorClass}`}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">{isSidebarOpen ? "Close menu" : "Open menu"}</span>
                    </button>

                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 flex items-center gap-2 transition-all duration-500">
                        <Image
                            src="/images/logo.png"
                            alt="Mr Fungus"
                            width={140}
                            height={45}
                            className={`h-10 w-auto object-contain transition-all duration-500 ${logoImageClass}`}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/#home" className={`text-sm font-medium transition-colors duration-500 ${textColorClass} ${hoverColorClass}`}>
                            {t('home')}
                        </Link>

                        <Link href="/#our-story" className={`text-sm font-medium transition-colors duration-500 ${textColorClass} ${hoverColorClass}`}>
                            {t('story')}
                        </Link>
                        <Link href="/#product" className={`text-sm font-medium transition-colors duration-500 ${textColorClass} ${hoverColorClass}`}>
                            {t('product')}
                        </Link>

                        <Link href="/#contact" className={`text-sm font-medium transition-colors duration-500 ${textColorClass} ${hoverColorClass}`}>
                            {t('contact')}
                        </Link>
                        <Link href="/#location" className={`text-sm font-medium transition-colors duration-500 ${textColorClass} ${hoverColorClass}`}>
                            {t('location')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <div className={`hidden md:flex items-center gap-2 text-sm transition-colors duration-500 ${mutedColorClass}`}>
                            <Link href={pathname} locale="en" className={hoverColorClass}>EN</Link>
                            <span>|</span>
                            <Link href={pathname} locale="zh" className={hoverColorClass}>中文</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Apple Style Roll Down */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-[64px] left-0 w-full bg-[#F2E8CF] z-40 overflow-hidden border-t border-[var(--border)]"
                    >
                        <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto pb-24">
                            <nav className="flex flex-col space-y-6">
                                <Link
                                    href="/#home"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('home')}
                                </Link>

                                <Link
                                    href="/#our-story"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('story')}
                                </Link>
                                <Link
                                    href="/#product"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('product')}
                                </Link>

                                <Link
                                    href="/#contact"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('contact')}
                                </Link>
                                <Link
                                    href="/#location"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('location')}
                                </Link>
                            </nav>

                            <div className="border-t border-[var(--border)] pt-6">
                                <div className="flex items-center gap-6 text-xl text-[var(--muted-foreground)]">
                                    <Link href={pathname} locale="en" className="hover:text-[var(--primary)]" onClick={() => setIsSidebarOpen(false)}>EN</Link>
                                    <span>|</span>
                                    <Link href={pathname} locale="zh" className="hover:text-[var(--primary)]" onClick={() => setIsSidebarOpen(false)}>中文</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
