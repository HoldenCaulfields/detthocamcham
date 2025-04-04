"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Introduction from "./Introduction";

const images = [
    "/mynghiep.jpg",
    "/det1.jpg",
    "/det2.jpg",
    "/det3.jpg",
    "/det4.jpg",
    "/det.jpg",
    "/detcham.jpg",
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if screen width is mobile size
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col md:flex-row w-full px-4 md:px-10 py-10 items-center bg-transparent gap-6 md:gap-10">
            {/* Right Section: Auto-Changing Slideshow (Centered on Mobile) */}
            <div className="w-full md:w-2/3 min-h-[250px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`Dệt Image ${index + 1}`}
                        width={500} // Set appropriate width
                        height={500} // Set appropriate height
                        loading={index === currentImageIndex ? "eager" : "lazy"}
                        className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out transform ${
                            index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    />
                ))}
            </div>

            {/* Only Render Small Image on Desktop (md and larger) */}
            {!isMobile && (
                <Introduction />
            )}
        </div>
    );
};

export default Home;
