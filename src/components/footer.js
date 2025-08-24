import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    const linkClass = "hover:text-blue-700 transition duration-300 cursor-pointer";

    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
        setIsOpen(false); // close menu if on mobile
    };

    return (
        <footer id="contact" className="bg-gradient-to-r from-purple-200 to-blue-200 text-gray-800 py-8 px-4 sm:px-8 shadow-inner">
            <div className='flex items-center pb-3 mx-4 border-b-2'>
                <img src='/images/physiotherapy logo.png' className='h-16' alt="SFSHealthCare logo" />
                <div onClick={scrollToTop} className='cursor-pointer flex flex-col'>
                    <h1 className='text-lg  sm:text-xl gradient-text font-bold'>SFS HEALTHCARE PVT LTD</h1>
                    <h2 className='sm:text-md text-blue-900 font-semibold'>Physiotherapy & Rehabilitation</h2>
                </div>
            </div>
            <div className="container flex flex-wrap justify-between mx-auto pt-2 px-4">
                <div className="w-full flex flex-col text-blue-900 text-md font-bold md:w-1/4 mb-4 md:pl-6">
                    <h2 className="text-xl mb-2">Quick Links</h2>
                    <ScrollLink to="home" smooth={true} duration={500} offset={-80} className={linkClass}>Home</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} offset={-80} className={linkClass}>About</ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500}
                        offset={-80} className={linkClass}
                        aria-label="Physiotherapy & Rehabilitation Services">Services</ScrollLink>
                    {/* <ScrollLink to="/reviews" smooth={true} duration={500} offset={-80} className="linkClass">Reviews</ScrollLink> */}
                    <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className={linkClass}>Contact Us</ScrollLink>
                </div>
                <div className="w-full text-blue-900 md:w-1/3 mb-4">
                    <h2 className="text-xl font-bold mb-1">Contact Us</h2>
                    <h3 className="text-md font-bold">Across Pune & PCMC</h3>
                    <ul className="space-y-1">
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> sfshealthcarepvtltd@gmail.com</li>
                        <li className="flex items-center"><FaPhone className="mr-2" /> 7841962383 / 9975287669</li>
                        <li className="flex items-center"><IoLocationOutline className="mr-2" />Pune</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" className="hover:text-blue-800"><FaFacebook size={30} /></a>
                        <a href="sfshealthcarepvtltd@gmail.com " className="hover:text-white"><FaEnvelope size={30} /></a>
                        <a href="https://www.instagram.com/" className="hover:text-fuchsia-700"><FaInstagram size={30} /></a>
                        <a href="https://wa.me/7841962383?text=Hii%2C%20can%20I%20get%20more%20info%20about%20"
                            className="hover:text-green-600"><FaWhatsapp size={30} /></a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-500">
                &copy; {new Date().getFullYear()} SFSHealthCare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;