import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// Import HANYA gambar lokal dari folder assets
import projectImage1 from '../assets/project1.png';

// HAPUS IMPORT GAMBAR DARI UNSPLASH INI:
// import projectImage2 from 'https://images.unsplash.com/...';
// import projectImage3 from 'https://images.unsplash.com/...';

function Projects() {
    return (
        // 2. Ganti <section> menjadi motion.section dan tambahkan properti animasi
        <motion.section
            id="projects"
            className="projects-section"
            // Definisikan keadaan awal (sebelum masuk layar)
            initial={{ opacity: 0, y: 50 }}
            // Animasikan ke keadaan ini saat elemen masuk ke layar
            whileInView={{ opacity: 1, y: 0 }}
            // Atur transisi agar lebih halus
            transition={{ duration: 0.8 }}
            // `viewport` memastikan animasi hanya berjalan sekali
            viewport={{ once: true }}
        >
            <h2 className="section-title">Proyek Pilihan</h2>
            <div className="projects-grid">
                <ProjectCard
                    // Masukkan URL sebagai string biasa (dengan tanda kutip)
                    image={"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"}
                    title="Project 1"
                    description="Sensor Tangki BBM & Rekognisi Wajah"
                    link="project-detail.html"
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
                    title="Project 3"
                    description="Branding & Website Perusahaan"
                    link="#"
                />
            </div>
        </motion.section>
    );
}

export default Projects;