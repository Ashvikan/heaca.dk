import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="hero-section text-center py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">At the forefront of innovation</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            We specialize in IT and AI, focusing on solving complex problems with a strong commitment to
                            sustainability from start to finish. Our mission is to continuously push boundaries in
                            everything we do. We work alongside our customers to create and apply cutting-edge digital
                            solutions that tackle tough challenges and help make the world a better place.
                        </p>
                        <div className="flex justify-center">
                            <span className="h-1 w-20 bg-orange-500 block"></span>
                        </div>
                    </div>
                </section>

                {/* Curiosity Section */}
                <section className="curiosity-section py-32 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-wide">Changing the
                            world</h2>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Curiosity creates transformation</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            We hang out with thought-leaders and experts, share knowledge and insights in order to
                            identify new trends and turn them into capabilities. This is how we’ve established ourselves
                            as a true NextGen company.
                        </p>
                        <div className="flex justify-center">
                            <div className="relative">
                                <img src="/images/1.jpg" alt="Transformation"
                                     className="rounded-lg shadow-lg w-full max-w-2xl"/>
                                <img src="/images/3.jpg" alt="Secondary"
                                     className="rounded-lg shadow-lg w-32 absolute bottom-0 right-0 transform translate-x-4 translate-y-4"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-wide">Main Business
                            Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Health</h3>
                                <p className="text-gray-700 mb-4">We are committed to making life easier for patients
                                    and healthcare workers across sectors and silos.</p>
                                <div className="flex justify-end">
                                    <span className="text-orange-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">FinTech</h3>
                                <p className="text-gray-700 mb-4">Every day we help European FinTechs, like established
                                    financial institutions and start-ups, by designing and building digital products and
                                    platforms.</p>
                                <div className="flex justify-end">
                                    <span className="text-orange-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Building</h3>
                                <p className="text-gray-700 mb-4">Saving the planet is good business, and we are
                                    fighting climate change by developing solutions that lower carbon footprint and
                                    improve energy savings.</p>
                                <div className="flex justify-end">
                                    <span className="text-orange-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-12">
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Operation</h3>
                                    <p className="text-gray-700">At the heart of it, application operations is Business
                                        Continuity. We offer you secure and transparent application operations, acting
                                        as a catalyst for your business to thrive.</p>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cyber Protection</h3>
                                    <p className="text-gray-700">We lead the way in the security space, facilitated by
                                        our deep understanding of the processes and technologies behind it.</p>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Enterprise</h3>
                                    <p className="text-gray-700">We facilitate revolutionary user experiences for our
                                        enterprise customers through user-centric solutions anchored in our strategic
                                        partnerships with Apple and SAP.</p>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="latest-news-section py-32 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-wide">Latest Articles &
                            Updates</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 15, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Trifork takes over the
                                        activities of Marstrand Innovation A/S</h3>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 08, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">European Health Data Space
                                        (EHDS): A New Era for Seamless and Secure Health Data Sharing Across Europe</h3>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 mb-2">May 07, 2024</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Navigating the Future of
                                        Financial Security and Resilience</h3>
                                </div>
                                <span className="text-orange-500 font-bold text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Our Team Section */}
                <section className="join-team-section py-32 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Heaca is always on the lookout for talented professionals. Explore our career opportunities.
                        </p>
                        <button
                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">Apply
                            Now
                        </button>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="contact-us-section py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Contact us to start your journey towards a healthier, happier, and more productive
                            workplace.
                        </p>
                        <button
                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">Get
                            in Touch
                        </button>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
