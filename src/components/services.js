import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Services() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const services = [
        {
            title: "Neuro Physiotherapy & Rehabilitation",
            img: "/images/neuro-rehabilitation.jpg",
            description: "Specialized care for stroke, spinal cord injury, Parkinson’s, and other neurological conditions.",
            conditionsTreated: [
                "Stroke / Paralysis recovery",
                "Parkinson’s disease",
                "Traumatic Brain Injury (TBI)",
                "Post-craniotomy rehabilitation",
                "Peripheral nerve injury (Radial, Ulnar, Medial, Axillary, Tibial, Common Peroneal)",
                "Guillain–Barré syndrome (GBS)",
                "Multiple sclerosis (MS)",
                "Spinal cord injuries",
                "Vertigo & balance disorders",
            ],
        },
        {
            title: "Geriatric Physiotherapy & Rehabilitation",
            img: "/images/geriatric-physical-therapy.webp",
            description: "Promoting mobility, balance, and strength for senior citizens to maintain functional independence and safety.",
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
            img: "/images/cardio-physiotherapy.jpg",
            description: "Rehabilitation programs for heart surgery recovery, cardiovascular health, and improved endurance.",
            conditionsTreated: [
                "Post-cardiac surgery rehabilitation",
                "Heart attack recovery",
                "Congestive heart failure (CHF)",
                "Angina & coronary artery disease management",
                "Post-angioplasty exercise training",
                "Hypertension-related functional decline",
                "Cardiomyopathy rehabilitation",
                "PTCA & CABG",
            ],
        },
        {
            title: "Orthopedic Post-operative Physiotherapy & Rehabilitation",
            img: "/images/orthopedic-operative-physio.webp",
            description: "Targeted recovery programs after orthopedic surgeries to restore mobility, strength, and confidence at home.",
            conditionsTreated: [
                "Post-fracture stiffness & weakness",
                "Total Knee Replacement (TKR)",
                "Total Hip Replacement (THR)",
                "Shoulder surgery (Rotator cuff repair, Arthroscopy)",
                "Ligament reconstruction/repair (ACL, PCL, MCL, LCL)",
                "Spinal surgeries",
                "Meniscus repair",
                "Joint stiffness after immobilization",
                "Bone Grafting/Augmentation/Regeneration",
                "Tibial Plateau/Proximal Tibia fracture",
                "Proximal/Midshaft/Distal Femur fracture",
                "Patella Fracture",
                "Trimalleolar (Ankle) Fracture",
                "Tarsal & Metatarsal Fracture",
                "Proximal/Midshaft/Distal Humerus fracture",
                "Olecranon fracture",
                "Colles fracture",
                "Scapula fracture",
                "Amputation",
                "Carpal & Metacarpal fracture",
            ],
        },
        {
            title: "Orthopedic Non-operative Physiotherapy & Rehabilitation",
            img: "/images/non-operative-orthopedic.webp",
            description: "Effective recovery for orthopedic conditions without surgery, focusing on pain relief, strength, and functional movement.",
            conditionsTreated: [
                "Chronic Upper/Lower back and neck pain",
                "Osteoarthritis & Rheumatoid arthritis",
                "Frozen shoulder",
                "Cervical & Lumbar - Spondylitis, Spondylysis, Spondylosis, Spondylolisthesis",
                "Tennis elbow & Golfer’s elbow",
                "Plantar fasciitis & Heel pain",
                "Ankle sprains & ligament injuries",
                "Supraspinatus Tendonitis",
                "Shoulder impingement syndrome",
                "Muscle strains/pull & sports injuries",
                "Tendonitis, Tendinosis, Tendonopathy, Tenosynovitis, Tenosynovaginitis",
                "Labrum Injuries - SLAP/Bankart lesions",
                "Patellofemoral Pain Syndrome",
                "Condromalacia Patellae",
                "Fibromylgia, Myofacial Pain Syndrome",
                "Trigger Point",
                "Piriformis Pain Syndrome",
                "Sciatica",
                "Brachical Plexus Injury",
                "Groin Injury, Shin Pain, TFL Tightness",
            ],
        },
        {
            title: "Respiratory Physiotherapy & Rehabilitation",
            img: "/images/respiratory-physiotherapy.webp",
            description: "Improving lung function, breathing capacity, and quality of life for respiratory conditions.",
            conditionsTreated: [
                "Chronic Obstructive Pulmonary Disease (COPD)",
                "Asthma",
                "Bronchitis, Bronchiectasis",
                "Pulmonary Fibrosis",
                "Post-COVID lung recovery",
                "Pneumonia recovery",
                "Cystic fibrosis",
                "Breathing pattern disorders",
                "Post-thoracic surgery rehabilitation",
            ],
        },
        {
            title: "Organ Transplant Physiotherapy & Rehabilitation",
            img: "/images/organ-transplant-rehabilitation.jpg",
            description:
                "",
            conditionsTreated: [
                "Liver Transplant Rehabilitation",
                "Kidney Transplant Rehabilitation",
                "Lung Transplant Rehabilitation",
                "Heart Transpalnt Rehabilitation",
            ],
        },
        {
            title: "Cancer Physiotherapy & Rehabilitation",
            img: "/images/cancer-physiotherapy.webp",
            description: "Helping cancer patients manage fatigue, pain, and improve mobility during and after treatment.",
            conditionsTreated: [
                "Post-mastectomy/Breast Cancer recovery",
                "Lymphedema after cancer treatment",
                "Cancer-related fatigue",
                "Post-chemo and radiation weakness",
                "Joint stiffness due to immobility",
                "Balance & gait issues post-treatment",
                "Pain management during cancer care",
                "Bone Marrow Transplant (BMT)",
            ],
        },
        {
            title: "Pediatric Physiotherapy & Rehabilitation",
            img: "/images/pediatric-physiotherapy.webp",
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
                "ADHD",
            ],
        },
        {
            title: "Exercise Consultation",
            img: "/images/cardio-physiotherapy.jpg",
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
            img: "/images/weight-reduction.webp",
            description:
                "Phasewise Weight reduction Program",
            conditionsTreated: [
            ],
        },
        {
            title: "Diabetes Reversal Program",
            img: "/images/diabetes-reversal.avif",
            description:
                "Phasewise Diabeties Reversal Program",
            conditionsTreated: [
            ],
        },
        {
            title: "Sports Injury Rehabilitation",
            img: "/images/sports-injury-rehabilitation.jpeg",
            description:
                "Quick recovery from sprains, strains, and all types of sports injuries.",
            conditionsTreated: [
                "Meniscus injuries,",
                "Shoulder - Rotator cuff, Labrum, Tendon, Capsule injuries",
                "Ligament injuries (ACL, PCL, MCL, LCL)",
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
        <div id="services" className="bg-purple-100 rounded-xl scroll-mt-24 py-10 sm:py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-center text-blue-800 sm:mb-4">
                Our Services
            </h2>
            <h3 className="text-xl md:text-4xl font-bold text-center text-blue-800 sm:mb-12">We provide Physiotherapy And Rehabilitation Services for Below Conditions</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 sm:p-4 mt-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl shadow-lg border border-purple-200 overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                    >
                        <div
                            className="relative p-4 sm:p-6 text-white"
                            style={{
                                backgroundImage: `url(${service.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 h-full bg-black/60 rounded-t-2xl"></div>{/* Overlay */}
                            <div className="relative z-10 md:min-h-[184px] flex flex-col justify-between">{/* Content */}
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base mb-4 opacity-90">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="flex items-center text-white font-semibold hover:underline"
                                >
                                    <FaPlusCircle className="mr-2" />
                                    {expandedIndex === index ? "Hide Details" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {expandedIndex === index && (
                            <div className="bg-white p-4">
                                <ul className="list-disc text-left text-gray-700 pl-5">
                                    {service.conditionsTreated.map((treatment, i) => (
                                        <li className="text-sm" key={i}>
                                            {treatment}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="rounded-lg bg-gradient-to-br from-black to-slate-400 text-center mt-6 md:mx-20 p-8 sm:p-12">
                <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Begin Your Recovery Journey?
                </h2>
                <p className="text-md sm:text-lg text-gray-100 mb-6">
                    Book your appointment with our experienced physiotherapists today!
                </p>
                <p
                    onClick={handleCall}
                    className="inline-block bg-black text-white p-2 sm:px-6 sm:py-3 cursor-pointer rounded-full sm:text-lg font-semibold hover:bg-gray-800 hover:shadow-black hover:shadow-lg transition"
                >
                    Book Appointment
                </p>
            </div>
        </div>
    );
}
