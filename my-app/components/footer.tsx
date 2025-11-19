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
                            Your source for premium mushroom grow kits, fresh fungi, and expert advice. Start your mushroom journey today.
                        </p>
                        <Link href="/about-umami" className="text-[var(--primary)] hover:text-[var(--primary-hover)] text-sm">
                            Find out more
                        </Link>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Shop Categories</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Grow Kits", "Fresh Mushrooms", "Supplements", "Spores", "Substrates"].map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/shop/${tag.toLowerCase().replace(" ", "-")}`}
                                    className="text-xs text-[var(--muted)] hover:text-white border border-[var(--border)] px-2 py-1 rounded"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Tell us what you think</h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
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
