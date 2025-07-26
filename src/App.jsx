// src/App.jsx

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext,
} from "react-router-dom";

// Import komponen dan halaman
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from "./pages/ProjectDetailPage";

// Layout utama yang berisi Navbar, Footer, dan tempat untuk konten (Outlet)
const Layout = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <main>
        <Outlet context={{ onNavigate: scrollToSection }} />
      </main>
      <Footer />
    </>
  );
};

// Komponen khusus untuk halaman utama
const HomePage = () => {
  const { onNavigate } = useOutletContext();
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

// Konfigurasi semua rute aplikasi
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/project/:projectId",
        element: <ProjectDetailPage />,
      },
    ],
  },
]);

// Komponen App utama yang merender router
function App() {
  return <RouterProvider router={router} />;
}

export default App;