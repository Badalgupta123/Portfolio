import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const formData = new FormData(e.target);

    fetch("https://getform.io/f/lbjnkrkb", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
      .then(response => {
        console.log(response);
        setStatusMessage('Your message has been sent successfully! 🚀 Thank you for reaching out.');
        setLoading(false);
        e.target.reset();
      })
      .catch(error => {
        console.log(error);
        setStatusMessage('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-3'>
          Get In <span className='text-purple'>Touch</span>
        </h2>
        <div className='section-title-bar'></div>
        <p className='text-gray-400 text-center max-w-2xl mx-auto -mt-8 mb-16'>
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                <input
                  name='user_name'
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 input-glow'
                  type='text'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                <input
                  name='user_email'
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 input-glow'
                  type='email'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>Message you want to drop</label>
                <textarea
                  name='message'
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 input-glow'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full px-6 py-3 bg-gradient-to-r from-purple to-pink rounded-lg font-medium hover:opacity-90 transition duration-300 disabled:opacity-60'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              {statusMessage && (
                <p className='text-center mt-2 text-gray-200'>{statusMessage}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-8'>
            {/* Location */}
            <div
              className='flex items-start cursor-pointer'
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Rewa,India', '_blank', 'noopener,noreferrer')}
              role='link'
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://www.google.com/maps/search/?api=1&query=Rewa,India', '_blank', 'noopener,noreferrer') }}
            >
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Rewa, India</p>
              </div>
            </div>

            {/* Email */}
            <div
              className='flex items-start cursor-pointer'
              onClick={() => window.open('mailto:badalgupta0199@gmail.com', '_blank', 'noopener,noreferrer')}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('mailto:badalgupta0199@gmail.com', '_blank', 'noopener,noreferrer') }}
            >
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>badalgupta0199@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div
              className='flex items-start cursor-pointer'
              onClick={() => { window.location.href = 'tel:+919993922610' }}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = 'tel:+919993922610' }}
            >
              <div className='text-purple text-2xl mr-4'>
                <FaPhone />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91-9993922610</p>
              </div>
            </div>

            {/* Social Links */}
            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a href='https://github.com/Badalgupta123' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-gray-400 transition duration-300'>
                  <FaGithub />
                </a>

                <a href='https://www.linkedin.com/in/badal-gupta123/' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-sky-600 transition duration-300'>
                  <FaLinkedin />
                </a>

                <a href='https://www.instagram.com/badalgupta123/' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-pink transition duration-300'>
                  <FaInstagram />
                </a>

                {/* <a href='https://www.facebook.com/profile.php?id=61577075206852' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-blue transition duration-300'>
                  <FaFacebook />
                </a>

                <a href='https://x.com/Shivend94879023' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:text-white hover:bg-black transition duration-300'>
                  <FaX />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
