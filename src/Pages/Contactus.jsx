import React from 'react'
import scroll from "../assests/Scroll.svg";
import line from "../assests/line.svg";
import { useForm, ValidationError } from '@formspree/react';
import message from "../assests/Untitled (1)/Homepage - Desktop/icon-send.svg";
const Contactus = () => {
    const [state, handleSubmit] = useForm("mdovqqaz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='bg-[#1A1E23] h-screen text-[#98FAEC]'>

            <div className='flex flex-col'>

                <div className='flex justify-center'>
                    <img src={scroll} alt="" />
                </div>
                <div>
                    <p className='text-center text-6xl font-ubuntu'>Contact Us</p>
                </div>

                <div className='flex justify-center'>
                    <img src={line} alt="" />
                </div>
                <div>

                    <p className='font-ibm text-center text-white md:mx-0 mx-8'>I’m currently available for freelance work</p>
                </div>
                <div className='flex justify-center'>
                    <p className='border-2 rounded-tl-3xl rounded-br-3xl p-4 border-[#98FAEC] text-4xl font-ibm mt-10'>Send me message</p>
                </div>
                <form onSubmit={handleSubmit} className='mt-12'>

                    <div className='flex justify-between md:mx-72 font-ubuntu md:gap-24 md:px-0 px-12 md:pr-0 pr-20 gap-8'>


                        <div className='flex flex-col md:w-1/2 gap-4 w-1/2 font-archivo'>
                            <label htmlFor="name">Your Name*</label>
                            <input type="text" id='name' name='text' placeholder='Enter Your Name' className='bg-transparent border-b border-b-[#98FAEC]' />
                        </div>
                        <div className='flex flex-col w-1/2 gap-4'>
                            <label htmlFor="email">Your Email*</label>
                            <input
                                id="email"
                                type="email"
                                name="email" className='bg-transparent border-b border-b-[#98FAEC]'
                                placeholder='Enter Your Email'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:mx-72 md:mt-12 mt-8 mx-12 gap-4'>
                        <label htmlFor="message">Enter Message</label>
                        <input
                            id="message"
                            type="text"
                            name="message" placeholder="Enter Your Requirement" className='bg-transparent border-b border-b-[#98FAEC]'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className=''>


                        <button type="submit" className='flex mt-8 justify-center items-center font-medium mx-auto bg-[#98FAEC] text-[#292F36] px-4 gap-2 py-4 text-lg rounded-full' disabled={state.submitting}>
                            Send Message
                            <img src={message} alt="" className='w-6' />
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contactus