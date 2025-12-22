import React from 'react';

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
    return (
        <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg ${className}`}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}
