import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('Navigation');
    return (
        <footer className="bg-[#38302A] text-white py-12 snap-start">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Mr Fungus</h3>
                        <p className="text-[var(--muted)] text-sm mb-4">
                            Specializing in premium Lion's Mane grow kits. We make it easy to grow gourmet mushrooms at home.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                            <Link href="/#about" className="hover:text-white">{t('about')}</Link>
                            <Link href="/#product" className="hover:text-white">{t('product')}</Link>
                            <Link href="/#insights" className="hover:text-white">{t('insights')}</Link>
                            <Link href="/#location" className="hover:text-white">{t('location')}</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li className="font-semibold text-white">REMORA RESOURCES PLT</li>
                            <li className="text-xs">Registration No: 201904000690</li>
                            <li>
                                <Link href="/#contact" className="hover:text-white">
                                    Inquiry Form
                                </Link>
                            </li>
                            <li>remoraresources@gmail.com</li>
                            <li>Phone/WhatsApp: 0167019620</li>
                            <li>0162175009</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
                    <p>© 2025 Mr Fungus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
