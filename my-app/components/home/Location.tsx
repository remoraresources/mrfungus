'use client';

import { ScrollAnimation } from "@/components/ScrollAnimation"
import { useTranslations } from 'next-intl';

export function Location() {
    const t = useTranslations('Location');

    return (
        <section id="location" className="snap-section bg-[#f2e8cf] py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
                    <ScrollAnimation>
                        <h2 className="text-4xl font-bold mb-8 text-center">{t('title')}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <div className="space-y-4 mb-8 text-center">
                            <h3 className="text-2xl font-bold">{t('address_title')}</h3>
                            <p className="text-lg text-gray-700">
                                {t('company_name')}
                            </p>

                            <p className="text-lg text-gray-700">
                                {t('address')}
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
    );
}
