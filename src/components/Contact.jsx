// src/components/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Hubungi Saya</h2>
      <p className="section-subtitle">
        Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk mengirim pesan.
      </p>

      <div className="form-container">
        <form action="https://formspree.io/f/xpwrgqjk" method="POST">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" placeholder="Nama Lengkap Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Alamat Email Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda di sini..." required></textarea>
          </div>
          <button type="submit" className="cta-button">Kirim Pesan</button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;