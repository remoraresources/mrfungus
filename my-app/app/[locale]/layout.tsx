import { Merriweather } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { preconnect } from "react-dom";

import { getTranslations } from 'next-intl/server';

const serif = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL('https://www.mrfungus.com.my'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
    verification: {
      google: 'BryA1lt2N6mFoqz_ABwKmG6s0buPrrX3X_F2G6sO77A',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Mr Fungus',
      images: [
        {
          url: '/images/lions_mane_hero_minimal.webp',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/lions_mane_hero_minimal.webp'],
    },
    other: {
      'article:publisher': 'https://www.facebook.com/profile.php?id=61569450821560',
    },
  };
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import PageTransition from '@/components/page-transition';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  preconnect('https://maps.googleapis.com');
  preconnect('https://maps.gstatic.com');

  return (
    <html lang={locale}>
      <body className={serif.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
