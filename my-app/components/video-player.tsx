'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    title?: string;
    className?: string;
}

export function VideoPlayer({
    src,
    title = "YouTube video player",
    className = ""
}: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Ensure autoplay is enabled when loaded interactively
    const embedUrl = isPlaying
        ? `${src}${src.includes('?') ? '&' : '?'}autoplay=1`
        : src;

    return (
        <div
            className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900 ${className}`}
            onClick={() => !isPlaying && setIsPlaying(true)}
        >
            {isPlaying ? (
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group hover:bg-black/10 transition-colors">
                    {/* Placeholder content - could be a thumbnail if provided, for now just a play button */}
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={40} className="text-white fill-white ml-2" />
                    </div>
                    <span className="sr-only">Play Video</span>
                </div>
            )}
        </div>
    );
}
