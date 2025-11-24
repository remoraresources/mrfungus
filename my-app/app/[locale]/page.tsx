'use client';

import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pb-12">
      {/* Section 1: Introduction (Hero) */}
      <section id="home" className="snap-section relative bg-gray-900 text-white h-dvh flex items-center justify-center">
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
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('Hero.title')}</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
              {t('Hero.subtitle')}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Link
              href="/#product"
              onClick={handleDiscoverClick}
              className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
            >
              {t('Hero.cta')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {/* Section 2: About Us */}
        <section id="about" className="snap-section max-w-4xl mx-auto text-center pt-24 -mx-4 px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">{t('AboutUs.title')}</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {t('AboutUs.description')}
            </p>
          </ScrollAnimation>
        </section>

        {/* Section 3: Product Introduction */}
      </div>
      <section id="product" className="snap-section bg-[#BC6C25] py-24 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">{t('ProductIntro.title')}</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/lions-mane.png"
                  alt="Lion's Mane Grow Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <div className="space-y-8">
              <ScrollAnimation delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{t('ProductIntro.subtitle')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                      <span className="text-white">{t('ProductIntro.item1')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                      <span className="text-white">{t('ProductIntro.item2')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                      <span className="text-white">{t('ProductIntro.item3')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                      <span className="text-white">{t('ProductIntro.item4')}</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="font-bold mb-2 text-white">{t('ProductIntro.interested')}</p>
                  <p className="text-white/80 mb-4">
                    {t('ProductIntro.interested_desc')}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block w-full text-center bg-white text-[#BC6C25] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
                  >
                    {t('ProductIntro.cta')}
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 space-y-24">

        {/* Section 4: Insights (Farming Processes) */}
        <section id="insights" className="snap-section max-w-6xl mx-auto -mx-4 px-4 py-24">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">{t('Insights.title')}</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step, index) => (
              <ScrollAnimation key={step} delay={index * 0.2} className="h-full">
                <div className="bg-[var(--card)] p-6 rounded-xl h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--primary)] font-bold text-xl">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(`Insights.step${step}_title`)}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    {t(`Insights.step${step}_desc`)}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Section 5: Contact Us */}
      </div>
      <section id="contact" className="snap-section bg-[#BC6C25] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl w-full max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-12 text-center text-white">{t('Contact.title')}</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <ScrollAnimation delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">{t('Contact.company_name')}</h3>
                    <p className="text-sm text-white/70 mb-6">{t('Contact.registration')}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{t('Contact.get_in_touch')}</h3>
                    <p className="text-white/80">
                      Email: {t('Contact.email')}<br />
                      Phone: {t('Contact.phone')}<br />
                      {t('Contact.whatsapp')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{t('Contact.business_hours')}</h3>
                    <p className="text-white/80">
                      Mon - Fri: 9am - 5pm<br />
                      Sat: 10am - 2pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Inquiry Form */}
              <ScrollAnimation delay={0.4}>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">{t('Contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">{t('Contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">{t('Contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-white mb-1">{t('Contact.form.inquiry')}</label>
                    <textarea
                      id="inquiry"
                      rows={4}
                      className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-[#BC6C25] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
                  >
                    {t('Contact.form.submit')}
                  </button>
                </form>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 space-y-24">

        {/* Section 6: Location */}
        <section id="location" className="snap-section max-w-4xl mx-auto text-center pb-12 -mx-4 px-4 py-24">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">{t('Location.title')}</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="bg-[var(--card)] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{t('Location.address_title')}</h3>
              <p className="text-[var(--muted-foreground)] mb-2">
                {t('Location.company_name')}
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                {t('Location.registration')}
              </p>
              <p className="text-[var(--muted-foreground)] mb-6">
                {t('Location.address')}
              </p>
              {/* Placeholder for Map */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                Map Placeholder
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  )
}
