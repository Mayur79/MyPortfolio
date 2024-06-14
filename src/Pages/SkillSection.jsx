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
    return (
        <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${bgskill})` }}>
            <div className='flex flex-col'>

                <div className='flex justify-center'>
                    <div className='flex ml-96 pl-10'>
                        <img src={scroll} alt="" className='mt-8 hidden md:block sm:mt-12 h-20 sm:h-28' />
                    </div>
                    <div className='flex ml-48'>
                        <img src={skillicon} alt="" className='hidden md:block  w-56' />
                    </div>
                </div>
                <p className='text-center mt-8 md:mt-0 text-6xl font-ubuntu  text-[#12F7D6]'>Skills</p>
                <div className='flex justify-center'>
                    <img src={line} alt="" />
                </div>
                <p className='text-center text-white font-ibm mx-20'>I am striving to never stop learning and improving</p>
                <div class="grid grid-cols-2 sm:grid-cols-4 justify-center mx-auto mt-6 md:mx-80 md:mt-8 gap-8">
                    <div className='animate__animated animate__bounce animate__delay-2s  flex flex-col w-36 gap-2'>
                        <img src={htmlimg} alt="" className='w-36' />
                        <p className='text-center font-ibm text-xl text-[#E54F26]'>HTML</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={cssimg} alt="" className='w-36' />
                        <p className='text-center font-ibm text-xl text-[#0C73B8]'>CSS</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={jsimg} alt="" className='w-36' />
                        <p className='text-center font-ibm text-xl text-[#E7A020]'>JS</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={reactimg} alt="" className='w-36' />
                        <p className='text-center font-ibm text-xl text-[#28A9E0]'>REACT</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={tailwindimg} alt="" className='w-36 border rounded-full' />
                        <p className='text-center font-ibm text-xl text-white'>TAILWIND CSS</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2' >
                        <img src={expressimg} alt="" className='w-36  rounded-full' />
                        <p className='text-center font-ibm text-xl text-[#6cc24a]'>Node/Express Js</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={mongoimg} alt="" className='w-36 rounded-full' />
                        <p className='text-center font-ibm text-xl text-[#12aa53]'>MONGODB</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={javalogo} alt="" className='w-36 rounded-full h-36' />
                        <p className='text-center font-ibm text-xl text-white'>JAVA</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2'>
                        <img src={githubimg} alt="" className='w-36  rounded-full h-36 z-50' />
                        <p className='text-center font-ibm text-xl text-white'>GITHUB</p>
                    </div>
                    <div className='flex flex-col w-36 gap-2 mb-8'>
                        <img src={pythonimg} alt="" className='w-36 rounded-full h-36 z-50' />
                        <p className='text-center font-ibm text-xl text-white'>PYTHON</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection;