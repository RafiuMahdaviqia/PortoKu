import React from 'react';
import ProjectCard from './ProjectCard';

// Import HANYA gambar lokal dari folder assets
import projectImage1 from '../assets/project1.png';

// HAPUS IMPORT GAMBAR DARI UNSPLASH INI:
// import projectImage2 from 'https://images.unsplash.com/...';
// import projectImage3 from 'https://images.unsplash.com/...';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-up">Proyek Pilihan</h2>
      <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
        <ProjectCard 
          image={projectImage1} // Gambar lokal tetap di-import
          title="Nama Proyek Satu"
          description="UI/UX Design & Web Development"
          link="#"
        />
        <ProjectCard 
          // Masukkan URL sebagai string biasa (dengan tanda kutip)
          image={"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTY4MTA3NTQzNQ&ixlib=rb-4.0.3&q=80&w=400"}
          title="Project 2"
          description="Sensor Tangki BBM & Rekognisi Wajah"
          link="project-detail.html" 
        />
        <ProjectCard 
          // Masukkan URL sebagai string biasa (dengan tanda kutip)
          image={"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8MTY4MTA3NTQzNQ&ixlib=rb-4.0.3&q=80&w=400"}
          title="Nama Proyek Tiga"
          description="Branding & Website Perusahaan"
          link="#"
        />
      </div>
    </section>
  );
}

export default Projects;