import React from 'react';
import aboutbg from "../assests/about.svg";
import scroll from "../assests/Scroll.svg";
import image from "../assests/Image.svg";

const AboutSection = () => {
    return (
        <div className="md:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${aboutbg})` }}>
            <div className='flex flex-col'>

                <div className='flex justify-center'>
                    <img src={scroll} alt="" className='mt-8 sm:mt-12 h-20 sm:h-28' />
                </div>

                <div className='flex flex-col sm:flex-row text-white mt-8 sm:mt-12 ml-2 sm:ml-8 gap-4 sm:gap-8 md:ml-32 md:gap-20'>

                    <div className='sm:w-1/2'>

                        <div>
                            <p className='mx-auto md:mx-0 w-44 md:w-60 pl-8 md:pl-8 sm:w-80 text-2xl sm:text-4xl py-4 px-6 border rounded-tl-3xl rounded-br-3xl border-[#98FAEC] border-4 font-archivo bg-[#292F36]'>About Me</p>
                        </div>

                        <div className='font-ibm mt-4 md:mt-8 sm:mt-8 flex flex-col gap-2 bg-[#292F36] p-2 border border-[#292F36] rounded-2xl m-5 md:m-0'>

                            <div className='text-[#98FAEC]'>{'<p>'}</div>

                            <div className='text-[#98FAEC] text-2xl sm:text-4xl'>Hello!</div>

                            <div className='text-sm sm:text-base'>
                                My name is Mayur, and I specialize in web development that utilizes HTML, CSS, JS, and REACT, etc.
                            </div>

                            <div className='text-sm sm:text-base'>
                                I am a highly motivated individual and an eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                            </div>

                            <div className='text-sm sm:text-base'>
                                When I'm not coding, I am writing blogs, reading, or picking up some new hands-on art projects like photography.
                            </div>

                            <div className='text-sm sm:text-base'>
                                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                            </div>

                            <span className='text-[#98FAEC]'>{'</p>'}</span>

                        </div>

                    </div>

                    <div className='sm:w-1/2 mt-4 sm:mt-0 md:mx-0 mx-auto mb-8 mx-12'>
                        <img src={image} alt="" className=' md:w-96 w-72' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;
