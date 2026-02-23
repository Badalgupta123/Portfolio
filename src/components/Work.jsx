import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='experience'
      className='py-20 bg-dark-100 dot-grid scroll-mt-20'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-3'>
          Work <span className='text-purple'>Experience</span>
        </h2>
        <div className='section-title-bar'></div>
        <p className='text-gray-400 text-center max-w-2xl mx-auto -mt-8 mb-16'>
          My Professional journey so far
        </p>

        {/* Timeline Wrapper */}
        <div className='max-w-3xl mx-auto space-y-12'>
          {workData.map((work, index) => (
            <div
              key={index}
              className='relative pl-12 before:content-[""] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300'
            >
              {/* Timeline Dot */}
              <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple'></div>

              {/* Content Card */}
              <div className='bg-dark-300 rounded-2xl p-6'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-semibold'>{work.role}</h3>
                  <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm'>
                    {work.duration}
                  </span>
                </div>
                <p className='text-gray-400 mb-2'>{work.company}</p>
                <p className='text-gray-300 text-sm'>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Work
