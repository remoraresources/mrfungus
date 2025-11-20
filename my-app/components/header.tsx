"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <header className="border-b border-[var(--border)] bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -ml-2 text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary)]">
                        <span className="sr-only">Umami Mushrooms</span>
                        Umami Mushrooms
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/#home" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            Home
                        </Link>
                        <Link href="/#features" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            Benefits
                        </Link>
                        <Link href="/#kit-contents" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            The Kit
                        </Link>
                        <Link href="/#testimonials" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            Reviews
                        </Link>
                        <Link href="/#articles" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            Guides
                        </Link>
                        <Link href="/#inquiries" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                            Contact
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                            <Link href="/" className="hover:text-[var(--primary)]">EN</Link>
                            <span>|</span>
                            <Link href="/ms" className="hover:text-[var(--primary)]">BM</Link>
                            <span>|</span>
                            <Link href="/zh" className="hover:text-[var(--primary)]">中文</Link>
                        </div>
                        <button className="p-2 text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        onClick={() => setIsSidebarOpen(false)}
                    />

                    {/* Sidebar Panel */}
                    <div className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-[var(--background)] shadow-xl transition-transform duration-300 ease-in-out">
                        <div className="flex h-16 items-center justify-between px-4 border-b border-[var(--border)]">
                            <span className="text-xl font-bold text-[var(--primary)]">Menu</span>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                            >
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </button>
                        </div>

                        <div className="flex flex-col p-4 space-y-4">
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/#home"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#features"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    Benefits
                                </Link>
                                <Link
                                    href="/#kit-contents"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    The Kit
                                </Link>
                                <Link
                                    href="/#testimonials"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    Reviews
                                </Link>
                                <Link
                                    href="/#articles"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    Guides
                                </Link>
                                <Link
                                    href="/#inquiries"
                                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    Contact
                                </Link>
                            </nav>

                            <div className="border-t border-[var(--border)] pt-4">
                                <div className="flex items-center gap-4 text-lg text-[var(--muted-foreground)]">
                                    <Link href="/" className="hover:text-[var(--primary)]" onClick={() => setIsSidebarOpen(false)}>EN</Link>
                                    <span>|</span>
                                    <Link href="/ms" className="hover:text-[var(--primary)]" onClick={() => setIsSidebarOpen(false)}>BM</Link>
                                    <span>|</span>
                                    <Link href="/zh" className="hover:text-[var(--primary)]" onClick={() => setIsSidebarOpen(false)}>中文</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
