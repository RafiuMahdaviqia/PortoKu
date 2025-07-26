// src/pages/ProjectDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetailPage() {
  // useParams digunakan untuk mengambil parameter dari URL
  const { projectId } = useParams();

  return (
    <div style={{ padding: '120px 8%', color: 'white' }}>
      <h1>Halaman Detail untuk Proyek</h1>
      <p>ID Proyek yang di-klik adalah: {projectId}</p>
      <a href="/" style={{ color: 'cyan' }}>Kembali ke Halaman Utama</a>
    </div>
  );
}

export default ProjectDetailPage;