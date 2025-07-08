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
        <nav className="bg-gradient-to-r from-black via-blue-900 to-blue-700 shadow-lg fixed left-0 w-full z-50 px-2" ref={menuRef}>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center py-2">
                    <div className='flex items-center'>
                        <img src='/images/SFS academy logo.png' className='h-20 m-0 p-0' alt="SFSAcademy logo" />
                    </div>
                    <div className="hidden text-white text-lg md:flex space-x-8">
                        <Link to="/" className="font-bold hover:text-gray-800 ">Home</Link>
                        <Link to="/about" className="font-bold hover:text-gray-800">Course</Link>
                        <Link to="/resources" className="font-bold hover:text-gray-800">Resources</Link>
                        {/* <Link to="/reviews" className="font-bold hover:text-gray-800">Reviews</Link> */}
                        <Link to="/signin" className="font-bold hover:text-gray-800 cursor-pointer">Sign in</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-white">
                        <Link to="/" className="font-semibold block px-4 py-1 hover:text-gray-800" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="font-semibold block px-4 py-1 hover:text-gray-800" onClick={closeMenu}>Course</Link>
                        <Link to="/resources" className="font-semibold block px-4 py-1 hover:text-gray-800" onClick={closeMenu}>Resources</Link>
                        {/* <Link to="/reviews" className="font-semibold block px-4 py-1 hover:text-gray-800" onClick={closeMenu}>Reviews</Link> */}
                        <Link to="/signin" className="font-semibold block px-4 py-1 hover:text-gray-800" onClick={closeMenu}>Sign in</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;