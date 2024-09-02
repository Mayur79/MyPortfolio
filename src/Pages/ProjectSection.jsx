import React from 'react';
import Project_bg from "../assests/project_bg.svg";
import scroll from "../assests/Scroll.svg";
import line from "../assests/line.svg";
import Project1 from "../assests/project1.png";
import Project2 from "../assests/project2.png";
import Project3 from "../assests/project3.png";
import Project4 from "../assests/project4.jpg";
import Project5 from "../assests/project5.png";
import { Link } from 'react-router-dom';
const ProjectSection = () => {

    const ProjectData = [
        { title: 'PlayerOrbit', url: Project1,link:"https://www.playerorbit.com/" },
        { title: 'CodeINBlogs', url: Project2 ,link:"https://codeinblogs.co/"},
        { title: 'Sneak Peak', url: Project5,link:"https://sneak-peek-fn.vercel.app/" },
        { title: 'Fill Basket', url: Project3,link:"https://fill-basket-frontend.vercel.app/" },
        { title: 'Delphi Analtyics', url: Project4 },
    ]
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${Project_bg})` }}>
            <div className='flex flex-col pb-20'>
                <div className='flex justify-center'>
                    <img src={scroll} alt="" className='mt-8 sm:mt-12 h-20 sm:h-28' />
                </div>
                <div className='flex flex-col'>
                    <div className='text-center text-6xl font-ubuntu text-[#98FAEC]'>Works</div>
                    <div className='flex justify-center'>
                        <img src={line} alt="" />
                    </div>
                    <div className='mt-8  grid grid-cols-1 md:grid-cols-3 gap-10 mx-4 md:mx-20 text-white'>
                        {ProjectData.map((card, index) => (
                            <Link to={card.link} key={index} className="grow border rounded-xl border-pink-900 overflow-hidden cardborder"    target="_blank" 
                            rel="noopener noreferrer">
                                <div className="">
                                    <img
                                        title={`Preview ${card.title}`}
                                        src={card.url}
                                        width="100%"
                                        height="800px"
                                        frameBorder="0"
                                        className='bg-white rounded-t-xl'
                                    />
                                </div>
                                <h3 className="text-lg font-semibold m-4 text-center font-archivo">{card.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection