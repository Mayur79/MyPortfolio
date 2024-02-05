import React from 'react'
import aboutbg from "../assests/about.svg";
import scroll from "../assests/Scroll.svg";
import image from "../assests/Image.svg";
const AboutSection = () => {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${aboutbg})` }}>
            <div className='flex flex-col'>


                <div className='flex justify-center'>
                    <img src={scroll} alt="" className='mt-12 h-28' />
                </div>
                <div className=''>
                    <div className='flex text-white mt-8 ml-36 gap-8'>
                        <div className='flex flex-col w-1/2'>


                            <div>


                                <p className='w-60 text-4xl py-4 px-6 border rounded-tl-3xl rounded-br-3xl border-[#98FAEC] border-4 font-archivo bg-[#292F36]'>About Me</p>
                            </div>
                            <div>


                                <div className='font-ibm mt-8 flex flex-col gap-2 bg-[#292F36] p-2 border border-[#292F36] rounded-md'>

                                    <div className='text-[#98FAEC]'>{'<p>'}</div>

                                    <div className='text-[#98FAEC] text-4xl'>Hello!
                                    </div>
                                    <div className='text-base'>
                                        My name is Mayur and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
                                    </div>
                                    <div className='text-base'>
                                        I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                    </div>
                                    <div className='text-base'>
                                        When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
                                    </div>
                                    <div className='text-base'>
                                        I like to have my perspective and belief systems challenged so that I see the world through new eyes.

                                    </div>
                                    <span className='text-[#98FAEC]'>{'</p>'}</span>

                                </div>

                            </div>
                        </div>
                        <div className='w-1/2 ml-28'>
                            {/* <p>img</p> */}
                            <img src={image} alt="" className='w-96 mt-4' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection