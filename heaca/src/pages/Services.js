import React from 'react';


const Services = () => {
    return (
        <>
            <main className="bg-white">
                <section className="hero-section text-center py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            We provide a range of services designed to improve health and productivity in the workplace.
                        </p>
                        <div className="flex justify-center">
                            <span className="h-1 w-20 bg-red-500 block"></span>
                        </div>
                    </div>
                </section>

                <section className="services-section py-32 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Assessments</h3>
                                <p className="text-gray-700 mb-4">Comprehensive health assessments for employees to identify and address health risks.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Workplace Wellness Programs</h3>
                                <p className="text-gray-700 mb-4">Tailored wellness programs to promote healthy behaviors and improve overall well-being.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Education Workshops</h3>
                                <p className="text-gray-700 mb-4">Interactive workshops to educate employees on various health topics and promote a healthier lifestyle.</p>
                                <div className="flex justify-end">
                                    <span className="text-red-500 font-bold text-lg">→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Services;
