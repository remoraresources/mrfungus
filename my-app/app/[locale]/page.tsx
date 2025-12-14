'use client';

import { use } from 'react';
import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  // const { locale } = use(params);
  const t = useTranslations();

  const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MR FUNGUS',
    alternateName: 'Remora Resources PLT',
    url: 'https://www.mrfungus.com.my',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+60-16-701-9620',
      contactType: 'customer service',
      areaServed: 'MY',
      availableLanguage: ['en', 'zh']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lot 05-AC, Menara MPAJ Blok A, Persiaran MPAJ, Jalan Pandan Utama, Pandan Indah',
      addressLocality: 'Kuala Lumpur',
      postalCode: '55100',
      addressCountry: 'MY'
    }
  };


  return (
    <div className="pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Section 1: Introduction (Hero) */}
      <section id="home" className="snap-section relative bg-gray-900 text-white h-dvh flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/lions_mane_hero_minimal.png"
            alt="Mushroom Farm"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('Hero.title')}</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 drop-shadow-lg">
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
        <section id="about" className="pt-24 pb-12 -mx-4 px-4">
          <div className="container mx-auto px-4 max-w-6xl">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--primary)]">{t('AboutUs.title')}</h2>
            </ScrollAnimation>

            {/* Image + Content Layout */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
              {/* Image - Top on mobile, Left on desktop */}
              <div className="w-full md:w-1/2">
                <ScrollAnimation>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about_us_facility_v3.png"
                      alt="MR FUNGUS Cultivation Facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              {/* Content - Bottom on mobile, Right on desktop */}
              <div className="w-full md:w-1/2 space-y-6">
                <ScrollAnimation delay={0.1}>
                  <p className="text-xl font-semibold text-[var(--primary)]">{t('AboutUs.intro')}</p>
                </ScrollAnimation>
                <ScrollAnimation delay={0.2}>
                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                    {t('AboutUs.description')}
                  </p>
                </ScrollAnimation>
              </div>
            </div>

            {/* Insights Cards - Merged Here */}
            <div className="mt-16">
              <ScrollAnimation>
                <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">{t('Insights.title')}</h3>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((step, index) => (
                  <ScrollAnimation key={step} delay={index * 0.2} className="h-full">
                    <div className="bg-[var(--card)] p-6 rounded-xl h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--primary)] font-bold text-xl">
                        {step}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(`Insights.step${step}_title`)}</h4>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        {t(`Insights.step${step}_desc`)}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section: Our Story & Mission */}
      <section id="our-story" className="bg-stone-100 text-gray-800 py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-4 text-center text-[var(--primary)] tracking-tight">{t('OurStory.title')}</h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-16 opacity-50"></div>
          </ScrollAnimation>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 md:hidden"></div>

            {/* Item 1: The Inspiration */}
            <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 w-full mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone1_date')}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('OurStory.background_title')}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p1')}
                  </p>
                </ScrollAnimation>
              </div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                <ScrollAnimation delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image
                      src="/images/story_memory_v2.png"
                      alt="Grandmother Memory"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Item 2: The Journey */}
            <div className="relative flex flex-col md:flex-row-reverse items-center mb-24 last:mb-0 group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone2_date')}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p2')}
                  </p>
                </ScrollAnimation>
              </div>

              <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 md:text-right">
                <ScrollAnimation delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white inline-block w-full">
                    <Image
                      src="/images/story_journey_v2.png"
                      alt="The Journey"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Item 3: The Realization */}
            <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone3_date')}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p3')}
                  </p>
                </ScrollAnimation>
              </div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                <ScrollAnimation delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image
                      src="/images/story_nutrients_v2.png"
                      alt="Fragile Nutrients"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Item 4: 2019 Establishment */}
            <div className="relative flex flex-col md:flex-row-reverse items-center mb-24 last:mb-0 group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#BC6C25] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm ring-4 ring-[#BC6C25]/20"></div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[#BC6C25] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">
                    {t('OurStory.milestone4_date')}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#BC6C25]">{t('OurStory.lab_title')}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.lab_p1')}
                  </p>
                </ScrollAnimation>
              </div>

              <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 md:text-right">
                <ScrollAnimation delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white inline-block w-full">
                    <Image
                      src="/images/story_lab_malaysian_v2.png"
                      alt="Lab Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Item 5: The Method */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone5_date')}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.lab_p2')}
                  </p>
                </ScrollAnimation>
              </div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                <ScrollAnimation delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image
                      src="/images/story_cultivation_v2.png"
                      alt="Nature Cultivation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>


            {/* Section connection line (Desktop only) */}
            <div className="absolute left-1/2 bottom-[-6rem] w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 hidden md:block h-24"></div>


          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="bg-stone-100 text-gray-800 py-24 relative overflow-hidden">
        {/* Connecting line from previous section (Desktop only) */}
        <div className="absolute left-1/2 top-0 w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 hidden md:block h-32 z-0"></div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm">
            <ScrollAnimation>
              <div className="mb-6 mx-auto inline-block px-6 py-2 border-2 border-[var(--primary)] rounded-full text-[var(--primary)] text-base md:text-lg font-bold uppercase tracking-wider bg-stone-100 relative z-10">
                {t('Mission.title')}
              </div>
              <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
                {t('Mission.content')}
              </h2>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">

        {/* Section 3: Product Introduction */}
      </div>
      <section id="product" className="snap-section bg-[#f2e8cf] py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl hover:shadow-2xl transition-all duration-500">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{t('ProductIntro.title')}</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
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
                    <h3 className="text-2xl font-bold text-gray-800">{t('ProductIntro.subtitle')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">✓</div>
                        <span className="text-gray-700">{t('ProductIntro.item1')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">✓</div>
                        <span className="text-gray-700">{t('ProductIntro.item2')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">✓</div>
                        <span className="text-gray-700">{t('ProductIntro.item3')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">✓</div>
                        <span className="text-gray-700">{t('ProductIntro.item4')}</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                      {t('ProductIntro.description')}
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4}>
                  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-white/50">
                    <p className="font-bold mb-2 text-gray-800">{t('ProductIntro.interested')}</p>
                    <p className="text-gray-600 mb-4">
                      {t('ProductIntro.interested_desc')}
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-block w-full text-center bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary)]/90 transition-colors shadow-md"
                      onClick={handleDiscoverClick}
                    >
                      {t('ProductIntro.cta')}
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 space-y-24">

        {/* Section 5: Contact Us */}
      </div>
      <section id="contact" className="snap-section bg-[#BC6C25] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl w-full max-w-6xl mx-auto hover:shadow-2xl transition-all duration-500">
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

              {/* Inquiry Buttons */}
              <ScrollAnimation delay={0.4} className="flex flex-col gap-4 justify-center">
                <a
                  href="mailto:remoraresources@gmail.com"
                  className="w-full bg-white text-[#BC6C25] px-6 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors text-center text-lg flex items-center justify-center gap-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {t('Contact.email_button')}
                </a>

                <a
                  href="https://wa.me/60167019620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#25D366]/90 transition-colors text-center text-lg flex items-center justify-center gap-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  {t('Contact.whatsapp_button')}
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 space-y-24">

        {/* Section 6: Location */}
        <section id="location" className="snap-section bg-[#f2e8cf] py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-8 text-center">{t('Location.title')}</h2>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
                <div className="space-y-4 mb-8 text-center">
                  <h3 className="text-xl font-bold">{t('Location.address_title')}</h3>
                  <p className="text-gray-700">
                    {t('Location.company_name')}
                  </p>

                  <p className="text-gray-700">
                    {t('Location.address')}
                  </p>
                </div>
                {/* Placeholder for Map */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lot%2005-AC%2C%20Menara%20MPAJ%20Blok%20A%2C%20Persiaran%20MPAJ%2C%20Jalan%20Pandan%20Utama%2C%20Pandan%20Indah%2055100%2C%20Kuala%20Lumpur&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ filter: "grayscale(0) contrast(1.2) opacity(0.9)" }}
                  ></iframe>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}
