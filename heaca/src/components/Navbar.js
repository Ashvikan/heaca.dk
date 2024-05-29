import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            if (currentScrollY === 0) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(lastScrollY > currentScrollY);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-white shadow-md font-sans fixed w-full z-50 transition-transform duration-300 ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img className="h-8 w-auto" src="/logo.svg" alt="Heaca Logo" />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-700 hover:text-gray-900">
                        About
                    </Link>
                    <Link to="/services" className="text-gray-700 hover:text-gray-900">
                        Services
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                        Contact
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
