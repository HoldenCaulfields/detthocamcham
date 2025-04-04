"use client";

import Image from "next/image";
import React from "react";

const images = [
    { id: 1, src: "/kn4.jpg", alt: "Memory 1" },
    { id: 2, src: "/kn2.jpg", alt: "Memory 2" },
    { id: 3, src: "/kn3.jpg", alt: "Memory 3" },
    { id: 4, src: "/kn1.jpg", alt: "Memory 4" },
    { id: 5, src: "/kn5.jpg", alt: "Memory 5" },
    { id: 6, src: "/kn6.jpg", alt: "Memory 6" },
];

const Memories = () => {
    return (
        <div id="about" className="w-full p-6 flex flex-col items-center bg-transparent">
            <h2 className="text-2xl font-bold mb-4 text-center">Kỷ Niệm</h2>

            {/* Mobile: Horizontal Scroll | Desktop: Centered Grid */}
            <div
                aria-label="Memory images gallery"
                className="w-full flex overflow-x-auto md:grid md:grid-cols-3 md:justify-center md:place-items-center gap-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Cross-browser scrollbar hide
            >
                {images.map((image) => (
                    <div 
                        key={image.id} 
                        className="w-64 h-64 flex-shrink-0 md:flex-shrink-0 overflow-hidden rounded-lg shadow-lg flex justify-center items-center transition-transform transform hover:scale-105 hover:rotate-1 snap-center"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={512}
                            height={512}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/logo.png"; // Fallback image
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Memories;