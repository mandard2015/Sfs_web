import React, { useState, useEffect } from "react";
import { FaHome, FaHandsHelping, FaStethoscope, FaPhone, FaUserNurse } from "react-icons/fa";

const whyChooseData = [
    {
        icon: FaHome,
        title: "Home Physiotherapy Visits",
        desc: "Avoid travel stress with professional physiotherapy at your home, saving time and energy.",
    },
    {
        icon: FaStethoscope,
        title: "Personalized Treatment Plans",
        desc: "Each recovery program is designed with thorough assessment, ensuring faster and safer recovery.",
    },
    {
        icon: FaHandsHelping,
        title: "Rehabilitation & Post-Surgery Care",
        desc: "Guided rehabilitation to help you regain strength and mobility after injury or surgery.",
    },
    {
        icon: FaUserNurse,
        title: "Advanced Therapy Techniques",
        desc: "We use evidence-based and modern physiotherapy methods for the best results.",
    },
];

export default function Home() {
    const images = [
        { image: "/images/physio1.webp", alttext: "Physiotherapist providing home care in Hinjewadi" },
        { image: "/images/physio2.webp", alttext: "Physiotherapist providing home care in Baner" },
        { image: "/images/physio3.webp", alttext: "Physiotherapist providing home care in Pimple Saudagar" },
        { image: "/images/physio4.webp", alttext: "Physiotherapist providing home care in Nigdi" },
        { image: "/images/pexels1.webp", alttext: "Physiotherapist providing home care in Pradhikaran" },
        { image: "/images/og-physiotherapy-home.webp", alttext: "Physiotherapist providing home care in Ravet" },
        { image: "/images/pexels3.webp", alttext: "Physiotherapist providing home care in Dehuroad" },
        { image: "/images/pexels4.webp", alttext: "Physiotherapist providing home care in PCMC" },
        { image: "/images/pexels5.webp", alttext: "Physiotherapist providing home care in Wakad" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id="home" className="mt-24 scroll-mt-24 min-h-screen px-4 sm:px-8 md:px-16 sm:pt-10">
            {/* Hero Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="sm:w-1/2 sm:pr-10">
                    <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">
                        SFS Healthcare - Physiotherapy & Rehabilitation at Home
                    </h1>
                    <p className="mt-4 text-md sm:text-xl pb-2 sm:my-8">
                        <strong>SFS HealthCare</strong> brings expert <strong>physiotherapy and rehabilitation at home</strong>,
                        so you can heal, recover, and move better without stepping outside.
                        From <em>pain relief and mobility restoration</em> to <em>post-surgery recovery</em> and <em>chronic condition management</em>,
                        we guide you every step of the way with complete <strong>care navigation</strong>.
                        Experience faster healing, personalized treatment, and the comfort of high-quality care in your own home.
                    </p>
                </div>
                <div className="w-11/12 sm:w-1/2 lg:px-6 my-6">
                    <img
                        src={images[currentIndex].image}
                        alt={images[currentIndex].alttext}
                        className="w-full h-44 sm:h-80 rounded-2xl object-cover shadow-xl transition-all duration-500"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center mt-2 mx-auto">
                {/* <h2 className="text-xl sm:text-3xl font-bold text-blue-900">Give a Call</h2> */}
                <button
                    onClick={() => window.location.href = `tel:7841962383`}
                    className="bg-blue-700 text-white px-5 py-2 sm:mt-0 rounded-full sm:text-lg font-semibold hover:bg-gray-800 transition flex items-center"><FaPhone className="mr-2" />
                    Book Appointment
                </button>
                <a
                    href="https://wa.me/917841962383?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20SFS%20HealthCare%20home%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">Chat with us on Whatsapp</a>

            </div>

            {/* Why Choose Us Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 mt-20 mb-6 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-8 text-center">
                    Why Choose SFS HealthCare?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {whyChooseData.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow p-2 sm:p-6 hover:shadow-lg transition">
                                <h3 className="flex items-center text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                                    <Icon size={24} className="mr-4" />
                                    {item.title}
                                </h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}