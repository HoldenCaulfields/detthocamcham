import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 text-center  shadow-lg"
            style={{ zIndex: 100 }}>
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-sm mb-2">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">trungthuc</span>. All rights reserved.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="https://brandnew-pi.vercel.app/" 
                        target="_blank" 
                        className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                        Contact Us: 0364494839
                    </a>

                    <span className="hidden sm:inline text-gray-500">|</span>

                    <a 
                        href="/sponsor" 
                        className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                        Sponsor
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
