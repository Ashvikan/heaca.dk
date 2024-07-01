import React from 'react';
import '../pageCss/International.css';
import useScrollBackground from '../hooks/useScrollBackground';

const sectionsConfig = [
    { id: 'about-us', color: '#ffffff' },
    { id: 'health-support', color: '#FBEEF1' },
    { id: 'health-insurance', color: '#ffffff' },
    { id: 'international-support', color: '#ffffff' },
    { id: 'why-choose-us', color: '#FBEEF1' },
    { id: 'contact', color: '#ffffff' },
];

const International = () => {
    useScrollBackground(sectionsConfig);

    return (
        <main>
            {/* Section 1 */}
            <section id="about-us" className="hero-section py-48 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        International Expertise and Services
                    </h1>
                    <div className="flex justify-start mb-4">
                        <span className="h-1 w-16 bg-red-500 block"></span>
                    </div>
                    <p className="text-lg text-gray-700 mb-12 max-w-2xl">
                        At Heaca, we offer unparalleled expertise and tailored health solutions for companies with
                        international operations. Our deep understanding of both the public and private healthcare
                        sectors in Denmark allows us to provide comprehensive support to businesses and their
                        employees, whether they are traveling or relocating abroad.
                    </p>
                </div>
                <img src="/images/Figur.png" alt="Background Figure" className="figure-overlay"/>
            </section>



            {/* Section 2 */}
            <section className="international-section mt-16 py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Support for
                            International Employees</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Customized Health Examinations</strong>: We conduct thorough health examinations for
                            employees before their international assignments to ensure they are physically and mentally
                            prepared for the challenges abroad. This includes advice on necessary vaccinations and
                            disease prevention.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Travel Health Advisory</strong>:
                            <ul className="list-disc ml-6">
                                <li>Vaccination Guidance: We advise companies on essential vaccinations for their
                                    employees, including seasonal vaccines and travel-specific immunizations.
                                </li>
                                <li>Health Risk Management: Our health risk assessments help in identifying potential
                                    health threats and preparing strategies to mitigate them.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-end">
                        <img src="/images/1.jpg" alt="Health Support"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="international-section mt-16 py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Comprehensive Health
                            Insurance Solutions</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Health Insurance Guidance</strong>: Navigating the health insurance landscape in a
                            foreign country can be complex. Heaca provides independent and unbiased advice on selecting
                            the best health insurance plans for your employees, ensuring they have access to necessary
                            medical care during their stay abroad.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-end">
                        <img src="/images/1.jpg" alt="Health Insurance"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="international-section mt-16 py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Support During
                            International Assignments</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Emergency Medical Access</strong>: We ensure that employees have access to emergency
                            medical care during their international assignments. Our services include:
                            <ul className="list-disc ml-6">
                                <li>Access to necessary medications for acute or chronic conditions.</li>
                                <li>24/7 telephone and online hotlines for health inquiries.</li>
                            </ul>
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Continued Health Support</strong>: We offer ongoing health support and early medical
                            intervention when needed, ensuring that employees receive the best possible care throughout
                            their international assignments.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-end">
                        <img src="/images/1.jpg" alt="International Support"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section className="international-section mt-16 py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold text-red-600 mb-4 uppercase tracking-wide">Why Choose
                            Heaca?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Expertise and Dedication</strong>: With decades of experience in Denmark's
                            healthcare sector, Heaca is dedicated to providing top-notch health services to companies
                            and their international employees. Our team prioritizes safety, efficiency, and tailored
                            solutions to meet the unique needs of each client.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Integrated Health Solutions</strong>: We deliver integrated health solutions by
                            collaborating with a network of leading health experts to achieve better, faster, and more
                            sustainable results for our clients.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Unique Collaborative Culture</strong>: Our unique team brings fresh perspectives,
                            mutual trust, and energy to every client relationship, making us a preferred partner for
                            companies looking to ensure the health and well-being of their international workforce.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-end">
                        <img src="/images/1.jpg" alt="Why Choose Heaca"
                             className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="contact-us-section mt-16 py-32 section text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        To learn more about how Heaca can support your company's international operations and ensure the
                        health and safety of your employees abroad, contact us today. Our team is ready to provide
                        comprehensive health solutions tailored to your specific needs.
                    </p>
                    <button onClick={() => window.location.href = '/contact'}
                            className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">Get in
                        Touch
                    </button>
                </div>
            </section>
        </main>
    );
};

export default International;
