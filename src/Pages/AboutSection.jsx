import React from 'react';
import aboutbg from "../assests/about.svg";
import scroll from "../assests/Scroll.svg";
import image from "../assests/Image.svg";

const AboutSection = () => {
    return (
        <div className="min-h-screen bg-[#1A1E23] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center space-y-12">
                    {/* <img 
                        src={scroll} 
                        alt="scroll" 
                        className="w-20 h-20 sm:w-28 sm:h-28 animate-bounce" 
                    /> */}

                    <div className="grid md:grid-cols-2 md:grid-cols-2-reverse gap-12 items-start">
                        {/* Left Column - About Content */}
                        <div className="space-y-8">
                            <div className="relative">
                                <h2 className="inline-block text-3xl md:text-4xl font-archivo text-[#98FAEC] bg-[#292F36] px-8 py-4 rounded-tl-3xl rounded-br-3xl border-4 border-[#98FAEC] transform hover:scale-105 transition-transform duration-300">
                                    About Me
                                </h2>
                            </div>

                            <div className="bg-[#292F36]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#98FAEC]/20 space-y-6 transform hover:scale-[1.02] transition-all duration-300">
                                <div className="text-3xl font-semibold text-[#98FAEC] mb-4">
                                    Hello!
                                </div>

                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                    I am Mayur Bhoyar, a dedicated Full Stack Developer with a BTech in Information Technology, passionate about creating innovative and user-centric web solutions.
                                    </p>

                                    <p className="leading-relaxed">
                                    I’ve interned at PlayerOrbit and CodeINBlogs, where I developed secure, scalable applications. My technical expertise includes the MERN stack, Shopify, and AWS.
                                    </p>

                                    <p className="leading-relaxed">
                                    My projects, like E-commerce Website and Delphi Analytics, showcase my ability to deliver impactful solutions. I’ve also published a paper on Face Emotion and Gender Recognition.


                                    </p>

                                    <p className="leading-relaxed">
                                    Currently, I’m expanding my expertise in AWS to build cutting-edge cloud solutions and drive digital transformation.


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="md:block hidden relative group">
                            <div className=" absolute inset-0 bg-gradient-to-r   rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                            <img 
                                src={image} 
                                alt="About illustration" 
                                className="md:mt-28 w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300 h-[440px] object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
