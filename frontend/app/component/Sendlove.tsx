"use client";

import React, { useState } from "react";

const SendLove = () => {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number }[]>([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
        const newHeart = {
            id: Date.now(), // unique key
            left: Math.random() * 10 + 15, // random X position between 15% and 85% (to prevent hearts going off screen)
            delay: Math.random() * 0.5, // random delay between 0 and 0.5 seconds
        };
        setHearts((prev) => [...prev, newHeart]);

        // Remove the heart after 3 seconds
        setTimeout(() => {
            setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
        }, 3000);

        // Reset the button state after animation
        setTimeout(() => setButtonClicked(false), 300); // Duration of the animation
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "10px", zIndex: 1000, userSelect: "none" }}>
            <button
                onClick={handleClick}
                style={{
                    fontSize: "80px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // Add a more dynamic transition
                    transform: buttonClicked ? "scale(1.1)" : "scale(1)", // Slightly less scaling
                }}
            >
                🤍
            </button>

            <div>
                {hearts.map((heart) => (
                    <span
                        key={heart.id}
                        style={{
                            position: "absolute",
                            left: `${heart.left}%`,
                            bottom: "0",
                            fontSize: "80px",
                            animation: `floatUp 3s cubic-bezier(0.25, 0.1, 0.25, 1) ${heart.delay}s forwards`, // Adjust timing and easing
                            color: "#ff6f61", // Heart color
                        }}
                    >
                        ❤️
                    </span>
                ))}
            </div>

            {/* Animation style */}
            <style jsx>{`
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    40% {
                        transform: translateY(-120px) scale(1.3);
                        opacity: 1;
                    }
                    80% {
                        transform: translateY(-250px) scale(1.6);
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(-300px) scale(1.2);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default SendLove;
