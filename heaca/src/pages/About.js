import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="hero-section text-center py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            We specialize in fostering healthier and more productive work environments through tailored health promotion solutions. We collaborate with businesses of all sizes and industries to develop and implement transformative health policies.
                        </p>
                        <div className="flex justify-center">
                            <span className="h-1 w-20 bg-orange-500 block"></span>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our mission is to continuously push boundaries in everything we do. We work alongside our customers to create and apply cutting-edge digital solutions that tackle tough challenges and help make the world a better place.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our vision is to be the leading provider of innovative health promotion solutions that enhance the well-being and productivity of workplaces worldwide.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
