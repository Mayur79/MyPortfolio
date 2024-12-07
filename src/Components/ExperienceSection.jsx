import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
    {
        date: 'July 2023 - Present',
        title: 'Full Stack Developer Intern at PlayerOrbit',
        location: 'Remote',
        description: [
            'Implemented phone OTP integration using AWS SNS, strengthening user verification.',
            'Integrated WhatsApp API to streamline communication, enhancing customer engagement and support.',
            'Managed AWS S3 integration for scalable storage, optimizing data accessibility and management.'
        ]
    },
    {
        date: 'May 2023 - July 2023',
        title: 'Full Stack Developer Intern at CodeINBlogs',
        location: 'Remote',
        description: [
            'Implemented a robust API structure, reducing page load time by 50% and improving user retention.',
            'Developed backend functionalities, ensuring seamless data flow and efficient server responses.',
            'Collaborated with frontend team to integrate APIs, creating a more dynamic and responsive interface.'
        ]
    }
];

const ExperienceSection = () => {
    return (
        <div className="py-16 bg-[#1A1E23]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-[#98FAEC] mb-12">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-[#292F36] p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-[#98FAEC] text-2xl mr-3" />
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                    <p className="text-sm text-gray-400">{exp.date} • {exp.location}</p>
                                </div>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
