import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const services = [
        {
            title: "Orthopedic Post-operative Physiotherapy & Rehabilitation",
            description: "Targeted recovery programs after orthopedic surgeries to restore mobility, strength, and confidence at home.",
            conditionsTreated: [
                "Post-fracture stiffness & weakness",
                "Total Knee Replacement (TKR) recovery",
                "Total Hip Replacement (THR) rehabilitation",
                "Shoulder surgery recovery (Rotator cuff repair, Arthroscopy)",
                "Ligament reconstruction (ACL, PCL)",
                "Spinal surgery rehabilitation",
                "Meniscus repair rehab",
                "Joint stiffness after immobilization",
            ],
        },
        {
            title: "Orthopedic Non-operative Physiotherapy & Rehabilitation",
            description: "Effective recovery for orthopedic conditions without surgery, focusing on pain relief, strength, and functional movement.",
            conditionsTreated: [
                "Chronic back and neck pain",
                "Osteoarthritis & Rheumatoid arthritis",
                "Frozen shoulder",
                "Tennis elbow & Golfer’s elbow",
                "Plantar fasciitis & Heel pain",
                "Ankle sprains & ligament injuries",
                "Shoulder impingement syndrome",
                "Muscle strains & sports injuries",
            ],
        },
        {
            title: "Neuro Physiotherapy & Rehabilitation",
            description: "Specialized care for stroke, spinal cord injury, Parkinson’s, and other neurological conditions.",
            conditionsTreated: [
                "Stroke / Paralysis recovery",
                "Parkinson’s disease",
                "Traumatic Brain Injury (TBI)",
                "Post-craniotomy rehabilitation",
                "Peripheral nerve injury",
                "Guillain–Barré syndrome (GBS)",
                "Multiple sclerosis (MS)",
                "Spinal cord injuries",
                "Vertigo & balance disorders",
            ],
        },
        {
            title: "Geriatric Physiotherapy & Rehabilitation",
            description: "Promoting mobility, balance, and strength for senior citizens to maintain independence and safety.",
            conditionsTreated: [
                "Age-related joint pain & stiffness",
                "Osteoporosis-related mobility issues",
                "Balance problems & fall prevention",
                "Post-fracture recovery",
                "Gait instability",
                "Muscle weakness due to aging",
                "Arthritic pain management",
                "Post-hospitalization rehabilitation",
            ],
        },
        {
            title: "Cardio Physiotherapy & Rehabilitation",
            description: "Rehabilitation programs for heart surgery recovery, cardiovascular health, and improved endurance.",
            conditionsTreated: [
                "Post-cardiac surgery rehabilitation",
                "Heart attack recovery",
                "Congestive heart failure (CHF) rehab",
                "Angina & coronary artery disease management",
                "Post-angioplasty exercise training",
                "Hypertension-related functional decline",
                "Cardiomyopathy rehabilitation",
            ],
        },
        {
            title: "Respiratory Physiotherapy & Rehabilitation",
            description: "Improving lung function, breathing capacity, and quality of life for respiratory conditions.",
            conditionsTreated: [
                "Chronic Obstructive Pulmonary Disease (COPD)",
                "Asthma",
                "Bronchitis",
                "Post-COVID lung recovery",
                "Pneumonia recovery",
                "Cystic fibrosis",
                "Breathing pattern disorders",
                "Post-thoracic surgery rehabilitation",
            ],
        },
        {
            title: "Cancer Physiotherapy & Rehabilitation",
            description: "Helping cancer patients manage fatigue, pain, and improve mobility during and after treatment.",
            conditionsTreated: [
                "Post-mastectomy recovery",
                "Lymphedema after cancer treatment",
                "Cancer-related fatigue",
                "Post-chemo and radiation weakness",
                "Joint stiffness due to immobility",
                "Balance & gait issues post-treatment",
                "Pain management during cancer care",
            ],
        },
        {
            title: "Pediatric Physiotherapy & Rehabilitation",
            description: "Specialized physiotherapy for infants, children, and adolescents with developmental, neurological, or orthopedic needs.",
            conditionsTreated: [
                "Cerebral palsy",
                "Delayed motor milestones",
                "Clubfoot",
                "Torticollis",
                "Spina bifida",
                "Muscular dystrophy",
                "Pediatric fractures recovery",
                "Post-surgery pediatric rehab",
            ],
        },
        {
            title: "Exercise Consultation",
            description: "Personalized exercise programs for fitness, rehabilitation, and lifestyle improvement.",
            conditionsTreated: [
                "Post-injury strength rebuilding",
                "Chronic pain management through exercise",
                "Sports performance enhancement",
                "Weight management exercise plans",
                "Postural correction programs",
                "Strength & endurance improvement",
                "Preventive exercise for joint health",
            ],
        },
        {
            title: "Weight Reduction Program",
            description:
                "We bring physiotherapy to your doorstep with all essential portable equipment.",
            conditionsTreated: [
                "TENS",
                "Weights",
                "Resistance bands",
                "Hands-on treatment",
            ],
        },
        {
            title: "Diabetes Reversal Program",
            description:
                "Regain strength and mobility after orthopedic or neurological surgeries.",
            conditionsTreated: [
                "Scar massage",
                "Joint mobilization",
                "Strengthening",
                "Flexibility training",
            ],
        },
        {
            title: "Sports Injury Rehabilitation",
            description:
                "Quick recovery from sprains, strains, and sports injuries.",
            conditionsTreated: [
                "RICE therapy",
                "Taping",
                "Agility drills",
                "Functional training",
                "Rehab programs",
            ],
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const handleCall = () => {
        if (typeof window !== "undefined") {
            window.location.href = "tel:7841962383";
        }
    };

    return (
        <div id="services" className="bg-purple-50 scroll-mt-24 py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-center text-purple-800 mb-12">
                Our Services
            </h2>
            <h3 className="text-4xl font-bold text-center text-purple-800 mb-12">We provide Physiotherapy And Rehabilitation Services for Below Conditions</h3>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg border border-purple-200 p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                    >
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>

                            <button
                                onClick={() => toggleExpand(index)}
                                className="flex items-center text-purple-700 font-semibold hover:underline"
                            >
                                <FaPlusCircle className="mr-2" />
                                {expandedIndex === index ? "Hide Details" : "Click to Read More"}
                            </button>

                            {expandedIndex === index && (
                                <ul className="mt-4 list-disc text-left text-gray-700 pl-5 space-y-1">
                                    {service.conditionsTreated.map((treatment, i) => (
                                        <li key={i}>{treatment}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    Ready to Begin Your Healing Journey?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Book your appointment with our experienced physiotherapists today!
                </p>
                <a
                    onClick={handleCall}
                    className="inline-block bg-black text-white px-6 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-gray-800 transition"
                >
                    Book Appointment
                </a>
            </div>
        </div>
    );
}
