import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const close = () => setShowMenu(false)

    return (
        <>
            <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
                <div className='container mx-auto flex justify-between items-center'>
                    {/* Logo */}
                    <a href='#' className='text-3xl font-bold text-white'>
                        Badal
                        <span className='text-purple'>Gupta</span>
                        <div className='w-4 h-4 bg-purple rounded-full'></div>
                    </a>

                    {/* Desktop Links */}
                    <div className='hidden md:flex space-x-10'>
                        {navLinks.map(({ label, href }) => (
                            <a key={label} href={href} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                                <span>{label}</span>
                                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className='md:hidden text-2xl cursor-pointer focus:outline-none'
                        onClick={() => setShowMenu(true)}
                        aria-label='Open menu'
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* Slide-in Mobile Menu */}
            <AnimatePresence>
                {showMenu && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key='backdrop'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden'
                            onClick={close}
                        />

                        {/* Panel */}
                        <motion.div
                            key='panel'
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className='fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-dark-200 shadow-2xl flex flex-col md:hidden'
                        >
                            {/* Panel header */}
                            <div className='flex justify-between items-center px-6 py-5 border-b border-dark-400'>
                                <span className='text-xl font-bold'>
                                    Badal<span className='text-purple'>Gupta</span>
                                </span>
                                <button onClick={close} aria-label='Close menu' className='text-2xl hover:text-purple transition'>
                                    <FaXmark />
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className='flex flex-col gap-2 px-6 py-8'>
                                {navLinks.map(({ label, href }, i) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        onClick={close}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.25 }}
                                        className='text-lg text-white/80 hover:text-purple py-3 border-b border-dark-400 transition duration-200'
                                    >
                                        {label}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
