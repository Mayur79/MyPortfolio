import React from 'react';
import Project_bg from "../assests/project_bg.svg";
import scroll from "../assests/Scroll.svg";
import line from "../assests/line.svg";

const ProjectSection = () => {

    const ProjectData = [
        { title: 'PlayerOrbit', url: 'https://www.playerorbit.com/' },
        { title: 'CodeINBlogs', url: 'https://www.codeinblogs.co/' },
        { title: 'Coach Management Platform', url: 'https://www.cm.playerorbit.com/' },
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
                    <div className='mt-8  grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-20 text-white'>
                        {ProjectData.map((card, index) => (
                            <div key={index} className="grow border rounded-xl border-pink-900 overflow-hidden cardborder">
                                <div className="">
                                    <iframe
                                        title={`Preview ${card.title}`}
                                        src={card.url}
                                        width="100%"
                                        height="400px"
                                        frameBorder="0"
                                        className='bg-white rounded-t-xl'
                                    ></iframe>
                                </div>
                                <h3 className="text-lg font-semibold m-4 text-center font-archivo">{card.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection