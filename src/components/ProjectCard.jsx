import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='group bg-dark-300 rounded-2xl overflow-hidden card-glow cursor-pointer border border-dark-400 hover:border-purple/40 transition-colors duration-300'>

      {/* Image with zoom + overlay */}
      <div className='relative overflow-hidden h-60'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        {/* Gradient overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-dark-300/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
          <span className='text-sm text-purple font-medium tracking-wide'>↗ View Project</span>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 group-hover:text-purple transition-colors duration-300'>{title}</h3>
        <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-5'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-xs text-gray-300 border border-dark-400 hover:border-purple/40 transition-colors duration-200'>
              {item}
            </span>
          ))}
        </div>

        <div className='flex gap-2'>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple/80 transition duration-300 text-sm'
          >
            View Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300 text-sm'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
