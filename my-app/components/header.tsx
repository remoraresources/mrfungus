"use client"

import { Link, usePathname, useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const t = useTranslations('Navigation');
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -ml-2 text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">{isSidebarOpen ? "Close menu" : "Open menu"}</span>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary)]">
                        <span className="sr-only">Umami Mushrooms</span>
                        Umami Mushrooms
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/#home" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('home')}
                        </Link>
                        <Link href="/#about" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('about')}
                        </Link>
                        <Link href="/#product" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('product')}
                        </Link>
                        <Link href="/#insights" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('insights')}
                        </Link>
                        <Link href="/#contact" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('contact')}
                        </Link>
                        <Link href="/#location" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            {t('location')}
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                            <Link href={pathname} locale="en" className="hover:text-[var(--primary)]">EN</Link>
                            <span>|</span>
                            <Link href={pathname} locale="zh" className="hover:text-[var(--primary)]">中文</Link>
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
                                    href="/#about"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('about')}
                                </Link>
                                <Link
                                    href="/#product"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('product')}
                                </Link>
                                <Link
                                    href="/#insights"
                                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {t('insights')}
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
