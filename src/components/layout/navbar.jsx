// src/components/layout/navbar.jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-[#0B0E14]/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="font-serif text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
            Aaron
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#work" className="text-sm text-slate-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-slate-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contributions" className="text-sm text-slate-400 hover:text-white transition-colors">
              Leadership
            </a>
            <a
              href="#contact"
              className="text-sm bg-amber-500 text-[#0B0E14] px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-[#0B0E14]/95 backdrop-blur-sm border-t border-slate-800 px-6 py-4">
          <div className="flex flex-col space-y-3">
            <a href="#about" onClick={handleLinkClick} className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#work" onClick={handleLinkClick} className="text-slate-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" onClick={handleLinkClick} className="text-slate-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contributions" onClick={handleLinkClick} className="text-slate-400 hover:text-white transition-colors">
              Leadership
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-amber-500 font-medium hover:text-amber-400 transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;