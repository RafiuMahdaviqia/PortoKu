// src/components/Footer.jsx

import React, { useEffect, useState } from 'react';

function Footer() {
  // State untuk menyimpan tahun saat ini
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // useEffect untuk memastikan kode hanya berjalan sekali setelah komponen dimuat
  useEffect(() => {
    // Tidak perlu melakukan apa-apa lagi di sini karena kita sudah mengaturnya di state
  }, []);

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/RafiuMahdaviqia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/rafi-u-mahdaviqia-41b168218" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/rafiu_mahda" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://dribbble.com/RafiuMahdaviqia" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
          <i className="fa-brands fa-dribbble"></i>
        </a>
      </div>
      <p className="copyright">
        &copy; <span id="current-year">{currentYear}</span> Rafi'u Mahdaviqia. Dibuat dengan HTML, JavaScript dan CSS.
      </p>
    </footer>
  );
}

// BARIS PALING PENTING ADA DI SINI
export default Footer;