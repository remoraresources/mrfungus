import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-[#38302A] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Umami Mushrooms</h3>
                        <p className="text-[var(--muted)] text-sm mb-4">
                            Specializing in premium Lion's Mane grow kits. We make it easy to grow gourmet mushrooms at home.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                            <Link href="/#features" className="hover:text-white">Benefits</Link>
                            <Link href="/#kit-contents" className="hover:text-white">The Kit</Link>
                            <Link href="/#testimonials" className="hover:text-white">Reviews</Link>
                            <Link href="/#faq" className="hover:text-white">FAQ</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li>
                                <Link href="/#inquiries" className="hover:text-white">
                                    Inquiry Form
                                </Link>
                            </li>
                            <li>hello@umamimushrooms.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
                    <p>Umami Magazine & Umami Publications is a fictional magazine and publisher for illustrative purposes only.</p>
                    <p className="mt-2">© 2022 Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}
