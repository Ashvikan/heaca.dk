import React from 'react';
import useScrollBackground from '../hooks/useScrollBackground';
import '../pageCss/Services.css';

const Services = () => {
    const sectionsConfig = [
        { id: 'intro', color: '#ffffff' },
        { id: 'health-policies', color: '#ffffff' },
        { id: 'health-services', color: '#ffffff' },
        { id: 'health-insurance', color: '#ffffff' },
        { id: 'health-evaluations', color: '#ffffff' },
        { id: 'business-travel-advice', color: '#ffffff' },
        { id: 'special-personnel-groups', color: '#ffffff' },
        { id: 'first-aid-training', color: '#ffffff' },
        { id: 'international-partner', color: '#ffffff' }
    ];

    useScrollBackground(sectionsConfig);

    return (
        <main>
            {/* Intro Section */}
            <section id="intro" className="hero-section py-48 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Our Comprehensive Services
                    </h1>
                    <div className="flex justify-start mb-4">
                        <span className="h-1 w-16 bg-red-500 block"></span>
                    </div>
                    <p className="text-lg text-gray-700 mb-12 max-w-2xl">
                        At Heaca, we offer a wide range of services designed to enhance employee health and well-being
                        across various sectors. Explore our services to find out how we can support your organization.
                    </p>
                </div>
                <img src="/images/Figur.png" alt="Background Figure" className="figure-overlay"/>
            </section>

            {/* Health Policies Section */}
            <section id="health-policies" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Policies</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        At Heaca, we specialize in helping companies develop and implement tailored health policies that
                        promote well-being and efficiency in the workplace. Our approach is based on a deep
                        understanding of each company's unique needs and employee well-being.
                    </p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Health Analysis: We begin by evaluating the company's current health culture and identifying
                            areas for improvement.
                        </li>
                        <li>Policy Development: Our experts tailor a health policy that fits the company's size,
                            industry, and employee profiles.
                        </li>
                        <li>Implementation: We assist in implementing and communicating the new policy to ensure high
                            participation and engagement from employees.
                        </li>
                        <li>Evaluation and Adjustment: We follow up with evaluations to measure the effectiveness of the
                            implemented measures and make adjustments as needed.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Health Services Section */}
            <section id="health-services" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health
                            Services</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Heaca offers professional advice and guidance on essential health services for businesses,
                            including health insurance and vaccination programs.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Health Insurance Guidance: We provide independent and unbiased advice on selecting the
                                best health insurance plans for your employees.
                            </li>
                            <li>Vaccinations: We offer advice on seasonal vaccines, travel vaccines, and more to ensure
                                employee health and safety.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/health-services.jpg" alt="Health Services"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Health Insurance Section */}
            <section id="health-insurance" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Insurance
                        Solutions</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Navigating the health insurance landscape in a foreign country can be complex. Heaca provides
                        independent and unbiased advice on selecting the best health insurance plans for your employees,
                        ensuring they have access to necessary medical care during their stay abroad.
                    </p>
                </div>
            </section>

            {/* Health Evaluations Section */}
            <section id="health-evaluations" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Comprehensive
                            Health Evaluations</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            We provide thorough health assessments to ensure your employees' well-being and identify
                            areas for improvement.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>General Health Evaluations</li>
                            <li>Legally Required Screenings for Night Workers</li>
                            <li>Tailored Evaluations for Individual Needs</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/health-evaluations.jpg" alt="Health Evaluations"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Business Travel and Deployment Advice Section */}
            <section id="business-travel-advice" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Business Travel and
                        Deployment Advice</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We ensure that employees are well-prepared for international assignments with thorough health
                        checks and advice on necessary vaccinations and health precautions.
                    </p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Health Examinations Before International Travel</li>
                        <li>Vaccination Guidance</li>
                    </ul>
                </div>
            </section>

            {/* Special Personnel Groups Section */}
            <section id="special-personnel-groups" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Special Personnel
                            Groups</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            We specialize in supporting and advising special personnel groups within various work
                            environments and challenges.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Support for International Employees</li>
                            <li>Night Work Health Evaluations</li>
                            <li>Programs for Physically Demanding Work</li>
                            <li>Mental Health Support for High Emotional Demands</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/special-personnel-groups.jpg" alt="Special Personnel Groups"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* First Aid Training Section */}
            <section id="first-aid-training" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">First Aid Training</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive first aid training courses ensure that your employees are equipped to handle
                        emergencies effectively, creating a safer workplace.
                    </p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Basic First Aid</li>
                        <li>CPR</li>
                        <li>Use of AEDs</li>
                    </ul>
                </div>
            </section>

            {/* International Partner Section */}
            <section id="international-partner" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Your International
                            Partner</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Heaca specializes in helping companies and organizations with international operations,
                            offering support and services that cater to employees working abroad.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Access to Emergency Medical Care</li>
                            <li>Pre-departure Health Examination</li>
                            <li>Access to Necessary Medications</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/international-partner.jpg" alt="International Partner"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
