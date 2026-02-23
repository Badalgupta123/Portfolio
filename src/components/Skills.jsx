import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='py-20 bg-dark-100 dot-grid'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-3'>
                    My <span className='text-purple'>Skills</span>
                </h2>
                <div className='section-title-bar'></div>
                <p className='text-gray-400 text-center max-w-2xl mx-auto -mt-8 mb-16'>Technologies I work with to bring ideas to life</p>

                {/* Skills Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='relative bg-dark-300 rounded-2xl p-6 card-glow cursor-pointer border border-dark-400 hover:border-purple/40 overflow-hidden'
                        >
                            {/* Top accent line */}
                            <div className='absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-purple to-pink' />

                            <div className='flex items-center mb-4 mt-2'>
                                <skill.icon className='w-12 h-12 text-purple mr-4 flex-shrink-0' />
                                <h3 className='text-xl font-semibold'>{skill.title}</h3>
                            </div>

                            <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{skill.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {skill.tags.map((tech) => (
                                    <span key={tech} className='px-3 py-1 bg-purple/10 text-purple border border-purple/20 rounded-full text-xs font-medium'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills

