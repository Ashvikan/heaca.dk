import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setIsAtTop(currentScrollY === 0);
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
        <header className={`bg-white font-sans fixed w-full z-50 transition-transform duration-300 ${isAtTop ? 'shadow-none border-none' : 'shadow-md border-b'} ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20"> {/* Increased height from h-16 to h-20 */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img className="h-16 w-auto" src="/HeacaLego.png" alt="Heaca Logo" /> {/* Logo height can remain as is or be adjusted */}
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
