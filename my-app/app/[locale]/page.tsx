import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Story } from "@/components/home/Story";
import { Gallery } from "@/components/home/Gallery";
import { VideoSection } from "@/components/home/VideoSection";
import { Contact } from "@/components/home/Contact";
import { Location } from "@/components/home/Location";
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // JSON-LD data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mr Fungus',
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

      <Hero />
      <About />
      <Story />
      <Gallery />
      <VideoSection />
      <Contact />
      <Location />
    </div>
  );
}
