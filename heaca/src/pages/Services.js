import React from 'react';
import useScrollBackground from '../hooks/useScrollBackground';
import '../pageCss/Services.css';

const Services = () => {
    const sectionsConfig = [
        { id: 'intro', color: '#ffffff' },
        { id: 'health-insurance', color: '#ffffff' },
        { id: 'vaccination-advisory', color: '#ffffff' },
        { id: 'health-assessments', color: '#ffffff' },
        { id: 'international-health-readiness', color: '#ffffff' },
        { id: 'global-healthcare-partner', color: '#ffffff' },
        { id: 'talent-acquisition', color: '#ffffff' },
        { id: 'tenant-matching', color: '#ffffff' }
    ];

    useScrollBackground(sectionsConfig);

    return (
        <main>
            {/* Intro Section */}
            <section id="intro" className="hero-section py-48 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-normal text-gray-900 mb-6">
                        Property Services
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

            {/* Health Insurance Section */}
            <section id="health-insurance" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Insurance Strategy</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Navigating the complex health insurance market can be challenging. Heaca provides independent, data-driven guidance to help companies find the optimal health insurance solutions for their employees. In Denmark, where 2.7 million individuals had health insurance in 2022, our expertise ensures your workforce is comprehensively covered.
                    </p>
                </div>
            </section>

            {/* Vaccination Advisory Section */}
            <section id="vaccination-advisory" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Vaccination Program Advisory</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Protect your employees with our expert guidance on essential vaccinations. From seasonal influenza and COVID-19 to travel-related vaccines, we ensure your workforce remains healthy and productive. Our impartial advice focuses on your best interests, minimizing healthcare costs and preventing illnesses.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/vaccination-advisory.jpg" alt="Vaccination Advisory" className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Health Assessments Section */}
            <section id="health-assessments" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Comprehensive Health Assessments</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Promote employee well-being with our thorough health assessments. We offer general health checkups, legally mandated screenings for night shift workers, and tailored assessments for specific conditions. Our goal is to identify and manage health risks effectively, enhancing overall productivity and health outcomes.
                    </p>
                </div>
            </section>

            {/* International Health Readiness Section */}
            <section id="international-health-readiness" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">International Assignment Health Readiness</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ensure your employees are prepared for the health challenges of international assignments. Heaca provides pre-trip health assessments, vaccination guidance, and logistical support, minimizing health risks and ensuring readiness for global work.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/international-health-readiness.jpg" alt="International Health Readiness" className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Global Healthcare Partner Section */}
            <section id="global-healthcare-partner" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Global Healthcare Partner Services</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Supporting multinational corporations and growing enterprises, Heaca offers comprehensive healthcare support for employees traveling to or relocating to Denmark. Our services include medical assistance arrangements, pre-deployment health checkups, and ensuring access to necessary medications.
                    </p>
                </div>
            </section>

            {/* Talent Acquisition Section */}
            <section id="talent-acquisition" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Talent Acquisition for Healthcare Professionals</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Heaca specializes in recruiting top-tier healthcare professionals for clinics and private hospitals. Our expert screening and assessment process ensures that you hire the right talent, enhancing the quality of care provided by your facility.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src="/images/talent-acquisition.jpg" alt="Talent Acquisition" className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Tenant Matching Section */}
            <section id="tenant-matching" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Tenant Matching for Healthcare Facilities</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Maximize the value of your healthcare property with our tenant matching services. We connect property owners with reputable and reliable tenants in the healthcare sector, backed by comprehensive market analysis.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Services;
