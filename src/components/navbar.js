import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
        setIsOpen(false); // close menu if on mobile
    };

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (scrnclick) => {
            if (menuRef.current && !menuRef.current.contains(scrnclick.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const linkClass = "hover:text-blue-700 transition duration-300 cursor-pointer";

    return (
        <nav className="bg-gradient-to-r from-purple-200 to-blue-200 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50" ref={menuRef}>
            <div className="container mx-auto px-2 sm:px-8">
                <div className="flex justify-between items-center py-2">
                    <div onClick={scrollToTop} className='cursor-pointer flex items-center'>
                        <img src='/images/physiotherapy logo.png' className='h-16 sm:h-20' alt="SFSHealthCare logo" />
                        <div className='flex flex-col'>
                            <h1 className='text-lg sm:text-xl text-blue-900 font-bold'>SFS HEALTHCARE PVT LTD</h1>
                            <h2 className='sm:text-md text-blue-900 font-semibold'>Physiotherapy & Rehabilitation</h2>
                        </div>
                    </div>
                    <div className="hidden text-blue-900 text-lg font-bold md:flex space-x-8">
                        <ScrollLink to="home" smooth={true} duration={500} offset={-80} className={linkClass}>Home</ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className={linkClass}>About</ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500}
                            offset={-80} className={linkClass}
                            aria-label="Physiotherapy & Rehabilitation Services">Services</ScrollLink>
                        {/* <ScrollLink to="/reviews" smooth={true} duration={500} offset={-80} className="linkClass">Reviews</ScrollLink> */}
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className={linkClass}>Contact Us</ScrollLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-blue-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-blue-900 space-y-1 pb-4">
                        <ScrollLink to="home" className="font-semibold block px-4 py-1 hover:text-blue-800" onClick={closeMenu}>Home</ScrollLink>
                        <ScrollLink to="about" className="font-semibold block px-4 py-1 hover:text-blue-800" onClick={closeMenu}>About</ScrollLink>
                        <ScrollLink to="services" className="font-semibold block px-4 py-1 hover:text-blue-800" onClick={closeMenu}>Services</ScrollLink>
                        {/* <ScrollLink to="/reviews" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Reviews</ScrollLink> */}
                        <ScrollLink to="contact" className="font-semibold block px-4 py-1 hover:text-blue-800" onClick={closeMenu}>Contact Us</ScrollLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;