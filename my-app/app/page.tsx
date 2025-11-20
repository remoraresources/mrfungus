import { ArticleCard } from "@/components/article-card"
import { articles, products, testimonials, faqs } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const latestArticles = articles.slice(0, 3) // Show top 3 articles

  return (
    <div className="pb-12">
      {/* Section 1: Introduction (Hero) */}
      <section id="home" className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/farming.png"
            alt="Mushroom Farm"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cultivate Your Own Lion's Mane</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
            Experience the joy of growing fresh, gourmet mushrooms at home. Simple, sustainable, and delicious.
          </p>
          <Link
            href="/#kit-contents"
            className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
          >
            Discover More
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Section 2: Vision of the Business */}
        {/* Section 2: Features/Benefits */}
        <section id="features" className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Why Grow Lion's Mane?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[var(--card)] rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh & Organic</h3>
              <p className="text-[var(--muted-foreground)]">
                Harvest 100% organic mushrooms right from your kitchen counter. No pesticides, just pure nature.
              </p>
            </div>
            <div className="p-6 bg-[var(--card)] rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Beginner Friendly</h3>
              <p className="text-[var(--muted-foreground)]">
                Our "Guaranteed to Grow" substrate blocks make it impossible to fail. Just spray and watch them bloom.
              </p>
            </div>
            <div className="p-6 bg-[var(--card)] rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Hobby</h3>
              <p className="text-[var(--muted-foreground)]">
                Turn waste into food! Our kits use agricultural byproducts as substrate, closing the loop on sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Social Proof / Testimonials */}
        <section id="testimonials" className="bg-[var(--card)] p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Community Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative">
                    {/* Placeholder for avatar if image fails or is missing */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-[var(--muted-foreground)]">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: News Articles */}


        {/* Section 4: Products */}
        {/* Section 4: Kit Contents */}
        <section id="kit-contents" className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What's in the Kit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/lions-mane.png"
                alt="Lion's Mane Grow Kit"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Everything You Need to Grow</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">✓</div>
                    <span>Fully colonized Lion's Mane substrate block</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">✓</div>
                    <span>Humidity tent for perfect growing conditions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">✓</div>
                    <span>Spray bottle for misting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">✓</div>
                    <span>Detailed step-by-step instruction guide</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--card)] p-6 rounded-xl">
                <p className="font-bold mb-2">Interested in growing?</p>
                <p className="text-[var(--muted-foreground)] mb-4">
                  We are currently accepting orders via inquiry. Contact us to get your kit!
                </p>
                <Link
                  href="/#inquiries"
                  className="inline-block w-full text-center bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Contact Us to Order
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section id="faq" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-[var(--card)] p-6 rounded-xl">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-[var(--muted-foreground)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Grow Guides */}
        <section id="articles">
          <h2 className="text-3xl font-bold mb-8 text-center">Grow Guides & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/articles" className="text-[var(--primary)] font-bold hover:underline">
              View All Articles
            </Link>
          </div>
        </section>

        {/* Section 5: Inquiries */}
        <section id="inquiries" className="bg-[var(--card)] p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-[var(--muted-foreground)]">
                  123 Fungi Lane<br />
                  Mushroom City, MC 98765<br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                <p className="text-[var(--muted-foreground)]">
                  Email: hello@umamimushrooms.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-[var(--muted-foreground)]">
                  Mon - Fri: 9am - 5pm<br />
                  Sat: 10am - 2pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-1">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-[var(--foreground)] mb-1">Inquiry</label>
                <textarea
                  id="inquiry"
                  rows={4}
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
