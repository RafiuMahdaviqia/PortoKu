// src/components/Navbar.jsx

import React from 'react';

// Terima props onNavigate
function Navbar({ onNavigate }) {
  return (
    <header>
      <nav>
        <div className="logo">PortoKu.</div>
        <ul>
          {/* Ganti href dengan onClick */}
          <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Tentang Saya</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;