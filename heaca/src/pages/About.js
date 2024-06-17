import React from 'react';
import useScrollBackground from '../hooks/useScrollBackground';
import '../pageCss/Home.css';

const About = () => {
    const sectionsConfig = [
        { id: 'about-us', color: '#ffffff' },
        { id: 'our-mission', color: '#ffffff' },
        { id: 'why-choose-us', color: '#ffffff' },
        { id: 'our-approach', color: '#ffffff' },
        { id: 'contact', color: '#ffffff' },
    ];

    useScrollBackground(sectionsConfig);

    return (
        <>
            <main>
                {/* About Us Section */}
                <section id="about-us" className="hero-section py-48 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            We are Heaca
                        </h1>
                        <div className="flex justify-start mb-4">
                            <span className="h-1 w-16 bg-red-500 block"></span>
                        </div>
                        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
                            Heaca specializes in helping companies create healthier and more productive work
                            environments through tailored health-promoting solutions. We collaborate with businesses of
                            all sizes and industries, offering expert advice in the development and implementation of
                            health policies.
                        </p>
                    </div>
                    <img src="/images/Figur.png" alt="Background Figure" className="figure-overlay"/>
                </section>

                {/* Why Choose Us Section */}
                <section id="why-choose-us" className="services-section py-32 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Why Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tailored Approach</h3>
                                <p className="text-gray-700 mb-4">We believe in tailoring solutions to meet the specific
                                    needs of each company. Our experienced consultants focus on creating measurable and
                                    positive changes in corporate health culture.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Experienced Consultants</h3>
                                <p className="text-gray-700 mb-4">Our team consists of experienced consultants in health
                                    promotion and organizational development, ensuring the best advice and strategies
                                    for your company.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Result-Oriented</h3>
                                <p className="text-gray-700 mb-4">Our goal is to create measurable and positive changes
                                    in companies' health culture. We understand that health and well-being are perceived
                                    differently from company to company, and we adapt our advice and solutions
                                    accordingly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section id="mission" className="py-48 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wide">Our Mission</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Creating Healthier Workplaces</h3>
                            <p className="text-lg text-gray-700 mb-12">
                                At Heaca, we specialize in fostering healthier and more productive work environments
                                through tailored health promotion solutions. We collaborate with businesses of all sizes
                                and industries to develop and implement transformative health policies.
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                            <img src="/images/1.jpg" alt="Mission Image" className="rounded-lg shadow-lg w-full max-w-xxl" />
                        </div>
                    </div>
                </section>

                {/* Autonomy Section */}
                <section id="autonomy" className="py-48 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wide">Autonomy</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Self-managed teams ensure agility & start-up culture</h3>
                            <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Flat hierarchy:</span> Our flat hierarchy, ensured by a high degree of decision power and lack of corporate layers, is the very foundation of the way we are set-up.</p>
                            <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Self-containing:</span> Our self-containing business units ensures motivation, innovation and great independence, which also allows us to focus on multiple business areas and offerings at the same time.</p>
                            <p className="text-lg text-gray-700"><span className="font-bold">Purpose-driven:</span> The autonomous behaviour of our employees is guided by a deep sense of purpose and accountability that our customers have come to know and love about us.</p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                            <img src="/images/1.jpg" alt="Autonomy Image" className="rounded-lg shadow-lg w-full max-w-xxl" />
                        </div>
                    </div>
                </section>

                {/* Strategic Partner Section */}
                <section id="strategic-partner" className="py-48 section bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wide">Strategic Partner</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">A strategic partner like no other</h3>
                            <p className="text-lg text-gray-700 mb-12">
                                We inspire and teach customers and colleagues about new technological possibilities, build innovative software solutions and operate and maintain these for our customers. Since our founding in 1996, we have been motivated by pushing the boundaries of how new technologies and methods can be discovered, applied and developed into novel solutions that enable our customers to become industry leaders.
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                            <img src="/images/1.jpg" alt="Strategic Partner Image" className="rounded-lg shadow-lg w-full max-w-xxl" />
                        </div>
                    </div>
                </section>


                {/* Our Approach Section */}
                <section id="our-approach" className="latest-news-section py-32 section">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wide">Our Approach</h2>
                        <p className="text-lg text-gray-700 mb-6 max-w-4xl">
                            Heaca's approach is based on a deep understanding of each company's unique needs and
                            employee well-being. We offer health assessments, policy development, implementation of
                            health programs, and advice on selecting health insurance and vaccination plans. Our goal is
                            to create a healthier, happier, and more productive workplace by providing targeted
                            strategies that work in practice.
                        </p>
                    </div>
                </section>


            </main>
        </>
    );
};

export default About;
