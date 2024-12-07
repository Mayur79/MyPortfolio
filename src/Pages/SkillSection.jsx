import React from 'react'
import bgskill from "../assests/bgskill.svg";
import scroll from "../assests/Scroll.svg";
import skillicon from '../assests/skillicon.svg';
import line from "../assests/line.svg";
import htmlimg from "../assests/html.svg";
import cssimg from "../assests/css.svg";
import jsimg from "../assests/js.svg";
import reactimg from "../assests/reactimg.svg";
import tailwindimg from "../assests/tailwind.png";
import expressimg from "../assests/expressndimg.png";
import mongoimg from "../assests/mongodimg.png";
import javalogo from "../assests/javalogo.jpg";
import githubimg from "../assests/githubimg.png";
import pythonimg from "../assests/pythonimg.png";

const SkillSection = () => {
    const skills = [
        { name: 'HTML', icon: htmlimg, color: 'text-[#E54F26]' },
        { name: 'CSS', icon: cssimg, color: 'text-[#0C73B8]' },
        { name: 'JavaScript', icon: jsimg, color: 'text-[#F7DF1E]' },
        { name: 'React', icon: reactimg, color: 'text-[#61DAFB]' },
        { name: 'Tailwind', icon: tailwindimg, color: 'text-[#38BDF8]' },
        { name: 'Express.js', icon: expressimg, color: 'text-[#98FAEC]' },
        { name: 'MongoDB', icon: mongoimg, color: 'text-[#00ED64]' },
        { name: 'Java', icon: javalogo, color: 'text-[#E51F24]' },
        { name: 'GitHub', icon: githubimg, color: 'text-white' },
        { name: 'Python', icon: pythonimg, color: 'text-[#FFD43B]' },
    ];

    return (
        <div className="min-h-screen bg-cover bg-center py-16" style={{ backgroundImage: `url(${bgskill})` }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-8">
                    <div className="flex items-center justify-center gap-8">
                        <img src={scroll} alt="scroll" className="w-20 h-20 sm:w-28 sm:h-28 animate-bounce hidden md:block" />
                        {/* <img src={skillicon} alt="skill icon" className="w-56 hidden md:block" /> */}
                    </div>

                    <div className="text-center space-y-4">
                        <h2 className="text-5xl md:text-6xl font-ubuntu bg-gradient-to-r from-[#98FAEC] to-blue-400 text-transparent bg-clip-text">
                            Skills
                        </h2>
                        <img src={line} alt="decorative line" className="mx-auto w-48 md:w-64" />
                        <p className="text-gray-300 font-ibm text-lg">
                            I am striving to never stop learning and improving
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-[#292F36]/40 backdrop-blur-sm border border-[#98FAEC]/10 hover:border-[#98FAEC]/30 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#98FAEC]/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <span className={`${skill.color} font-ibm text-lg font-medium`}>
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;