import { Merriweather } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
  };
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

  return (
    <html lang={locale}>
      <body className={serif.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
