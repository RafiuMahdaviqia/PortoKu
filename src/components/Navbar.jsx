// src/components/Navbar.jsx

import React from 'react';

function Navbar({ onNavigate }) {
  // Buat style sederhana agar button terlihat seperti link
  const linkStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--secondary-color)',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 400,
    padding: 0,
    position: 'relative',
    textDecoration: 'none'
  };

  return (
    <header>
      <nav>
        <div className="logo">PortoKu.</div>
        <ul>
          {/* Ganti <a> menjadi <button> */}
          <li>
            <button style={linkStyle} onClick={() => onNavigate('about')}>
              Tentang Saya
            </button>
          </li>
          <li>
            <button style={linkStyle} onClick={() => onNavigate('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button style={linkStyle} onClick={() => onNavigate('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;