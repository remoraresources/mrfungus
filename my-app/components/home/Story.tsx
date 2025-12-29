'use client';

import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { useTranslations } from 'next-intl';

export function Story() {
    const t = useTranslations('OurStory');
    const tMission = useTranslations('Mission');

    return (
        <section id="our-story" className="bg-stone-100 text-gray-800 py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <ScrollAnimation>
                    <h2 className="text-4xl font-bold mb-4 text-center text-[var(--primary)] tracking-tight">{t('title')}</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-16 opacity-50"></div>
                </ScrollAnimation>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 hidden md:block"></div>
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--primary)]/30 -translate-x-1/2 md:hidden"></div>

                    {/* Milestone 1 */}
                    <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>
                        <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 w-full mb-8 md:mb-0">
                            <ScrollAnimation>
                                <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    {t('milestone1_date')}
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    {t('background_p1')}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                            <ScrollAnimation delay={0.2}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                                    <Image
                                        src="/images/story_memory_v2.webp"
                                        alt="Grandmother Memory"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Milestone 3 (Ordered in code as 2nd block visually but uses milestone3 data?) - Keeping original order */}
                    <div className="relative flex flex-col md:flex-row-reverse items-center mb-24 last:mb-0 group">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>
                        <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                            <ScrollAnimation>
                                <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    {t('milestone3_date')}
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    {t('background_p3')}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 md:text-right">
                            <ScrollAnimation delay={0.2}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white inline-block w-full">
                                    <Image
                                        src="/images/story_nutrients_v2.webp"
                                        alt="Fragile Nutrients"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Milestone 2 */}
                    <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>
                        <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                            <ScrollAnimation>
                                <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    {t('milestone2_date')}
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    {t('background_p2')}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                            <ScrollAnimation delay={0.2}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                                    <Image
                                        src="/images/story_journey_v2.webp"
                                        alt="The Journey"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Milestone 4 */}
                    <div className="relative flex flex-col md:flex-row-reverse items-center mb-24 last:mb-0 group">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#BC6C25] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm ring-4 ring-[#BC6C25]/20"></div>
                        <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                            <ScrollAnimation>
                                <div className="inline-block bg-[#BC6C25] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">
                                    {t('milestone4_date')}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#BC6C25]">{t('lab_title')}</h3>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    {t('lab_p1')}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 md:text-right">
                            <ScrollAnimation delay={0.2}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white inline-block w-full">
                                    <Image
                                        src="/images/story_lab_malaysian_v2.webp"
                                        alt="Lab Research"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Milestone 5 */}
                    <div className="relative flex flex-col md:flex-row items-center group">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>
                        <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                            <ScrollAnimation>
                                <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    {t('milestone5_date')}
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    {t('lab_p2')}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0">
                            <ScrollAnimation delay={0.2}>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                                    <Image
                                        src="/images/story_cultivation_v2.webp"
                                        alt="Nature Cultivation"
                                        width={889}
                                        height={1024}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div id="our-mission" className="mt-24 relative z-10 text-center">
                        <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm">
                            <ScrollAnimation>
                                <div className="mb-6 mx-auto inline-block px-6 py-2 border-2 border-[var(--primary)] rounded-full text-[var(--primary)] text-base md:text-lg font-bold uppercase tracking-wider">
                                    {tMission('title')}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
                                    {tMission('content')}
                                </h2>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
