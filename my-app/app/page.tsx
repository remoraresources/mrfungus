import { ArticleCard } from "@/components/article-card"
import { articles, products } from "@/lib/data"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Umami Mushrooms</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
            Your premium source for fresh fungi, expert cultivation advice, and high-quality grow kits. Join the mushroom revolution today.
          </p>
          <Link
            href="/#shop"
            className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Section 2: Vision of the Business */}
        <section id="vision" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-[var(--foreground)] leading-relaxed">
            At Umami Mushrooms, we believe in the power of fungi to heal the planet and nourish our bodies.
            Our mission is to make sustainable mushroom cultivation accessible to everyone, while providing
            the freshest, most delicious mushrooms to our local community. We are dedicated to sustainable
            farming practices and educational outreach.
          </p>
        </section>

        {/* Section 3: News Articles */}
        <section id="articles">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News & Guides</h2>
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

        {/* Section 4: Products */}
        <section id="shop">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold rounded">
                    {product.category}
                  </div>
                </div>
                <h3 className="font-bold group-hover:text-[var(--primary)] transition-colors">
                  <Link href={`/shop`}>
                    {product.title}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">{product.price}</p>
              </div>
            ))}
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
