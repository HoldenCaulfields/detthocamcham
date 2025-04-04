"use client";
import React, { useEffect, useRef } from 'react';

const Background = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animate = () => {
            const div = document.createElement('div');
            const height = Math.random() * 1 + 2; // Line height between 2 and 4
            let width = Math.random() * 900 + 900; // Line width
            const color1 = `hsl(${Math.random() * 360}, 100%, 50%)`;
            const color2 = `hsl(${Math.random() * 360}, 100%, 50%)`;
            const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

            div.style.height = `${height}px`;
            div.style.width = `${width}px`;
            div.style.background = gradient;
            div.style.borderRadius = '0px'; // Make sure it's a rectangle
            div.style.position = 'absolute';

            const animationDuration = Math.random() * 8 + 5; // Duration between 5 to 13 seconds

            div.style.top = `${Math.random() * container.offsetHeight}px`;

            // Determine direction: Right to Left or Left to Right
            const direction = Math.random() > 0.5 ? 'left' : 'right';

            // Set initial position and animation based on direction
            if (direction === 'left') {
                div.style.left = `${container.offsetWidth + 50}px`; // Start right of the container
                div.style.width = `${container.offsetWidth}px`;
                div.style.height = `${Math.random() * 1 + 2}px`;
                const animation = div.animate(
                    [
                        { transform: 'translateX(0)' },
                        { transform: `translateX(-${container.offsetWidth + 50}px)` }, // Move it left of the container
                    ],
                    {
                        duration: animationDuration * 1000,
                        easing: 'linear',
                        fill: 'forwards',
                    }
                );
                animation.onfinish = () => {
                    div.remove();
                };
            } else {
                div.style.left = `-${width}px`; // Start left of the container
                const animation = div.animate(
                    [
                        { transform: 'translateX(0)' },
                        { transform: `translateX(${container.offsetWidth + 50}px)` }, // Move it right of the container
                    ],
                    {
                        duration: animationDuration * 1000,
                        easing: 'linear',
                        fill: 'forwards',
                    }
                );
                animation.onfinish = () => {
                    div.remove();
                };
            }

            container.appendChild(div);
        };

        let animationInterval = setInterval(animate, 500); // Reduced interval to slow down the rate of new lines

        return () => {
            clearInterval(animationInterval);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: -1, // Ensure it's behind other content
            }}
            className='bg-gradient-to-r from-red-50 to-gray-100'
        />
    );
};

export default Background;
