// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/ktm.jpg';

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Tentang Saya</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Foto Profil Rafi'u Mahdaviqia" />
        </div>
        <div className="about-text">
          <h3>Halo, Saya Rafi'u Mahdaviqia</h3>
          <p>
            Saya adalah seorang Frontend Developer dengan gairah untuk menciptakan pengalaman pengguna yang
            bersih, fungsional, dan menarik secara visual. Saya percaya bahwa detail kecil dapat membuat
            perbedaan besar, dan saya selalu berusaha untuk menulis kode yang efisien dan dapat dipelihara.
          </p>
          <p>
            Di luar coding, saya suka menjelajahi tren desain baru dan berkontribusi pada proyek
            open-source.
          </p>
          <h4>Keahlian Utama:</h4>
          <div className="skills-list">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3 & SASS</span>
            <span className="skill-tag">JavaScript (ES6+)</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">GSAP</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Git & GitHub</span>
          </div>
          <div className="about-buttons">
            <a href="/path-ke-cv-anda.pdf" target="_blank" className="cta-button">Lihat CV</a>
            <a href="/path-ke-porto-anda.pdf" target="_blank" className="cta-button">Lihat Porto</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;