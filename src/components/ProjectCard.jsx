// src/components/ProjectCard.jsx

import React from 'react';
// 1. Import Link dari react-router-dom
import { Link } from 'react-router-dom';

// Ubah props 'link' menjadi 'projectId' agar lebih jelas
function ProjectCard({ image, title, description, projectId }) {
  return (
    <article className="project-card">
      <img src={image} alt={`Gambar ${title}`} className="project-image" />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* 2. Ganti <a> dengan <Link> */}
        <Link to={`/project/${projectId}`} className="project-link">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;