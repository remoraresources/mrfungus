'use client';

import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { useTranslations } from 'next-intl';

export function About() {
    const t = useTranslations();

    return (
        <div className="container mx-auto px-4 space-y-24">
            <section id="about" className="pt-24 pb-12 -mx-4 px-4">
                <div className="container mx-auto px-4 max-w-6xl">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--primary)]">{t('AboutUs.title')}</h2>
                    </ScrollAnimation>

                    {/* Image + Content Layout */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
                        <div className="w-full md:w-1/2">
                            <ScrollAnimation>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/about_us_facility_v3.webp"
                                        alt="Mr Fungus Cultivation Facility"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <ScrollAnimation delay={0.1}>
                                <p className="text-xl font-semibold text-[var(--primary)]">{t('AboutUs.intro')}</p>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.2}>
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    {t('AboutUs.description1')}
                                </p>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.2}>
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    {t('AboutUs.description2')}
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Insights Cards */}
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
                                        <p className="text-[var(--muted-foreground)] text-md">
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
    );
}
