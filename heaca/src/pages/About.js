import React from 'react';

const About = () => {
    return (
        <div className="bg-white">
            <section className="hero-section py-32 bg-gray-50 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                    <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                        Welcome to Heaca! We are dedicated to helping companies create healthier and more productive work environments through tailored health-promoting solutions.
                    </p>
                </div>
            </section>

            <section className="company-overview py-32 bg-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
                    <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                        Heaca has been a pioneer in workplace health and wellness for over a decade. We collaborate with businesses of all sizes and industries to develop and implement effective health policies.
                    </p>
                </div>
            </section>

            <section className="mission-values py-32 bg-gray-50 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
                    <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                        Our mission is to promote health and well-being in the workplace. We believe in the power of preventive health measures, comprehensive health evaluations, and tailored health programs to improve employee productivity and satisfaction.
                    </p>
                    <div className="flex flex-col md:flex-row justify-around">
                        <div className="max-w-xs mb-8 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                            <p className="text-gray-700">We uphold the highest standards of integrity in all our actions.</p>
                        </div>
                        <div className="max-w-xs mb-8 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-700">We continuously seek innovative ways to improve workplace health.</p>
                        </div>
                        <div className="max-w-xs mb-8 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                            <p className="text-gray-700">We are committed to excellence in everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline py-32 bg-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-full bg-gray-200"></div>
                        </div>
                        <div className="relative z-10 flex flex-col items-start">
                            <div className="mb-8 w-full max-w-md mx-auto flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full"></div>
                                <div className="ml-4 flex-grow bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900">2010</h3>
                                    <p className="text-gray-700">Founded Heaca with a mission to improve workplace health.</p>
                                </div>
                            </div>
                            <div className="mb-8 w-full max-w-md mx-auto flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full"></div>
                                <div className="ml-4 flex-grow bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900">2015</h3>
                                    <p className="text-gray-700">Expanded services to include comprehensive health evaluations.</p>
                                </div>
                            </div>
                            <div className="mb-8 w-full max-w-md mx-auto flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full"></div>
                                <div className="ml-4 flex-grow bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900">2020</h3>
                                    <p className="text-gray-700">Launched new health-promoting solutions for remote workforces.</p>
                                </div>
                            </div>
                            <div className="mb-8 w-full max-w-md mx-auto flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full"></div>
                                <div className="ml-4 flex-grow bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900">2023</h3>
                                    <p className="text-gray-700">Recognized as a leading provider of workplace health solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
