import React from 'react';
import useScrollBackground from '../hooks/useScrollBackground';
import { Link } from 'react-router-dom';

import '../pageCss/Home.css';

const Home = () => {
    const sectionsConfig = [
        { id: 'hero', color: '#fbf8fa' },
        { id: 'curiosity', color: '#ffffff' },
        { id: 'about-praghasini', color: '#ffffff' },
        { id: 'services', color: '#981818' },
        { id: 'latestnews', color: '#ffffff' },
        { id: 'contact', color: '#ffffff' },
    ];

    useScrollBackground(sectionsConfig);

    return (
        <>
            <main>
                {/* Hero Section */}
                <section id="hero" className="hero-section py-48 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            At the forefront of workplace
                        </h1>
                        <div className="flex justify-start mb-4">
                            <span className="h-1 w-16 bg-red-600 block"></span>
                        </div>
                        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
                            At Heaca, we deliver strategic health solutions that enhance employee well-being and align with your business objectives. Our services are designed to reduce absenteeism, ensure workforce continuity, and optimize healthcare investments.
                        </p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/Figur.png`} alt="Background Figure" className="figure-overlay" />
                </section>

                {/* Curiosity Section */}
                <section id="curiosity" className="curiosity-section py-44 section lg:pt-60 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Changing the world</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Curiosity creates transformation</h3>
                            <p className="text-lg text-gray-700 mb-12">
                                Discover why companies choose us. At Heaca, we offer unparalleled expertise based on decades of experience within Denmark's public and private healthcare sectors. Our profound knowledge allows us to navigate the complexities of the healthcare sector with precision and insight, ensuring our clients receive the best possible support.
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end relative">
                            <div className="relative w-full max-w-4xl h-96">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-2xl lg:mt-8"
                                    src="https://www.youtube.com/embed/G4x4RbQXz1c"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Praghasini Section */}
                <section id="about-praghasini" className="about-praghasini-section py-44 section lg:pt-60">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 flex justify-center lg:justify-start relative">
                            <div className="relative">
                                <img src={`${process.env.PUBLIC_URL}/images/Prag.png`} alt="Praghasini" className="w-full max-w-lg h-auto rounded-lg shadow-2xl lg:mt-8" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                            <h2 className="text-xl font-bold text-red-600 mb-2 uppercase tracking-wide">CEO</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pragashini Baskaran</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                "In Heaca we have a trusted partner that inspires, builds and runs value-adding solutions with us."
                            </p>
                        </div>
                    </div>
                </section>



                {/* Services Section */}
                <section id="services" className="services-section py-32 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <Link to="/services#talent-acquisition" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Talent Acquisition</h3>
                                <p className="text-gray-700 mb-4">Find and hire the best talent for your organization through our comprehensive recruitment solutions tailored to your unique needs.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>
                            <Link to="/services#health-insurance" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Insurance Strategy</h3>
                                <p className="text-gray-700 mb-4">Develop effective health insurance strategies to optimize coverage, reduce costs, and enhance employee satisfaction.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>
                            <Link to="/services#vaccination-advisory" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vaccination Program Advisory</h3>
                                <p className="text-gray-700 mb-4">Receive expert advice on vaccination programs to protect your workforce and ensure compliance with health regulations and travel requirements.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <Link to="/services#global-healthcare-partner" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Healthcare Partner
                                    Services</h3>
                                <p className="text-gray-700 mb-4">Collaborate with leading global healthcare providers to ensure seamless and high-quality healthcare solutions for your international operations.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>
                            <Link to="/services#tenant-matching" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tenant Matching</h3>
                                <p className="text-gray-700 mb-4">Connect with ideal tenants for your property through our specialized tenant matching services, ensuring a perfect fit for your rental space.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>
                            <Link to="/services#health-assessments" className="bg-gray-50 p-6 rounded-lg shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Assessment Services</h3>
                                <p className="text-gray-700 mb-4">Conduct thorough health assessments to identify potential health risks and create personalized wellness plans for improved employee health.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-600 font-bold text-lg">→</span>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

                {/*
                <section id="latestnews" className="latest-news-section py-32 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Latest Articles &
                            Updates</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-2xl flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 15, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Heaca Launches New
                                        Comprehensive Health Evaluation Program</h3>
                                    <p className="text-gray-700">Discover how our new health evaluation program is
                                        designed to boost employee well-being and productivity.</p>
                                </div>
                                <span className="text-red-600 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-2xl flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 08, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Heaca's Role in the European
                                        Health Data Space (EHDS) Initiative</h3>
                                    <p className="text-gray-700">Explore Heaca's contributions to the EHDS for seamless
                                        and secure health data sharing across Europe.</p>
                                </div>
                                <span className="text-red-600 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-2xl flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 07, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">New Innovations in Corporate
                                        Wellness Programs by Heaca</h3>
                                    <p className="text-gray-700">Learn about the latest innovations in our wellness
                                        programs aimed at enhancing employee health and reducing absenteeism.</p>
                                </div>
                                <span className="text-red-600 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-2xl flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">April 30, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Heaca Partners with Global
                                        Organizations for Better Health Policies</h3>
                                    <p className="text-gray-700">Read about our new partnerships aimed at developing and
                                        implementing effective health policies worldwide.</p>
                                </div>
                                <span className="text-red-600 font-bold text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </section>
                */}

                {/* Contact Us Section */}
                <section id="contact" className="contact-us-section py-32 section mt-40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Contact us to start your journey towards a healthier, happier, and more productive
                            workplace.
                        </p>
                        <Link to="/contact" className="inline-block">
                            <button
                                className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
