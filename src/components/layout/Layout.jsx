// src/components/layout/Layout.jsx
import Navbar from './navbar';
import Footer from './footer';
import ParticleNetwork from '../common/ParticleNetwork';

const Layout = ({ children }) => {
  return (
    <>
      {/* Dark base behind the canvas */}
      <div className="fixed inset-0 -z-20 bg-[#0B0E14]" />

      <ParticleNetwork />

      <Navbar />
      <main className="relative min-h-screen pt-16 grid-overlay">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;