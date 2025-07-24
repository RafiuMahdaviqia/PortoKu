import React from 'react';

// Pastikan nama fungsi adalah "Contact"
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-up">Hubungi Saya</h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk mengirim pesan.
      </p>

      <div className="form-container" data-aos="fade-up" data-aos-delay="200">
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
    </section>
  );
}

// PASTIKAN BARIS INI ADA DI PALING BAWAH DAN TULISANNYA BENAR
export default Contact;