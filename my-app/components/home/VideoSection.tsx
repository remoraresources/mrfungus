'use client';

import { ScrollAnimation } from "@/components/ScrollAnimation"
import { VideoPlayer } from "@/components/video-player"
import { useTranslations } from 'next-intl';

export function VideoSection() {
    const t = useTranslations('Youtube');

    return (
        <section id="youtube-recipes" className="snap-section bg-[#f2e8cf] py-24 px-4">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center">
                    <ScrollAnimation>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--primary)] max-w-4xl mx-auto leading-relaxed">
                            {t('title')}
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <VideoPlayer
                                src="https://www.youtube.com/embed/videoseries?list=PLUm9x-Uihu6bkbfs18Of3HSAzvW6WO6bv"
                                title={t('title')}
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
