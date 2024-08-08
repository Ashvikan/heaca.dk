import React from 'react';
import useScrollBackground from '../hooks/useScrollBackground';
import '../pageCss/Services.css';

const Services = () => {
    const sectionsConfig = [
        { id: 'intro', color: '#ffffff' },
        { id: 'health-insurance', color: '#FBEEF1' },
        { id: 'vaccination-advisory', color: '#ffffff' },
        { id: 'health-assessments', color: '#ffffff' },
        { id: 'international-health-readiness', color: '#ffffff' },
        { id: 'global-healthcare-partner', color: '#FBEEF1' },
        { id: 'talent-acquisition', color: '#ffffff' },
        { id: 'tenant-matching', color: '#ffffff' }
    ];

    useScrollBackground(sectionsConfig);

    return (
        <main>
            {/* Intro Section */}
            <section id="intro" className="hero-section py-48 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Services
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

            {/* Talent Acquisition Section */}
            <section id="talent-acquisition" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Talent Acquisition</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            At Heaca, we understand that your organization's success hinges on the talent that drives it. Our Talent Acquisition services are designed to help you find, attract, and retain the best talent in the industry, ensuring your team is equipped to meet today's challenges and tomorrow's opportunities.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Our Approach:</strong><br/>
                            <strong>Strategic Recruitment:</strong> We go beyond filling positions; we partner with you to understand your business goals, culture, and specific needs. This strategic approach ensures we attract candidates who are not only highly skilled but also a perfect fit for your organization.<br/>
                            <strong>Comprehensive Sourcing:</strong> Utilizing a blend of cutting-edge technology and traditional recruitment methods, we source candidates from a wide range of platforms. Our extensive network and innovative sourcing strategies guarantee access to both active and passive talent pools.<br/>
                            <strong>Rigorous Screening:</strong> Our meticulous screening process involves detailed interviews, skill assessments, and cultural fit evaluations. We ensure that every candidate presented to you meets the highest standards of excellence and aligns with your company's values.<br/>
                            <strong>Employer Branding:</strong> We assist in crafting a compelling employer brand that attracts top talent. From creating engaging job postings to showcasing your company culture, we ensure your brand stands out in the competitive job market.<br/>
                            <strong>Candidate Experience:</strong> We prioritize a positive candidate experience, recognizing that every interaction reflects your brand. Our seamless recruitment process keeps candidates informed and engaged, fostering a positive impression from the first contact to the final offer.<br/>
                            <strong>Data-Driven Insights:</strong> Leveraging data analytics, we provide valuable insights into talent trends, market conditions, and recruitment performance. These insights enable us to continuously refine our strategies and deliver the best results for your organization.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca for Talent Acquisition?</strong><br/>
                            <strong>Industry Expertise:</strong> Our team of seasoned recruiters has deep industry knowledge and experience, enabling us to identify and attract top-tier talent effectively.<br/>
                            <strong>Customized Solutions:</strong> We tailor our talent acquisition strategies to meet your unique needs, ensuring a personalized approach for optimal results.<br/>
                            <strong>Commitment to Excellence:</strong> We are dedicated to excellence in every aspect of our service, from initial consultation to final placement and beyond.<br/>
                            <strong>Proven Track Record:</strong> Our successful placements and long-term client relationships speak to our ability to deliver exceptional talent acquisition services.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Partner with Heaca and let us help you build a team that propels your business forward. Contact us today to learn more about our Talent Acquisition services and how we can support your organization's growth.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src={`${process.env.PUBLIC_URL}/images/TalentAcquisition1.jpg`} alt="Talent Acquisition"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/TalentAcquisition2.jpg`} alt="Talent Acquisition"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Health Insurance Section */}
            <section id="health-insurance" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Insurance Strategy</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Navigating the complex health insurance landscape can be a daunting task for both companies and international employees. At Heaca, we offer independent, data-driven guidance to help businesses and expatriates in Denmark find the optimal health insurance solutions tailored to their specific needs.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>For Companies:</strong><br/>
                            We understand that providing comprehensive health insurance coverage is crucial for employee satisfaction and retention. Our expert consultants work closely with your organization to analyze and develop customized health insurance strategies that align with your business objectives. By leveraging our deep knowledge of the Danish healthcare market, we ensure your workforce is well-protected and your healthcare investments are optimized. Our approach not only reduces absenteeism but also boosts overall productivity by promoting a healthier work environment.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>For International Employees:</strong><br/>
                            Relocating to a new country comes with numerous challenges, and securing adequate health insurance should not be one of them. Heaca specializes in assisting international employees in Denmark with finding the best health insurance plans to cover their medical needs. With 2.7 million individuals in Denmark holding health insurance in 2022, we ensure that expatriates are well-informed and have access to the necessary healthcare services. Our personalized advice helps you navigate the Danish healthcare system with confidence, ensuring comprehensive coverage and peace of mind.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca:</strong><br/>
                            <strong>Independent Expertise:</strong> We provide unbiased, data-driven advice tailored to your unique needs.<br/>
                            <strong>Comprehensive Analysis:</strong> Our thorough market analysis ensures you get the best value and coverage.<br/>
                            <strong>Employee Well-being:</strong> We prioritize the health and productivity of your workforce, aligning with your business goals.<br/>
                            <strong>Global Perspective:</strong> Our experience with international clients helps us cater to the specific needs of expatriates.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Trust Heaca to guide you through the intricacies of health insurance in Denmark, ensuring optimal solutions for both your business and your international employees.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-start">
                        <img src={`${process.env.PUBLIC_URL}/images/HealthInsurance1.jpg`} alt="Health Insurance Strategy"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/HealthInsurance2.jpg`} alt="Health Insurance Strategy"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Global Healthcare Partner Section */}
            <section id="global-healthcare-partner" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Global Healthcare Partner Services</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            In an increasingly interconnected world, ensuring seamless and high-quality healthcare for your international operations is crucial. At Heaca, we specialize in collaborating with leading global healthcare providers to offer comprehensive support for your multinational workforce. Our Global Healthcare Partner Services are designed to meet the diverse health needs of employees traveling to or relocating in Denmark, as well as those working abroad.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Comprehensive Healthcare Solutions:</strong><br/>
                            Heaca partners with top-tier healthcare providers to deliver a full spectrum of medical services tailored to your international operations. From pre-deployment health checkups to medical assistance arrangements and access to necessary medications, we ensure your employees receive the care they need, wherever they are. Our services include:<br/>
                            <strong>Pre-Deployment Health Checkups:</strong> Thorough health assessments to ensure employees are fit for international assignments.<br/>
                            <strong>Medical Assistance Arrangements:</strong> Coordination of medical services, including appointments, emergency care, and ongoing treatment.<br/>
                            <strong>Access to Medications:</strong> Ensuring employees have access to required medications, even when working abroad.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Seamless Integration and Support:</strong><br/>
                            Our global healthcare solutions are designed to integrate seamlessly with your existing health and wellness programs. We provide continuous support, from initial planning and implementation to ongoing management and follow-up. Our goal is to create a streamlined process that reduces administrative burden and ensures a consistent standard of care across all locations.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca:</strong><br/>
                            <strong>Expert Collaboration:</strong> We work with leading global healthcare providers to deliver high-quality medical services.<br/>
                            <strong>Tailored Solutions:</strong> Our healthcare strategies are customized to meet the specific needs of your international operations.<br/>
                            <strong>Employee Well-being:</strong> We prioritize the health and safety of your workforce, enhancing their well-being and productivity.<br/>
                            <strong>Global Reach:</strong> Our extensive network and experience in international health enable us to provide reliable healthcare support worldwide.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Enhanced Employee Experience:</strong><br/>
                            By partnering with Heaca, you can ensure your employees have access to the best healthcare services, enhancing their overall experience and satisfaction. Our global healthcare solutions help you attract and retain top talent, reduce absenteeism, and maintain workforce continuity.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Trust Heaca to be your Global Healthcare Partner. With our expertise and extensive network, we deliver seamless and high-quality healthcare solutions that support your international operations and contribute to the success of your business.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src={`${process.env.PUBLIC_URL}/images/GlobalHealthcare1.jpg`} alt="Global Healthcare Partner Services"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/GlobalHealthcare2.jpg`} alt="Global Healthcare Partner Services"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Tenant Matching Section */}
            <section id="tenant-matching" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Tenant Matching Services</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Finding the right tenants for your healthcare property is crucial for maximizing its value and ensuring a harmonious, productive environment. At Heaca, our specialized Tenant Matching Services connect you with ideal tenants, ensuring a perfect fit for your rental space.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Expert Tenant Matching:</strong><br/>
                            With our deep understanding of the healthcare sector and comprehensive market analysis, we identify and connect property owners with reputable and reliable tenants. Whether you own a clinic, private hospital, or any other healthcare facility, we ensure that the tenants we match are well-suited to your property and business objectives.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Our Approach:</strong><br/>
                            <strong>Market Analysis:</strong> We conduct thorough market research to understand the specific needs and trends within the healthcare industry, ensuring we attract the right tenants for your property.<br/>
                            <strong>Tenant Screening:</strong> Our rigorous screening process evaluates potential tenants based on their reputation, reliability, and suitability for your space. This includes assessing their financial stability, operational needs, and alignment with your property’s offerings.<br/>
                            <strong>Tailored Matching:</strong> We consider your specific requirements and preferences, providing personalized tenant recommendations that align with your goals. Our aim is to create long-term, mutually beneficial partnerships.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca:</strong><br/>
                            <strong>Industry Expertise:</strong> With extensive experience in the healthcare sector, we understand the unique requirements of healthcare properties and tenants.<br/>
                            <strong>Comprehensive Service:</strong> From initial consultation to lease finalization, we offer end-to-end support to ensure a smooth and efficient tenant matching process.<br/>
                            <strong>Quality Tenants:</strong> Our meticulous screening and selection process guarantees that you connect with high-quality, reliable tenants who will respect and enhance your property.<br/>
                            <strong>Maximized Value:</strong> By securing the ideal tenants, we help you maximize the value and potential of your healthcare property.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Seamless Process:</strong><br/>
                            Heaca’s Tenant Matching Services are designed to take the hassle out of finding the right tenants. We handle every aspect of the process, from market research and tenant screening to negotiations and lease agreements, allowing you to focus on your core business.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Trust Heaca to connect you with the perfect tenants for your healthcare property. With our specialized tenant matching services, we ensure a seamless, successful rental experience that aligns with your business objectives.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pr-12 flex justify-center lg:justify-start">
                        <img src={`${process.env.PUBLIC_URL}/images/TenantMatching1.jpg`} alt="Tenant Matching Services"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/TenantMatching2.jpg`} alt="Tenant Matching Services"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Health Assessment Services Section */}
            <section id="health-assessments" className="service-section py-32 section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Health Assessment Services</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ensuring the health and well-being of your employees is crucial for maintaining a productive and engaged workforce. At Heaca, we provide comprehensive Health Assessment Services to identify potential health risks and create personalized wellness plans that promote improved employee health and overall productivity.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Comprehensive Health Assessments:</strong><br/>
                            Our thorough health assessments are designed to give you a clear understanding of your employees’ health status. We offer a range of services, including:<br/>
                            <strong>General Health Checkups:</strong> Routine health evaluations to monitor and maintain overall well-being.<br/>
                            <strong>Legally Mandated Screenings:</strong> Compliance with regulations by conducting required health screenings, such as those for night shift workers.<br/>
                            <strong>Tailored Assessments:</strong> Customized health evaluations targeting specific conditions or health concerns relevant to your workforce.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Personalized Wellness Plans:</strong><br/>
                            Based on the results of our health assessments, we develop personalized wellness plans tailored to the unique needs of each employee. These plans aim to manage and mitigate identified health risks, encouraging healthier lifestyles and enhancing overall well-being.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca:</strong><br/>
                            <strong>Expertise:</strong> Our team of healthcare professionals brings extensive knowledge and experience to every health assessment.<br/>
                            <strong>Comprehensive Approach:</strong> We offer a holistic view of employee health, covering both general wellness and specific health concerns.<br/>
                            <strong>Personalized Care:</strong> We create tailored wellness plans that address individual health risks and promote long-term health improvements.<br/>
                            <strong>Enhanced Productivity:</strong> By identifying and managing health risks early, we help reduce absenteeism and boost employee productivity.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Our Process:</strong><br/>
                            <strong>Initial Consultation:</strong> We begin with a detailed consultation to understand your organization’s health needs and objectives.<br/>
                            <strong>Thorough Assessments:</strong> Our healthcare professionals conduct comprehensive health evaluations using the latest medical technologies and methodologies.<br/>
                            <strong>Detailed Reports:</strong> We provide detailed reports outlining assessment findings and recommended wellness plans for each employee.<br/>
                            <strong>Ongoing Support:</strong> We offer continuous support and follow-up to ensure the effective implementation of wellness plans and to track progress.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Invest in the health of your workforce with Heaca’s Health Assessment Services. By identifying potential health risks and creating personalized wellness plans, we help you foster a healthier, more productive work environment.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src={`${process.env.PUBLIC_URL}/images/HealthAssessments1.jpg`} alt="Health Assessment Services"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/HealthAssessments2.jpg`} alt="Health Assessment Services"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* Vaccination Advisory Section */}
            <section id="vaccination-advisory" className="service-section py-32 section bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-red-600 mb-4 uppercase tracking-wide">Vaccination Program Advisory</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            In today's globalized business environment, safeguarding the health of your employees, particularly those who travel internationally, is paramount. At Heaca, we offer expert Vaccination Program Advisory services to ensure your workforce remains healthy, productive, and protected against preventable diseases.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Comprehensive Vaccination Guidance:</strong><br/>
                            Our team of healthcare experts provides tailored advice on essential vaccinations, including those for seasonal influenza, COVID-19, and travel-related vaccines. We stay up-to-date with the latest guidelines and recommendations from leading health authorities to offer you the most accurate and relevant information. Whether your employees are traveling for business or relocating to another country, we help you navigate the complexities of vaccination requirements and schedules.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Travel-Specific Vaccination Programs:</strong><br/>
                            Employees traveling to different countries face unique health risks. Heaca’s specialized advisory services focus on identifying and addressing these risks through customized vaccination programs. We assess the destinations, travel duration, and specific activities of your employees to recommend appropriate vaccinations, ensuring they are well-prepared and protected. This proactive approach not only prevents illness but also reduces healthcare costs and minimizes disruption to your business operations.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Why Choose Heaca:</strong><br/>
                            <strong>Expert Advisory:</strong> Our healthcare professionals provide impartial and evidence-based vaccination advice tailored to your business needs.<br/>
                            <strong>Cost-Effective Solutions:</strong> We help you optimize healthcare spending by focusing on preventive measures that keep your workforce healthy.<br/>
                            <strong>Employee Health and Productivity:</strong> By ensuring your employees are protected against infectious diseases, we enhance their well-being and productivity.<br/>
                            <strong>Global Reach:</strong> With our extensive experience in international health, we cater to the unique vaccination needs of employees traveling worldwide.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Implementation and Support:</strong><br/>
                            Heaca assists you in implementing effective vaccination programs within your organization. We provide ongoing support, from initial consultations and program design to monitoring and follow-up. Our goal is to create a seamless process that integrates vaccination planning into your overall health and wellness strategy.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Protect your employees with Heaca’s expert Vaccination Program Advisory. Ensure their health and safety, whether they are at home or abroad, and keep your business running smoothly.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                        <img src={`${process.env.PUBLIC_URL}/images/VaccinationAdvisory1.jpg`} alt="Vaccination Program Advisory"
                             className="rounded-lg shadow-2xl w-full max-w-md mb-4"/>
                        <img src={`${process.env.PUBLIC_URL}/images/VaccinationAdvisory2.jpg`} alt="Vaccination Program Advisory"
                             className="rounded-lg shadow-2xl w-full max-w-md"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
