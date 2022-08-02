import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { letter, word, transition, visibleNav, visibleNavChildren } from '../Utils/anim';

const listTransition = {
  duration: .5,
  ease: "easeInOut"
}

export default function Navbar() {
  const [open, setOpen] = useState(window.innerWidth < 768 ? false : true);  

  return (
    <header className="bg-transparent py-8 px-4 md:px-8 lg:px-16 flex items-center justify-between w-full">
      <div className="flex md:contents justify-between items-center w-full md:w-fit z-10">
        <h1 className="text-2xl font-bold">
          {
            'Auctioneer'.split('').map(
              (char, index) => (
                <motion.div
                  key={char + "-" + index}
                  custom={index}
                  variants={letter}
                  initial='initial'
                  animate='visible'
                  className="inline-block text-white"
                >
                  {char}
                </motion.div>
              )
            )
          }
        </h1>
        {/* <h1 className="text-2xl gradient-text font-bold inline-block">
          {
            'Auctioneer'.split('').map(
              (char, index) => (
                <motion.div
                  key={char + "-" + index}
                  variants={letter}
                  initial='initial'
                  animate='visible'
                  transition={{
                    delay: index * 0.25,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.div>
              )
            )
          }
        </h1> */}
        <button aria-label='navbar toggle' className="md:hidden text-gold" onClick={() => setOpen(prevState => !prevState)}>
          {
            !open ?
              <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
              </svg>
              :
              <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" strokeWidth="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
              </svg>
          }
        </button>
      </div>

      <nav className={`absolute top-0 left-0 md:static flex flex-col md:flex-row justify-center md:[justify-content:unset] items-center w-full md:w-fit ${!open ? 'hidden' : ''} text-center text-white font-semibold tracking-widest`}>
        <motion.ul variants={visibleNav} initial="initial" animate="visible" className="flex md:space-x-8 lg:space-x-16">
          <motion.li variants={visibleNavChildren} transition={listTransition} className="active-link">
            Home
          </motion.li>
          <motion.li variants={visibleNavChildren} transition={listTransition}>
            NFTs
          </motion.li>
          <motion.li variants={visibleNavChildren} transition={listTransition}>
            Relics
          </motion.li>
          <motion.li variants={visibleNavChildren} transition={listTransition}>
            Projects
          </motion.li>
        </motion.ul>
      </nav>

      <button className="button-primary button polygon py-2 px-5 text-black font-[600]">
        Explore
      </button>
    </header>
  )
}
