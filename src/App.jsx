// src/App.jsx

// 1. PASTIKAN SEMUA KOMPONEN DI-IMPORT DI SINI
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 2. PASTIKAN SEMUA KOMPONEN DIPANGGIL DI DALAM RETURN
    <>
    {/* Teruskan fungsi scrollToSection ke Navbar */}
      <Navbar onNavigate={scrollToSection} />
      <main>
        <Hero />
        <div id="projects"><Projects /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;