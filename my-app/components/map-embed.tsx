'use client';

import { useState } from "react";
import { MapPin } from "lucide-react";

interface MapEmbedProps {
    src: string;
    title?: string;
    className?: string;
}

export function MapEmbed({
    src,
    title = "Map",
    className = ""
}: MapEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100 ${className}`}>
            {isLoaded ? (
                <iframe
                    width="100%"
                    height="100%"
                    title={title}
                    scrolling="no"
                    src={src}
                    style={{ filter: "grayscale(0) contrast(1.2) opacity(0.9)", border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        onClick={() => setIsLoaded(true)}
                        className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-black/5 transition-colors"
                        aria-label="Load Map"
                    >
                        <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <MapPin size={32} />
                        </div>
                        <span className="text-gray-600 font-medium">Click to Load Map</span>
                    </button>
                </div>
            )}
        </div>
    );
}
