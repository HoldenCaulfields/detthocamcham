"use client";

import React from "react";
import Image from "next/image";

const products = [
    { id: 1, name: "Khanh", description: "Quá trình làm đầy khó khăn", img: '/khanh.jpg' },
    { id: 2, name: "Khăn", description: "Khăn gió", img: '/khan.jpg' },
    { id: 3, name: "Ao", description: "Áo dệt thủ công", img: '/ao.jpg' },
    
];

const Products = () => {
    return (
        <section id="projects" className="w-full text-center px-6 py-12 bg-transparent">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">✨ Sản Phẩm Nổi Bật ✨</h2>

            {/* Mobile Scrollable Wrapper */}
            <div className="md:hidden flex overflow-x-auto space-x-4 snap-x snap-mandatory pb-4 px-4">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg flex-none w-72 snap-center transition-transform duration-300 hover:scale-105 hover:bg-yellow-100"
                    >
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <Image 
                            src={product.img} 
                            alt={`${product.name} image`} 
                            width={300}
                            height={200}
                            className="mt-4 w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-400/50"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-3">{product.description}</p>
                        <Image 
                            src={product.img} 
                            alt={`${product.name} image`} 
                            width={400}
                            height={300}
                            className="mt-6 w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
