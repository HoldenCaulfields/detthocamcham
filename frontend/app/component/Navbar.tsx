"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Language from "./Language";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll to add shadow effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white"}`}>
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                    <Link href="#" className="flex items-center">
                        <Image src="/logo.png" alt="logo" width={60} height={60} className="object-cover rounded-full transition-all duration-300" />
   
                        <span className="text-lg font-semibold whitespace-nowrap">Lưu Thị Em</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <span>X</span>
                        ) : (
                            <span>☰</span>
                        )}
                    </button>

                    {/* <Language onLanguageChange={(language) => console.log(language)} /> */}

                    {/* Navigation Links */}
                    <div className={`md:flex md:items-center md:w-auto w-full transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                            <li>
                                <Link href="#" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Trang chủ
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Giới thiệu
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Sản phẩm
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
