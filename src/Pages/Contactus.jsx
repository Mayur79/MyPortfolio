import React from 'react'
import scroll from "../assests/Scroll.svg";
import line from "../assests/line.svg";
import { useForm, ValidationError } from '@formspree/react';
import message from "../assests/Untitled (1)/Homepage - Desktop/icon-send.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
    const [state, handleSubmit] = useForm("mdovqqaz");
    
    if (state.succeeded) {
        toast.success("Thank you for contacting. I will contact you soon")
    }

    return (
        <div className='min-h-screen bg-[#1A1E23] py-16'>
            <div className='max-w-7xl mx-auto px-4 bg-[#1A1E23]'>
                <div className='flex flex-col items-center space-y-8 bg-[#1A1E23]'>
                    <img src={scroll} alt="scroll" className="w-20 h-20 sm:w-28 sm:h-28 animate-bounce" />

                    <div className='text-center space-y-4 bg-[#1A1E23]'>
                        <h2 className='text-5xl md:text-6xl font-ubuntu bg-gradient-to-r from-[#98FAEC] to-blue-400 text-transparent bg-clip-text'>
                            Contact Me
                        </h2>
                        <img src={line} alt="decorative line" className='mx-auto w-48 md:w-64' />
                        <p className='text-gray-300 font-ibm text-lg'>
                            I'm currently available for freelance work
                        </p>
                    </div>

                    <div className='relative group inline-block mt-8 bg-[#1A1E23]'>
                        <div className='absolute inset-0 bg-gradient-to-r from-[#98FAEC]/20 to-blue-400/20 rounded-tl-3xl rounded-br-3xl blur opacity-75 group-hover:opacity-100 transition duration-300'></div>
                        <p className='relative border-2 rounded-tl-3xl rounded-br-3xl p-3 border-[#98FAEC] text-[#98FAEC] text-2xl md:text-2xl font-ibm transform group-hover:scale-105 transition duration-300'>
                            Send me message
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='w-full max-w-4xl mt-12 space-y-12 bg-[#1A1E23]'>
                        <div className='grid md:grid-cols-2 gap-8 bg-[#1A1E23]'>
                            <div className='space-y-4 bg-[#1A1E23]'>
                                <label htmlFor="name" className='block text-[#98FAEC] font-archivo text-lg'>
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    name='text'
                                    placeholder='Enter Your Name'
                                    className='w-full bg-transparent border-b-2 border-[#98FAEC]/30 focus:border-[#98FAEC] py-2 text-white placeholder-gray-400 focus:outline-none transition duration-300'
                                />
                            </div>

                            <div className='space-y-4 bg-[#1A1E23]'>
                                <label htmlFor="email" className='block text-[#98FAEC] font-archivo text-lg'>
                                    Your Email*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder='Enter Your Email'
                                    className='w-full bg-transparent border-b-2 border-[#98FAEC]/30 focus:border-[#98FAEC] py-2 text-white placeholder-gray-400 focus:outline-none transition duration-300'
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                        </div>

                        <div className='space-y-4 bg-[#1A1E23]'>
                            <label htmlFor="message" className='block text-[#98FAEC] font-archivo text-lg'>
                                Your Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Write your message here...'
                                rows="5"
                                className='w-full bg-transparent border-2 border-[#98FAEC]/30 focus:border-[#98FAEC] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none transition duration-300 resize-none'
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <div className='flex justify-center bg-[#1A1E23]'>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className='group relative inline-flex items-center gap-4 bg-[#98FAEC] text-[#1A1E23] px-8 py-4 rounded-full font-medium hover:bg-[#98FAEC]/90 transition-all duration-300 transform hover:scale-105'
                            >
                                <span>Send Message</span>
                                <img src={message} alt="send" className='w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-right" theme="dark" />
        </div>
    );
};

export default Contactus;