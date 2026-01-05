'use client';

import { useRef, useState, useEffect } from 'react';
import Image from "next/image"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { useTranslations, useLocale } from 'next-intl';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"

interface Stage {
    id: string;
    count: number;
    ext?: string;
    label?: string;
    images?: {
        src: string;
        captionKey?: string;
    }[];
}

const stages: Stage[] = [
    { id: 'preservation', count: 2, ext: 'webp' },
    {
        id: 'preparation',
        count: 3,
        images: [
            { src: '/images/process/preparation_1.webp', captionKey: 'pellets' },
            { src: '/images/process/preparation_2.webp' },
            { src: '/images/process/preparation_3.mp4' }
        ]
    },
    {
        id: 'inoculation',
        count: 2,
        images: [
            { src: '/images/process/inoculation_1.mp4' },
            { src: '/images/process/inoculation_2.webp' }
        ]
    },
    {
        id: 'incubation',
        count: 2,
        images: [
            { src: '/images/process/incubation_1.webp' },
            { src: '/images/process/incubation_2.webp' }
        ]
    },
    {
        id: 'fruiting',
        count: 2,
        images: [
            { src: '/images/process/fruiting_1.webp' },
            { src: '/images/process/fruiting_2.webp', captionKey: 'ready_harvest' }
        ]
    },
    {
        id: 'harvest',
        count: 2,
        images: [
            { src: '/images/process/harvest_1.webp' },
            { src: '/images/process/harvest_2.webp' }
        ]
    },
    {
        id: 'culinary',
        count: 8,
        label: 'Bon Appétit',
        images: [
            { src: '/images/process/culinary_1.webp' },
            { src: '/images/process/culinary_2.webp' },
            { src: '/images/process/culinary_3.webp' },
            { src: '/images/process/culinary_4.webp' },
            { src: '/images/process/culinary_5.webp' },
            { src: '/images/process/culinary_6.webp' },
            { src: '/images/process/culinary_7.webp' },
            { src: '/images/process/culinary_8.webp' }
        ]
    }
];

export function Gallery() {
    const t = useTranslations();
    const locale = useLocale();

    const [activeStage, setActiveStage] = useState(1);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isProgrammaticScroll = useRef(false);
    const programmaticScrollTimeout = useRef<NodeJS.Timeout>(null);
    const rafId = useRef<number | null>(null);

    // Cache container width to avoid forced reflows
    const containerWidthRef = useRef<number>(0);

    // Create clones for infinite loop effect
    // buffer at start (last item) and buffer at end (first item)
    const extendedStages = [
        { ...stages[stages.length - 1], id: stages[stages.length - 1].id + '-clone-start' },
        ...stages,
        { ...stages[0], id: stages[0].id + '-clone-end' }
    ];

    // ResizeObserver to keep track of container width
    useEffect(() => {
        if (!scrollContainerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                containerWidthRef.current = entry.contentRect.width;
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(scrollContainerRef.current);

        // Initial measurement
        containerWidthRef.current = scrollContainerRef.current.clientWidth;

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

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

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Handle infinite scroll reset
    useEffect(() => {
        const width = containerWidthRef.current || scrollContainerRef.current?.clientWidth || 0;
        if (width === 0) return;

        if (activeStage === extendedStages.length - 1) {
            // Reached the clone at the end (copy of first), jump to real first (index 1)
            setIsResetting(true);
            const timeout = setTimeout(() => {
                if (scrollContainerRef.current) {
                    const newIndex = 1;
                    scrollContainerRef.current.scrollTo({
                        left: newIndex * width,
                        behavior: 'auto'
                    });
                    setActiveStage(newIndex);
                    setIsResetting(false);
                }
            }, 500); // Wait for transition to finish
            return () => clearTimeout(timeout);
        } else if (activeStage === 0) {
            // Reached the clone at the start (copy of last), jump to real last (index length-2)
            setIsResetting(true);
            const timeout = setTimeout(() => {
                if (scrollContainerRef.current) {
                    const newIndex = extendedStages.length - 2;
                    scrollContainerRef.current.scrollTo({
                        left: newIndex * width,
                        behavior: 'auto'
                    });
                    setActiveStage(newIndex);
                    setIsResetting(false);
                }
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [activeStage, extendedStages.length]);

    // Initial scroll position to start at index 1
    useEffect(() => {
        // We need to wait for the width to be available, usually on mount it is
        if (scrollContainerRef.current) {
            const width = containerWidthRef.current || scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
                left: 1 * width,
                behavior: 'auto'
            });
        }
    }, []);

    useEffect(() => {
        if (!isGalleryVisible || !autoScrollEnabled) return;

        const interval = setInterval(() => {
            // Just increment to next stage, logic above handles the reset
            const nextStage = activeStage + 1;
            scrollToStage(nextStage);
            setActiveStage(nextStage);
        }, 5000);

        return () => clearInterval(interval);
    }, [isGalleryVisible, activeStage, autoScrollEnabled]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (isResetting || isProgrammaticScroll.current) return;

        const container = e.currentTarget;

        // Use requestAnimationFrame to avoid forced reflows during scroll events
        if (rafId.current) return;

        rafId.current = requestAnimationFrame(() => {
            const scrollLeft = container.scrollLeft;
            const width = containerWidthRef.current || container.clientWidth;

            if (width > 0) {
                const index = Math.round(scrollLeft / width);
                if (index !== activeStage) {
                    setActiveStage(index);
                }
            }
            rafId.current = null;
        });
    };

    const scrollToStage = (index: number) => {
        if (scrollContainerRef.current) {
            const width = containerWidthRef.current || scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
                left: index * width,
                behavior: 'smooth'
            });
        }
    };

    const handleNext = () => {
        if (isResetting) return;
        // Prevent scrolling if we are already at the end clone and waiting for reset
        if (activeStage >= extendedStages.length - 1) return;

        setAutoScrollEnabled(false);
        isProgrammaticScroll.current = true;

        // Clear existing timeout to extend the lock
        if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
        programmaticScrollTimeout.current = setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 600);

        const nextStage = activeStage + 1;
        scrollToStage(nextStage);
        setActiveStage(nextStage);
    };

    const handlePrev = () => {
        if (isResetting) return;
        // Prevent scrolling if we are already at the start clone and waiting for reset
        if (activeStage <= 0) return;

        setAutoScrollEnabled(false);
        isProgrammaticScroll.current = true;

        if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
        programmaticScrollTimeout.current = setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 600);

        const prevStage = activeStage - 1;
        scrollToStage(prevStage);
        setActiveStage(prevStage);
    };

    const isVideo = (src: string) => src.endsWith('.mp4') || src.endsWith('.webm');

    return (
        <>
            <section id="gallery" className="snap-section bg-[#f2e8cf] py-24 md:h-screen md:py-0 md:flex md:flex-col md:justify-start overflow-hidden">
                <div className="container max-w-6xl mx-auto px-4 flex-shrink-0 relative z-10 pt-16 md:pt-23 pb-4 md:order-1">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">{t('Gallery.title')}</h2>
                        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto md:mb-0 text-sm md:text-base">{t('Gallery.intro')}</p>
                    </ScrollAnimation>
                </div>

                {/* Mobile Vertical Stack Gallery */}
                <div className="md:hidden space-y-16 px-4 mt-12">
                    {stages.map((stage, index) => (
                        <div key={stage.id} className="space-y-3">
                            {/* Horizontal Image Scroll */}
                            <div className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 scrollbar-hide snap-x items-center">
                                {Array.from({ length: stage.count }).map((_, idx) => {
                                    const imageSrc = stage.images?.[idx]?.src || `/images/process/${stage.id}_${idx + 1}.${stage.ext || 'svg'}`;
                                    const isVid = isVideo(imageSrc);

                                    return (
                                        <div key={idx} className="flex-shrink-0 snap-center">
                                            <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group-hover:brightness-90 transition-all border-4 border-white bg-white"
                                                onClick={() => setSelectedImage(imageSrc)}
                                            >
                                                {isVid ? (
                                                    <video
                                                        src={imageSrc}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="max-h-[50vh] max-w-[85vw] w-auto h-auto object-contain block rounded-lg"
                                                    />
                                                ) : (
                                                    <img
                                                        src={imageSrc}
                                                        alt={`${stage.id} ${idx + 1}`}
                                                        className="max-h-[50vh] max-w-[85vw] w-auto h-auto object-contain block rounded-lg"
                                                    />
                                                )}
                                                {stage.images?.[idx]?.captionKey && (
                                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center backdrop-blur-sm z-10">
                                                        {t(`Gallery.stages.${stage.id}.captions.${stage.images[idx].captionKey}`)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Description at bottom for mobile */}
                            <p className="text-[var(--muted-foreground)] text-center">{t(`Gallery.stages.${stage.id}.description`)}</p>
                        </div>
                    ))}
                </div>

                {/* Desktop Full-Screen Process Carousel */}
                <div className="hidden md:flex flex-col relative group w-full md:order-2 md:mt-2 flex-1 min-h-0 justify-center">
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
                        className="flex overflow-x-auto w-full snap-x snap-mandatory scrollbar-hide pb-12 md:pb-16 h-full items-center"
                        onScroll={handleScroll}
                        onWheel={() => setAutoScrollEnabled(false)}
                        onTouchStart={() => setAutoScrollEnabled(false)}
                    >
                        {extendedStages.map((stage, index) => {
                            // Handle clone ID for translations by stripping the suffixes
                            const originalId = stage.id.replace('-clone-start', '').replace('-clone-end', '').replace('-clone', '');
                            const isCulinary = originalId === 'culinary';

                            return (
                                <div key={`${stage.id}-${index}`} className="min-w-full flex-shrink-0 snap-center px-2 md:px-0 flex items-center justify-center h-full md:px-12">
                                    <div className={`mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-[var(--border)] flex flex-col justify-center ${isCulinary ? 'w-full max-w-[90vw] h-full max-h-full gap-2 pt-4 px-4 pb-2 md:pt-8 md:px-8 md:pb-1' : 'w-fit max-w-[88vw] h-fit max-h-full gap-2 p-3 pb-1'}`}>

                                        {/* Image Area - Different Logic for Dynamic vs Fixed */}
                                        <div className={`overflow-hidden ${isCulinary ? 'w-full flex-1 min-h-0 flex flex-col' : 'flex-1 flex items-center justify-center'}`}>

                                            {!isCulinary ? (
                                                // Dynamic Flex Layout for Non-Culinary
                                                <div className="flex gap-2 w-fit mx-auto max-w-full h-auto items-center">
                                                    {/* Standard Row for All Non-Culinary Stages */}
                                                    {Array.from({ length: stage.count }).map((_, idx) => {
                                                        const imageSrc = stage.images?.[idx]?.src || `/images/process/${originalId}_${idx + 1}.${stage.ext || 'svg'}`;
                                                        const isVid = isVideo(imageSrc);

                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="relative h-auto w-fit rounded-xl overflow-hidden shadow-sm cursor-pointer group hover:shadow-md transition-all flex-shrink"
                                                                onClick={() => setSelectedImage(imageSrc)}
                                                            >
                                                                {isVid ? (
                                                                    <video
                                                                        src={imageSrc}
                                                                        autoPlay
                                                                        loop
                                                                        muted
                                                                        playsInline
                                                                        className={`w-auto object-contain hover:scale-105 transition-transform duration-500 rounded-xl ${originalId === 'preparation'
                                                                            ? 'h-[50vh] md:h-[min(40vh,30vw)] xl:h-[min(50vh,35vw)] 2xl:h-[min(55vh,40vw)]'
                                                                            : ['preservation', 'inoculation'].includes(originalId)
                                                                                ? 'max-h-[50vh] md:max-h-[min(40vh,30vw)] xl:max-h-[min(50vh,35vw)] 2xl:max-h-[min(55vh,40vw)] h-auto'
                                                                                : 'max-h-[45vh] md:max-h-[min(40vh,28vw)] xl:max-h-[min(50vh,33vw)] 2xl:max-h-[min(55vh,38vw)] h-auto'
                                                                            }`}
                                                                    />
                                                                ) : (
                                                                    <img
                                                                        src={imageSrc}
                                                                        alt={`${originalId} ${idx + 1}`}
                                                                        className={`w-auto object-contain hover:scale-105 transition-transform duration-500 rounded-xl ${originalId === 'preparation'
                                                                            ? 'h-[50vh] md:h-[min(40vh,30vw)] xl:h-[min(50vh,35vw)] 2xl:h-[min(55vh,40vw)]'
                                                                            : ['preservation', 'inoculation'].includes(originalId)
                                                                                ? 'max-h-[50vh] md:max-h-[min(40vh,30vw)] xl:max-h-[min(50vh,35vw)] 2xl:max-h-[min(55vh,40vw)] h-auto'
                                                                                : 'max-h-[45vh] md:max-h-[min(40vh,28vw)] xl:max-h-[min(50vh,33vw)] 2xl:max-h-[min(55vh,38vw)] h-auto'
                                                                            }`}
                                                                    />
                                                                )}
                                                                {stage.images?.[idx]?.captionKey && (
                                                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center backdrop-blur-sm z-10">
                                                                        {t(`Gallery.stages.${originalId}.captions.${stage.images[idx].captionKey}`)}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                // Existing Grid Layout for Culinary (unchanged logic)
                                                <div className={`grid w-full h-full gap-3 ${stage.count <= 2 ? 'grid-cols-1 md:grid-cols-2 md:grid-rows-1' :
                                                    stage.count === 3 ? 'grid-cols-1 md:grid-cols-2 md:grid-rows-2' :
                                                        stage.count <= 4 ? 'grid-cols-2 md:grid-cols-2 md:grid-rows-2' :
                                                            'grid-cols-2 md:grid-cols-4 md:grid-rows-2'
                                                    }`}>
                                                    {Array.from({ length: stage.count }).map((_, idx) => {
                                                        const imageSrc = stage.images?.[idx]?.src || `/images/process/${originalId}_${idx + 1}.${stage.ext || 'svg'}`;
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className={`relative overflow-hidden transition-shadow h-full w-full cursor-pointer rounded-xl shadow-sm hover:shadow-md ${stage.count === 3
                                                                    ? idx === 0 ? 'md:col-start-1 md:row-start-1'
                                                                        : idx === 1 ? 'md:col-start-1 md:row-start-2'
                                                                            : 'md:col-start-2 md:row-start-1 md:row-span-2'
                                                                    : ''
                                                                    }`}
                                                                onClick={() => setSelectedImage(imageSrc)}
                                                            >
                                                                <Image
                                                                    src={imageSrc}
                                                                    alt={`${originalId} ${idx + 1}`}
                                                                    fill
                                                                    className={`object-cover hover:scale-105 transition-transform duration-500 rounded-xl`}
                                                                    priority
                                                                    unoptimized={imageSrc.toLowerCase().endsWith('.gif')}
                                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                                />
                                                                {stage.images?.[idx]?.captionKey && (
                                                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center backdrop-blur-sm z-10">
                                                                        {t(`Gallery.stages.${originalId}.captions.${stage.images[idx].captionKey}`)}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Text for All Stages */}
                                        <div className={`text-center pt-0 pb-1 flex-shrink-0 ${isCulinary ? 'w-full' : 'w-0 min-w-full mx-auto px-4'}`}>
                                            <p className="text-lg md:text-md text-[var(--muted-foreground)] font-medium px-4 text-balance">
                                                {t(`Gallery.stages.${originalId}.description`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
                        {stages.map((_, i) => (
                            <button
                                key={i}
                                className={`stage-indicator h-2 rounded-full transition-all duration-300 ${
                                    // Calculate visual index: (activeStage - 1 + length) % length
                                    (activeStage - 1 + stages.length) % stages.length === i
                                        ? 'bg-[var(--primary)] w-8'
                                        : 'bg-gray-300 w-2'
                                    }`}
                                onClick={() => {
                                    // When clicking indicator, go to the corresponding real stage index (i + 1)
                                    const targetIndex = i + 1;
                                    setActiveStage(targetIndex);
                                    scrollToStage(targetIndex);
                                }}
                                aria-label={`Go to stage ${i + 1}`}
                            />
                        ))}
                    </div>
                </div >
            </section>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <div
                            className="relative w-full h-full max-w-7xl max-h-[90vh]"
                        >
                            {isVideo(selectedImage) ? (
                                <video
                                    src={selectedImage}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <Image
                                    src={selectedImage}
                                    alt="Full size preview"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized={selectedImage.toLowerCase().endsWith('.gif')}
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
