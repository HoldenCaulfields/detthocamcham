"use client";

import React, { useState } from 'react';

interface LanguageProps {
    onLanguageChange: (language: string) => void;
}

const Language: React.FC<LanguageProps> = ({ onLanguageChange }) => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        onLanguageChange(selectedLanguage);
    };

    return (
        <div>
            <label htmlFor="language">Select Language:</label>
            <select id="language" value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="vi">Vietnamese</option>
            </select>
        </div>
    );
};

export default Language;