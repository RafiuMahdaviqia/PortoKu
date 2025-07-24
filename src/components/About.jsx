import React from "react";
import ProfileImage from '../assets/ktm.jpeg';

function About(params) {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title" data-aos="fade-up">Tentang Saya</h2>
            <div>
                <div className="about-content">
                    <div className="about-image" data-aos="fade-right" data-aos-delay="200">
                        <img src="{ProfileImage}" alt="Foto Profil Rafi'u Mahdaviqia" />
                    </div>
                </div>
                <div className="about-text" data-aos="fade-left" data-aos-delay="400">
                    <h3>Halo, Saya Rafi'u Mahdaviqia</h3>
                    <p>
                        Saya adalah seorang Fullstack Developer dengan gairah untuk menciptakan pengalaman pengguna yang
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
                        <span className="skill-tag">NextJS</span>
                        <span className="skill-tag">PHP</span>
                        <span className="skill-tag">Laravel</span>
                        <span className="skill-tag">GSAP</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Framer</span>
                        <span className="skill-tag">Git & GitHub</span>
                    </div>
                    <div className="about-buttons">
                        <a href="/path-ke-cv-anda.pdf" target="blank" className="cta-button">Lihat CV</a>
                        <a href="/path-ke-porto-anda.pdf" target="blank" className="cta-button">Lihat Porto</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;