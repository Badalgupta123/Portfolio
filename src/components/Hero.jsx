import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import avatarImg from '../assets/ai avatar 2.png'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='home'
      className='relative min-h-screen flex items-center pt-20 pb-16 bg-[#1a1a1a] overflow-hidden'
    >
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple/20 blur-[100px] pointer-events-none'
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className='absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-pink/15 blur-[120px] pointer-events-none'
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue/10 blur-[90px] pointer-events-none'
      />
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Badal Gupta</span>
          </h1>
          <div className='flex items-center justify-center md:justify-start gap-4 mb-6'>
            <span className='text-2xl md:text-3xl font-semibold'>I'm a</span>
            <span className='text-2xl md:text-3xl font-semibold text-purple typewriter'>Software Engineer</span>
          </div>
          <p className='text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0'>
            A passionate Software Engineer focused on building scalable, high-performance solutions through modern technologies and innovative design.
          </p>
          <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
            <a href='#projects' className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/80 transition duration-300'>View Work</a>
            <a href='#contact' className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>Contact Me</a>
            <a href='/Resume_Badal_Gupta.pdf' download className='px-6 py-3 bg-gradient-to-r from-purple to-pink rounded-lg font-medium hover:opacity-90 transition duration-300'>Download Resume</a>
          </div>

          {/* Stats Row */}
          <div className='flex justify-center md:justify-start gap-6 sm:gap-8 mt-8'>
            <div className='text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-purple'>3+</p>
              <p className='text-gray-400 text-[10px] sm:text-xs mt-1'>Projects</p>
            </div>
            <div className='w-px bg-dark-400' />
            <div className='text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-purple'>1+</p>
              <p className='text-gray-400 text-[10px] sm:text-xs mt-1'>Years Exp.</p>
            </div>
            <div className='w-px bg-dark-400' />
            <div className='text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-purple'>10+</p>
              <p className='text-gray-400 text-[10px] sm:text-xs mt-1'>Technologies</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex justify-center md:justify-start gap-4 mt-6'>
            <a href='https://github.com/Badalgupta123' target='_blank' rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-dark-300 border border-dark-400 flex items-center justify-center text-purple hover:bg-purple hover:text-white hover:border-purple transition duration-300'>
              <FaGithub className='text-lg' />
            </a>
            <a href='https://www.linkedin.com/in/badal-gupta123/' target='_blank' rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-dark-300 border border-dark-400 flex items-center justify-center text-purple hover:bg-sky-600 hover:text-white hover:border-sky-600 transition duration-300'>
              <FaLinkedin className='text-lg' />
            </a>
            <a href='https://www.instagram.com/badalgupta123/' target='_blank' rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-dark-300 border border-dark-400 flex items-center justify-center text-purple hover:bg-pink hover:text-white hover:border-pink transition duration-300'>
              <FaInstagram className='text-lg' />
            </a>
          </div>
        </div>
        {/* right side image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                src={avatarImg} alt='Profile' />
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Hero
