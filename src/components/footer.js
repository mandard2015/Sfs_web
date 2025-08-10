import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 py-8 px-4 sm:px-8 shadow-inner">
            <div className='flex items-center mb-6 mx-4 sm:mx-8 md:mx-12'>
                <a><img src='/logo512.webp' className='rounded-xl h-12 m-0 pr-0' /></a>
                <h2 className="text-xl font-bold text-blue-800 ml-4">SFSHealthCare</h2>
            </div>
            <div className="container flex flex-wrap justify-between mx-auto px-4">
                <div className="w-full md:w-1/4 mb-4 md:pl-6">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Quick Links</h2>
                    <ul>
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About Us</a></li>
                        <li><a href="#team" className="hover:text-white">Our Services</a></li>
                        <li><a href="#events" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-xl font-bold text-blue-800 ml-4 mb-1">Contact Us</h2>
                    <h3 className="text-xl font-bold mt-0">Pune</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> sfshealthcarepvtltd@gmail.com</li>
                        <li className="flex items-center"><FaPhone className="mr-2" /> 7841962383</li>
                        <li className="flex items-center"><IoLocationOutline className="mr-2" />Pune</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Follow Us</h2>
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