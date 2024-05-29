// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
    return (
        <section data-bg-color="#FFFFFF" className="text-center py-16 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Healthy environments create sustainable results
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    At Heaca, we specialize in fostering healthier and more productive work environments
                    through tailored health promotion solutions. We collaborate with businesses of all sizes
                    and industries to develop and implement transformative health policies.
                </p>
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
