import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div id="about" className="scroll-mt-28 min-h-screen px-4 sm:px-8 md:px-16 py-6 sm:py-10">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
                About SFS Healthcare – Home Physiotherapy & Rehabilitation in Pune & PCMC
            </h1>

            {/* Intro Section */}
            <section data-aos="fade-up" className="max-w-5xl mx-auto mb-12">
                <p className="text-gray-700 text-lg mb-6">
                    At <span className="font-semibold text-blue-600">SFS Healthcare</span>, we bring professional <strong>home physiotherapy and rehabilitation services</strong> right to your doorstep in <strong>Hinjewadi, Baner, Wakad, Pimple Saudagar, Sus, Pashan, Nigdi, Ravet, and across PCMC</strong>.
                    Our certified physiotherapists combine advanced techniques with compassionate care to help you regain functional independence with greater mobility and strength.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                    Whether you’re recovering from surgery, managing a sports injury, dealing with chronic pain, or seeking postnatal rehabilitation, our <strong>in-home physiotherapy</strong> services are tailored to your unique needs.
                    We bring modern equipment, proven treatment plans, and a human touch – so you heal faster, in the comfort of home.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10" data-aos="fade-up">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h2>
                        <p className="text-gray-700">
                            Our mission is to be your trusted companion throughout your recovery journey – offering expert
                            <strong> home physiotherapy</strong> and <strong>rehabilitation</strong> that is both accessible and effective.
                            By removing the need for clinic visits, we bring personalized treatment, advanced techniques,
                            and compassionate care right to your doorstep. We aim to empower patients across
                            <strong> Pune and PCMC</strong> to heal faster, regain independence, and live pain-free, active lives.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">Our Vision</h2>
                        <p className="text-gray-700">
                            Our vision is to make <strong>high-quality, affordable physiotherapy care</strong> accessible to every
                            home in <strong>Pune and PCMC</strong>. We strive to be the most trusted name in
                            <strong> in-home rehabilitation</strong>, combining scientific expertise with genuine compassion.
                            By ensuring that high-standard treatment is within everyone’s reach, we aim to create
                            a community where better mobility, strength, and wellness are a way of life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mb-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        {
                            title: "Compassion",
                            desc: "We care deeply about each patient’s well-being and recovery journey.",
                        },
                        {
                            title: "Excellence",
                            desc: "We use evidence-based techniques and deliver the highest standards of care.",
                        },
                        {
                            title: "Integrity",
                            desc: "We are honest, transparent, and committed to ethical practice.",
                        },
                        {
                            title: "Personalized Care",
                            desc: "Every recovery plan is customised to your condition, lifestyle, and location – so you get the best results, right at home."
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Areas We Serve */}
            <section data-aos="fade-up" className="mb-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">Areas We Serve</h2>
                <p className="text-gray-700 text-lg mb-6 text-center">
                    We proudly serve patients in <strong>Hinjewadi, Baner, Pimple Saudagar, Sus, Pashan, Vishal Nagar, Punawale, Tathawade, Nigdi, Pradhikaran, Ravet, Vishal Nagar, Wakad, Ajmera, Dehuroad, Rahatni, Chikhali</strong> and other parts of <strong>Pune & Pimpri-Chinchwad (PCMC)</strong>.
                </p>
                <p className="text-gray-700 text-lg text-center">
                    If you’re looking for a trusted <strong>physiotherapy and rehabilitation partner near you</strong>, we’re just a call away.
                </p>
            </section>

            {/* Counters Section
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" data-aos="fade-up">
                {[
                    { label: "Happy Patients", value: "1200+" },
                    { label: "Years of Experience", value: "10+" },
                    { label: "Therapists", value: "15+" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-xl shadow">
                        <p className="text-5xl font-bold text-purple-700">{stat.value}</p>
                        <p className="mt-2 text-gray-600 text-lg">{stat.label}</p>
                    </div>
                ))}
            </section> */}
        </div>
    );
}
