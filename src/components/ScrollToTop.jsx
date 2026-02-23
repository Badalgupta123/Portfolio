import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollUp}
                    className='fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-purple flex items-center justify-center shadow-lg hover:bg-purple/80 hover:scale-110 transition-transform duration-300'
                    aria-label='Scroll to top'
                >
                    <FaArrowUp className='text-white text-lg' />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTop
