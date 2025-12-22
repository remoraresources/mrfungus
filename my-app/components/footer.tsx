import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('Navigation');
    const tFooter = useTranslations('Footer');
    return (
        <footer className="bg-[#38302A] text-white py-12 snap-start">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">{tFooter('brandName')}</h3>
                        <p className="text-[var(--muted)] text-sm mb-4">
                            {tFooter('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">{tFooter('quickLinksTitle')}</h3>
                        <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                            <Link href="/#about" className="hover:text-white">{t('about')}</Link>
                            <Link href="/#gallery" className="hover:text-white">{t('gallery')}</Link>
                            <Link href="/#insights" className="hover:text-white">{t('insights')}</Link>
                            <Link href="/#location" className="hover:text-white">{t('location')}</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">{tFooter('contactTitle')}</h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li className="font-semibold text-white">{tFooter('companyName')}</li>
                            <li className="text-xs">{tFooter('registration')}</li>
                            <li>
                                <Link href="/#contact" className="hover:text-white">
                                    {tFooter('inquiry')}
                                </Link>
                            </li>
                            <li>remoraresources@gmail.com</li>
                            <li>{tFooter('phoneWhatsapp')}</li>
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
