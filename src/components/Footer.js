import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer bg-custom-footer text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <img className="site-logo" src="/HeacaLego.png" alt="Heaca Logo" />
                        <h2 className="text-2xl font-bold mt-4">Let’s change the company together</h2>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-lg font-bold">Contact</h3>
                        <p>Feel free to contact us at <a href="mailto:info@heaca.com" className="text-red-600">info@heaca.com</a> or use our <a href="/contact" className="text-red-600">contact form</a></p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-lg font-bold">Wanna join the team?</h3>
                        <p>Check out our <a href="/careers" className="text-red-600">career opportunities</a> and be part of our mission.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
