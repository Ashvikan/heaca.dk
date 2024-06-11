import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`bg-white font-sans fixed w-full z-50 transition-transform duration-300 ${isAtTop ? 'shadow-none border-none' : 'shadow-md border-b'} ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img className="h-16 w-auto" src="/HeacaLego.png" alt="Heaca Logo" />
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
                    <Link to="/international" className="text-gray-700 hover:text-gray-900">
                        International
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                        Contact
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center h-full w-full">
                    <div className="absolute top-4 right-4">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="space-y-8 text-center">
                        <Link to="/" className="text-2xl text-gray-900 hover:text-gray-700" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/about" className="text-2xl text-gray-900 hover:text-gray-700" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link to="/services" className="text-2xl text-gray-900 hover:text-gray-700" onClick={toggleMenu}>
                            Services
                        </Link>
                        <Link to="/international" className="text-2xl text-gray-900 hover:text-gray-700" onClick={toggleMenu}>
                            International
                        </Link>
                        <Link to="/contact" className="text-2xl text-gray-900 hover:text-gray-700" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
