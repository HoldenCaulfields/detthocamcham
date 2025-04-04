"use client";

import React from "react";
import { useRouter } from "next/navigation";

const IconButton: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/game");
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <button
                onClick={handleClick}
                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#f8cdda] to-[#f5f7fa] 
                text-gray-800 shadow-lg backdrop-blur-md border border-white/30
                hover:shadow-xl hover:scale-110 hover:from-[#ff9a9e] hover:to-[#fad0c4] 
                transition-all duration-300 transform active:scale-95"
            >
                <span className="text-2xl animate-pulse">🎮</span>
                <span className="text-lg font-semibold">Trò chơi</span>
            </button>
        </div>
    );
};

export default IconButton;
