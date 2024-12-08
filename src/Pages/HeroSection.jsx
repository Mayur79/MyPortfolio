import React from 'react';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profileImage from '../assests/profileimage1.jpg'
const HeroSection = () => {
    const linkedInProfileUrl = 'https://www.linkedin.com/in/mayurb79';
    const githubProfileUrl = 'https://github.com/Mayur79';
    const resumeurl = 'https://drive.google.com/file/d/1KZxOMuljtS2Ro4Ng6GUdDqSZ2YJbZtV0/view?usp=sharing';
    const profileImageUrl = 'https://avatars.githubusercontent.com/u/40353775?v=4';

    return (
        <div className="bg-[#1A1E23] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Main Content */}
                        <div className="space-y-6">
                            <h1 className="text-6xl lg:text-7xl font-bold">
                                <span className="text-white">Hi, I'm </span>
                                <span className="text-[#98FAEC]">Mayur</span>
                            </h1>
                            <div className="h-16">
                                <ReactTyped
                                    strings={[
                                        "Full Stack Developer",
                                        "Next js Developer",
                                        "MERN Stack Expert"
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={40}
                                    loop
                                    className="text-4xl text-[#98FAEC]/90"
                                />
                            </div>
                            <p className="text-gray-300 text-lg max-w-xl">
                                Crafting elegant digital experiences through clean code and innovative solutions.
                                Let's turn your ideas into reality.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={resumeurl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#98FAEC] text-[#292F36] rounded-full font-medium hover:bg-[#98FAEC]/90 transition-all duration-300"
                            >
                                <MdOutlineFileDownload className="text-xl" />
                                <span>Download Resume</span>
                            </a>
                            <a
                                href="mailto:mayurbhoyar4455@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-3 border border-[#98FAEC] text-[#98FAEC] rounded-full hover:bg-[#98FAEC]/10 transition-all duration-300"
                            >
                                <CiMail className="text-xl" />
                                <span>Contact Me</span>
                            </a>
                        </div>

                        {/* Location Info */}
                        <div className="flex items-center gap-2 text-gray-300">
                            <IoLocationOutline className="text-xl text-[#98FAEC]" />
                            <span>Maharashtra, India</span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2">
                        <div className="relative max-w-lg mx-auto">
                            {/* Background glow */}
                            <div className="absolute -inset-4 bg-[#98FAEC]/5 rounded-full blur-3xl"></div>
                            
                            {/* Profile image container */}
                            <div className="relative">
                                {/* Tag */}
                                <div className="absolute -top-4 right-8 bg-[#292F36] px-4 py-2 rounded-full border border-[#98FAEC]/20">
                                    <div className="flex items-center gap-2">
                                        <MdWork className="text-[#98FAEC]" />
                                        <span className="text-[#98FAEC]">Full Stack Developer</span>
                                    </div>
                                </div>
                                
                                {/* Social Media Links */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                                    <a
                                        href={linkedInProfileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-[#292F36] border border-[#98FAEC]/20 rounded-full hover:bg-[#98FAEC]/10 transition-all duration-300"
                                    >
                                        <FaLinkedin className="text-[#98FAEC] text-xl" />
                                    </a>
                                    <a
                                        href={githubProfileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-[#292F36] border border-[#98FAEC]/20 rounded-full hover:bg-[#98FAEC]/10 transition-all duration-300"
                                    >
                                        <FaGithub className="text-[#98FAEC] text-xl" />
                                    </a>
                                </div>
                                
                                {/* Image */}
                                <div className="bg-[#98FAEC]/5 rounded-full p-3">
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full aspect-square rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
