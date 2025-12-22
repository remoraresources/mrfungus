'use client';

import { useRef, useState, useEffect } from 'react';
import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Stage {
  id: string;
  count: number;
  ext?: string;
  label?: string;
  images?: {
    src: string;
    caption?: string;
  }[];
}

const stages: Stage[] = [
  { id: 'preservation', count: 2, ext: 'jpg' },
  {
    id: 'preparation',
    count: 3,
    images: [
      { src: '/images/process/preparation_1.jpg', caption: 'Our imported European wood pellets' },
      { src: '/images/process/preparation_2.png' },
      { src: '/images/process/preparation_3.png' }
    ]
  },
  { id: 'inoculation', count: 2 },
  {
    id: 'incubation',
    count: 2,
    images: [
      { src: '/images/process/incubation_1.jpg' },
      { src: '/images/process/incubation_2.jpg' }
    ]
  },
  {
    id: 'fruiting',
    count: 2,
    images: [
      { src: '/images/process/fruiting_1.jpg' },
      { src: '/images/process/fruiting_2.jpg', caption: 'The mushrooms are now ready for harvest' }
    ]
  },
  {
    id: 'harvest',
    count: 2,
    images: [
      { src: '/images/process/harvest_1.jpg' },
      { src: '/images/process/harvest_2.png' }
    ]
  },
  {
    id: 'culinary',
    count: 8,
    label: 'Bon Appétit',
    images: [
      { src: '/images/process/culinary_1.png' },
      { src: '/images/process/culinary_2.jpg' },
      { src: '/images/process/culinary_3.jpg' },
      { src: '/images/process/culinary_4.png' },
      { src: '/images/process/culinary_5.jpg' },
      { src: '/images/process/culinary_6.jpg' },
      { src: '/images/process/culinary_7.jpg' },
      { src: '/images/process/culinary_8.jpg' }
    ]
  }
];

export default function Home({ params }: { params: Promise<{ locale: string }> }) {

  const t = useTranslations();
  const [activeStage, setActiveStage] = useState(0);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // create a clone of the first stage for infinite loop effect
  const extendedStages = [...stages, { ...stages[0], id: stages[0].id + '-clone' }];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGalleryVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle infinite scroll reset
  useEffect(() => {
    if (activeStage === stages.length) {
      setIsResetting(true);
      const timeout = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
          setActiveStage(0);
          setIsResetting(false);
        }
      }, 500); // Wait for smooth scroll to finish before resetting

      return () => clearTimeout(timeout);
    }
  }, [activeStage]);

  useEffect(() => {
    if (!isGalleryVisible) return;

    const interval = setInterval(() => {
      // Just increment to next stage, logic above handles the reset
      const nextStage = activeStage + 1;
      scrollToStage(nextStage);
    }, 5000);

    return () => clearInterval(interval);
  }, [isGalleryVisible, activeStage]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isResetting) return; // Ignore scroll events during reset

    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);

    if (index !== activeStage) {
      setActiveStage(index);
    }
  };

  const scrollToStage = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * scrollContainerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    // Just increment, the effect hook handles the infinite loop reset
    const nextStage = activeStage + 1;
    scrollToStage(nextStage);
    setActiveStage(nextStage);
  };

  const handlePrev = () => {
    let prevStage = activeStage - 1;
    if (prevStage < 0) {
      // If going back from 0, wrap to the end (before the clone)
      prevStage = stages.length - 1;
      // We might want to snap to the clone first to make it smooth, but simplistic wrapping is okay for now
      // Or better: disable smooth scroll, jump to clone, then smooth scroll to end?
      // For simplicity, just smooth scroll to the last real item
    }
    scrollToStage(prevStage);
    setActiveStage(prevStage);
  };

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

      <section id="home" className="snap-section relative bg-gray-900 text-white h-dvh flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/lions_mane_hero_minimal.webp"
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
              href="/#gallery"
              onClick={handleDiscoverClick}
              className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors"
            >
              {t('Hero.cta')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>

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
                      src="/images/about_us_new.jpg"
                      alt="MR FUNGUS Cultivation Facility"
                      fill
                      className="object-cover"
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


            <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 w-full mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone1_date')}
                  </div>

                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p1')}
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


            <div className="relative flex flex-col md:flex-row-reverse items-center mb-24 last:mb-0 group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone3_date')}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p3')}
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


            <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 border-4 border-stone-100 z-10 shadow-sm"></div>

              <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 mb-8 md:mb-0">
                <ScrollAnimation>
                  <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {t('OurStory.milestone2_date')}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {t('OurStory.background_p2')}
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
                      src="/images/story_lab_malaysian_v2.webp"
                      alt="Lab Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>


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
                    {t('Mission.title')}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
                    {t('Mission.content')}
                  </h2>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">


      </div>
      <section id="gallery" className="snap-section bg-[#f2e8cf] py-24 md:h-screen md:py-0 md:flex md:flex-col md:justify-center overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 flex-shrink-0 relative z-10 pt-24 md:pt-20 pb-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">{t('Gallery.title')}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto md:mb-0">{t('Gallery.intro')}</p>
          </ScrollAnimation>
        </div>

        {/* Mobile Vertical Stack Gallery */}
        <div className="md:hidden space-y-16 px-4 mt-12">
          {stages.map((stage, index) => (
            <div key={stage.id} className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[var(--primary)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">{t(`Gallery.stages.${stage.id}.title`)}</h3>
                </div>
                <p className="text-[var(--muted-foreground)] ml-11">{t(`Gallery.stages.${stage.id}.description`)}</p>
              </div>

              {/* Horizontal Image Scroll */}
              <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide snap-x">
                {Array.from({ length: stage.count }).map((_, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[85vw] snap-center">
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={stage.images?.[idx]?.src || `/images/process/${stage.id}_${idx + 1}.${stage.ext || 'svg'}`}
                        alt={`${stage.id} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      {stage.images?.[idx]?.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center backdrop-blur-sm z-10">
                          {stage.images[idx].caption}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Full-Screen Process Carousel */}
        <div className="hidden md:block relative group flex-1 min-h-0 w-full">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/70 backdrop-blur-sm shadow-lg text-[var(--primary)] hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous stage"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/70 backdrop-blur-sm shadow-lg text-[var(--primary)] hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next stage"
          >
            <ChevronRight size={24} />
          </button>

          <div
            id="gallery-scroll-container"
            ref={scrollContainerRef}
            className="flex overflow-x-auto w-full snap-x snap-mandatory scrollbar-hide pb-12 md:pb-0 h-full md:items-center"
            onScroll={handleScroll}
          >
            {extendedStages.map((stage, index) => {
              // Handle clone ID for translations by stripping the suffix
              const originalId = stage.id.replace('-clone', '');

              return (
                <div key={`${stage.id}-${index}`} className="min-w-full flex-shrink-0 snap-center px-2 md:px-0 flex items-center justify-center h-full md:py-8 md:px-12">
                  <div className={`max-w-[95rem] w-full mx-auto bg-white/60 backdrop-blur-md rounded-3xl p-4 md:p-8 shadow-sm border border-[var(--border)] h-[85vh] md:h-full flex flex-col ${originalId === 'culinary' ? '' : 'md:flex-row'} gap-6`}>
                    {/* Text Content */}
                    {originalId !== 'culinary' && (
                      <div className="md:w-[25%] flex flex-col justify-center space-y-6">
                        <div className="inline-block bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm font-bold w-fit">
                          {stage.label || `Stage ${(index % stages.length) + 1}`}
                        </div>
                        <ScrollAnimation>
                          <h3 className="text-3xl md:text-5xl font-bold text-[var(--foreground)]">{t(`Gallery.stages.${originalId}.title`)}</h3>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.1}>
                          <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
                            {t(`Gallery.stages.${originalId}.description`)}
                          </p>
                        </ScrollAnimation>
                      </div>
                    )}

                    {/* Image Grid */}
                    <div className={`${originalId === 'culinary' ? 'w-full flex-1' : 'md:w-[75%] h-full'} overflow-hidden`}>
                      <div className={`grid gap-3 h-full ${stage.count <= 2 ? 'grid-cols-1 md:grid-cols-2 md:grid-rows-1' :
                        stage.count === 3 ? 'grid-cols-1 md:grid-cols-2 md:grid-rows-2' :
                          stage.count <= 4 ? 'grid-cols-2 md:grid-cols-2 md:grid-rows-2' :
                            'grid-cols-2 md:grid-cols-4 md:grid-rows-2'
                        }`}>
                        {Array.from({ length: stage.count }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full w-full ${stage.count === 3
                              ? idx === 0 ? 'md:col-start-1 md:row-start-1'
                                : idx === 1 ? 'md:col-start-1 md:row-start-2'
                                  : 'md:col-start-2 md:row-start-1 md:row-span-2'
                              : ''
                              }`}
                          >
                            <Image
                              src={stage.images?.[idx]?.src || `/images/process/${originalId}_${idx + 1}.${stage.ext || 'svg'}`}
                              alt={`${originalId} ${idx + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                            {stage.images?.[idx]?.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center backdrop-blur-sm z-10">
                                {stage.images[idx].caption}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Text for Culinary Stage */}
                    {originalId === 'culinary' && (
                      <div className="w-full text-center py-2 flex-shrink-0">
                        <p className="text-lg md:text-xl text-[var(--muted-foreground)] font-medium">
                          {t(`Gallery.stages.${originalId}.description`)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {stages.map((_, i) => (
              <button
                key={i}
                className={`stage-indicator h-2 rounded-full transition-all duration-300 ${activeStage % stages.length === i ? 'bg-[var(--primary)] w-8' : 'bg-gray-300 w-2'}`}
                onClick={() => {
                  setActiveStage(i);
                  scrollToStage(i);
                }}
                aria-label={`Go to stage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 space-y-24">


      </div>
      <section id="youtube-recipes" className="snap-section bg-[#f2e8cf] py-24 px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--primary)] max-w-4xl mx-auto leading-relaxed">
                {t('Youtube.title')}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <a
                href="https://www.youtube.com/playlist?list=PLUm9x-Uihu6bkbfs18Of3HSAzvW6WO6bv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg md:text-xl text-[#BC6C25] hover:text-[#dda15e] font-bold underline mb-12 break-all"
              >
                https://www.youtube.com/playlist?list=PLUm9x-Uihu6bkbfs18Of3HSAzvW6WO6bv
              </a>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col items-center gap-6">
                <p className="text-xl font-medium text-gray-700">{t('Youtube.or_scan')}:</p>
                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white p-4 rounded-xl shadow-lg">
                  <Image
                    src="/images/youtube_qr.png"
                    alt="YouTube Playlist QR Code"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

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



        <section id="location" className="snap-section bg-[#f2e8cf] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
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
