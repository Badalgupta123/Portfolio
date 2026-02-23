import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id='projects'
            className='py-20 bg-dark-200 dot-grid'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-3'>
                    My
                    <span className='text-purple'>Projects</span>
                </h2>
                <div className='section-title-bar'></div>
                <p className='text-gray-400 text-center max-w-2xl mx-auto -mt-8 mb-16'>A selection of my recent work</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* Project Cards */}
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>

            <div className='text-center mt-12'>
                <a href='https://github.com/Badalgupta123' target='_blank' rel='noopener noreferrer' className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
                    <span>View More Projects</span>
                    <FaArrowRight className='ml-2' />
                </a>
            </div>
        </motion.div>
    )
}

export default Projects
