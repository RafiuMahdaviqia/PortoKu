// src/components/Hero.jsx

import React from 'react';
// 1. Import 'motion' dari framer-motion
import { motion } from 'framer-motion';

function Hero() {
  return (
    // 2. Ganti tag <section> menjadi motion.section
    <motion.section 
      className="hero"
      // Tambahkan animasi untuk container
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.8 } }
      }}
    >
      {/* 3. Ganti setiap elemen yang ingin dianimasikan menjadi motion.h1, motion.p, dst. */}
      <motion.h1 
        className="hero-title"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }
        }}
      >
        Rafi'u Mahdaviqia
      </motion.h1>
      
      <motion.p 
        className="hero-subtitle"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        Frontend Developer & Backend Developer
      </motion.p>
      
      <motion.a 
        href="#projects" 
        className="cta-button"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        Lihat Karya Saya
      </motion.a>
    </motion.section>
  );
}

export default Hero;