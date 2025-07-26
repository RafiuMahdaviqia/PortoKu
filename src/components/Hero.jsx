// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Hero({ onNavigate }) {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } }
      }}
    >
      <motion.h1
        className="hero-title"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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

      {/* Perhatikan bagian onClick di bawah ini */}
      <motion.a
        href="#projects"
        className="cta-button"
        onClick={(e) => {
          e.preventDefault(); // Mencegah navigasi oleh router
          onNavigate('projects'); // Menjalankan fungsi scroll
        }}
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