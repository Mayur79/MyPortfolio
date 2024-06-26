import React from 'react';
import profileavatae from '../assests/profileavatae.jpg';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const HeroSection = () => {
    const linkedInProfileUrl = 'https://www.linkedin.com/in/mayurb79';
    const githubProfileUrl = 'https://github.com/Mayur79';
    const resumeurl = 'https://drive.google.com/file/d/1KZxOMuljtS2Ro4Ng6GUdDqSZ2YJbZtV0/view?usp=sharing';
    return (
        <>
            <div className="bg-[#292F36] flex flex-col text-[#98FAEC] min-h-screen">
                <div>
                    <h1 className="text-center text-5xl md:text-7xl font-normal mt-10 font-ubuntu">
                        Developer
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex mx-4 md:mx-8">
                        <div className="flex flex-col shape md:ml-12 mt-4 gap-2 mx-auto">
                            <div className="flex mx-auto">
                                <img
                                    src={profileavatae}
                                    alt=""
                                    className="mt-8 h-24 md:h-32 border rounded-full"
                                />
                            </div>
                            <div className="font-ibm text-white text-center">
                                <p className="text-xl md:text-3xl">Mayur</p>
                                <p className="font-medium text-sm md:text-base">Full-Stack Developer</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 ml-6">
                                    <CiMail className="mt-1" />
                                    <p className="text-white">mayurbhoyar4455@gmail.com</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoLocationOutline className="mt-1 ml-6" />
                                    <p className="text-white">Maharashtra, India</p>
                                </div>
                                <div className="flex gap-2">
                                    <MdWork className="mt-1 ml-6" />
                                    <p className="text-white">Full-time / Freelancer</p>
                                </div>
                                <div className="flex gap-2">
                                    <FaLinkedin className="mt-1 ml-6" />
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href={linkedInProfileUrl}
                                        rel="noopener noreferrer"
                                    >
                                        www.linkedin.com/in/mayurb79
                                    </a>
                                </div>
                                <div className="flex gap-2">
                                    <FaGithub className="mt-1 ml-6" />
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href={githubProfileUrl}
                                        rel="noopener noreferrer"
                                    >
                                        https://github.com/Mayur79
                                    </a>
                                </div>
                                <div>
                                    <div className="flex md:mt-0 mt-4 ml-4 gap-4">
                                        <p className="bg-[#98FAEC] text-black px-2 py-1 border rounded-lg">
                                            MERN
                                        </p>
                                        <p className="bg-[#98FAEC] text-black px-2 py-1 border rounded-lg">
                                            Tailwind
                                        </p>
                                        <p className="bg-[#98FAEC] text-black px-2 py-1 border rounded-lg">
                                            Java
                                        </p>
                                    </div>
                                </div>
                                <a className="bg-white text-black w-40 md:w-40 md:mt-0 mt-4 py-2 ml-4 px-2 border rounded-3xl" href='#'>
                                    <div className="flex items-center gap-2">
                                        <a className="ml-2 md:ml-3" target="_blank"
                                            href={resumeurl}
                                            rel="noopener noreferrer"
                                        >Download CV</a> <MdOutlineFileDownload />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mx-0 md:ml-8 mx-8 md:mt-20 flex flex-col gap-4">
                        <div>

                            <h1>{'<h1>'}</h1>
                        </div>
                        <div className="verflow-hidden whitespace-nowrap font-ubuntu text-white text-3xl md:text-5xl ml-4">

                            <ReactTyped strings={["Hey"]} typeSpeed={90} />   <br />
                            {/* <div className='flex gap-4'>
                                <div>

                                    I'm
                                </div>
                                <span className="text-[#98FAEC] font-normal">Mayur</span> <br />
                            </div> */}

                            <ReactTyped strings={["I'm Mayur"]} typeSpeed={90} className='text-[#98FAEC]' />
                            <div className='flex '>

                                <div>
                                    <ReactTyped strings={[" Full Stack Developer"]} typeSpeed={90} className='text-[#98FAEC]' />

                                </div>
                                <div className='flex items-end'>

                                    <span className="text-sm text-[#98FAEC]">{'</h1>'}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>{'<p>'}</h1>
                            <div className="font-ibm text-white ml-4 text-sm md:text-base">
                                I help businesses grow by crafting amazing web experiences. If you’re <br /> looking
                                for a developer that likes to get stuff done,
                            </div>
                            {'</p>'}
                        </div>
                        <a className="flex gap-4 ml-4 text-lg md:text-3xl font-ibm" href="mailto:mayurbhoyar4455@playerorbit.com">
                            Let's Talk{' '}

                            <CiMail className="mt-1 bg-[#43454D] border rounded-full border-[#292F36] text-xl md:text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
