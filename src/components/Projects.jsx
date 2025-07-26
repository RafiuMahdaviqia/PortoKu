// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Import gambar lokal jika ada
import projectImage1 from '../assets/project1.png';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Proyek Pilihan</h2>
      <div className="projects-grid">

        <ProjectCard
          image={projectImage1}
          title="Nama Proyek Satu"
          description="UI/UX Design & Web Development"
          // Gunakan ID yang unik dan sederhana
          projectId="proyek-satu"
        />

        <ProjectCard
          image={
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTY4MTA3NTQzNQ&ixlib=rb-4.0.3&q=80&w=400"
          }
          title="Project 2"
          description="Sensor Tangki BBM & Rekognisi Wajah"
          // Ini adalah proyek yang memiliki halaman detail
          projectId="iot-sensor"
        />

        <ProjectCard
          image={
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8MTY4MTA3NTQzNQ&ixlib=rb-4.0.3&q=80&w=400"
          }
          title="Nama Proyek Tiga"
          description="Branding & Website Perusahaan"
          projectId="proyek-tiga"
        />

      </div>
    </motion.section>
  );
}

export default Projects;