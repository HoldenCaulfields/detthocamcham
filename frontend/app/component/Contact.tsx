"use client";

import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="w-full flex flex-col items-center justify-center text-center px-6 py-10 background-gradient bg-transparent">
            <h2 className="text-3xl font-semibold mb-6">Liên hệ</h2>
            
            {/* Contact Info */}
            <div className="mb-6">
                <p className="text-lg"><strong>SĐT:</strong> 0364494839</p>
                <p className="text-lg"><strong>Email:</strong> thucmath2000@gmail.com</p>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full max-w-2xl h-84 border-2 border-gray-300 rounded-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.772845957741!2d108.9424816!3d11.521535900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170d308cd6af377%3A0x1f88c1fa776ad924!2zTMOgbmcgROG7hlQgVEjhu5QgQ-G6qE0gTeG7uSBOZ2hp4buHcA!5e1!3m2!1sen!2s!4v1740221622562!5m2!1sen!2s"
                    
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
