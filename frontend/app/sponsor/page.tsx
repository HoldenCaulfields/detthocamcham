"use client";

import Image from "next/image";
import React, { useState } from "react";
import Background from "../component/Background";

const Sponsor = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const qrCodeValue = amount ? `upi://pay?pa=your-upi-id&am=${amount}` : "";

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent">
            <Background />

            <div className="relative z-10 flex flex-col items-center bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-300">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
                    Support Me! 💖
                </h1>

                <p className="text-lg text-gray-700 mb-6 text-center">
                    Your support means the world to me! Every contribution helps me keep creating.
                </p>

                <div className="mb-6">
                    <Image 
                        src='/myqr.jpg' 
                        alt="QR Code" 
                        width={256} 
                        height={256} 
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-xl text-center text-green-600 font-semibold">
                    Thank you so much for your kindness!
                </p>
            </div>
        </div>
    );
};

export default Sponsor;
