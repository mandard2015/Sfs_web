// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (scrnclick) => {
            if (menuRef.current && !menuRef.current.contains(scrnclick.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-blue-50/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 px-2" ref={menuRef}>
            {/* bg-gradient-to-br from-blue-900 via-blue-500 to-green-500 */}
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center py-2">
                    <div className='flex items-center'>
                        <img src='/images/SFS healthcare logo.png' className='h-16 m-0 p-0' alt="SFSHealthCare logo" />
                    </div>
                    <div className="hidden text-blue-900 text-lg font-bold md:flex space-x-8">
                        <Link to="/" className="hover:text-blue-800 transition duration-300 ">Home</Link>
                        <Link to="/about" className="hover:text-blue-800 transition duration-300">About</Link>
                        <Link to="#services" className="hover:text-blue-800 transition duration-300">Services</Link>
                        {/* <Link to="/reviews" className="hover:text-blue-800 transition duration-300">Reviews</Link> */}
                        <Link to="/contact" className="hover:text-blue-800 transition duration-300 cursor-pointer">Contact Us</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-blue-800 transition duration-300 focus:outline-none">
                            <svg className="w-6 h-6 hover:text-blue-800 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-blue-900">
                        <Link to="/" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Course</Link>
                        <Link to="/services" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Resources</Link>
                        {/* <Link to="/reviews" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Reviews</Link> */}
                        <Link to="/signin" className="font-semibold block px-4 py-1 hover:text-blue-800 transition duration-300" onClick={closeMenu}>Sign in</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;