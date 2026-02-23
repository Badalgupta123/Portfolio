import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import Profile12resize from '../assets/Profile12.jpg' // adjust path & extension if different

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-3'>
                    About
                    <span className='text-purple'>Me</span>
                </h2>
                <div className='section-title-bar'></div>
                <p className='text-gray-400 text-center max-w-2xl mx-auto -mt-8 mb-16'>Get to know more about my background and passion</p>

                {/* Image + my journey */}
                <div className='flex flex-col md:flex-row items-stretch gap-12'>
                    {/* Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden relative h-72 sm:h-96 md:h-auto'>
                        <motion.img
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className='w-full h-full object-cover md:absolute md:inset-0'
                            src={Profile12resize} alt='Profile' />
                    </div>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='md:w-1/2 flex'
                    >
                        <div className='bg-dark-300 rounded-2xl p-8 shadow-xl border border-dark-400 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6 leading-relaxed'>
                                I’m a Software Engineer with experience building scalable full-stack applications. I work primarily with React on the frontend and Spring Boot and Node.js on the backend, focusing on clean architecture, performance, and maintainable code.
                            </p>
                            <p className='text-gray-300 mb-10 leading-relaxed'>
                                I have strong problem-solving skills and enjoy tackling complex challenges, whether it’s designing APIs, optimizing application flow, or debugging production issues.
                            </p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-100/50 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer border border-dark-400'>
                                            <div className='text-purple text-3xl mb-3'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-lg font-semibold mb-2'>{data.title}</h3>
                                            <p className='text-gray-400 text-sm'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
