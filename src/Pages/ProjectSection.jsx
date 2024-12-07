import React from 'react';
import Project_bg from "../assests/project_bg.svg";
import scroll from "../assests/Scroll.svg";
import line from "../assests/line.svg";
import Project1 from "../assests/project1.png";
import Project2 from "../assests/project2.png";
import Project3 from "../assests/project3.png";
import Project4 from "../assests/project4.jpg";
import Project5 from "../assests/project5.png";
import Project6 from "../assests/project6.png";
import { Link } from 'react-router-dom';

const ProjectSection = () => {

    const ProjectData = [
        { title: 'PlayerOrbit', url: Project1, link: "https://www.playerorbit.com/" },
        { title: 'CodeINBlogs', url: Project2, link: "https://codeinblogs.co/" },
        { title: 'Sneak Peak', url: Project5, link: "https://sneak-peek-fn.vercel.app/" },
        { title: 'Fill Basket', url: Project3, link: "https://fill-basket-frontend.vercel.app/" },
        { title: 'Delphi Analtyics', url: Project4, link: "https://www.delphianalytics.in/" },
        { title: 'Inohax', url: Project6, link: "https://inohax.inovact.in/" },
    ]

    return (
        <div className="min-h-screen bg-[#1A1E23] py-16">
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='flex flex-col items-center space-y-8'>
                    <img src={scroll} alt="scroll" className='w-20 h-20 sm:w-28 sm:h-28 animate-bounce' />

                    <div className='flex flex-col items-center space-y-4'>
                        <h2 className='text-6xl md:text-7xl font-ubuntu text-[#98FAEC] tracking-wider'>Works</h2>
                        <img src={line} alt="decorative line" className='w-48 md:w-64' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 sm:px-6 lg:px-8'>
                        {ProjectData.map((project, index) => (
                            <Link
                                to={project.link}
                                key={index}
                                className="group relative overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white text-xl font-semibold font-ubuntu tracking-wider">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#98FAEC] mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                Click to view project →
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection