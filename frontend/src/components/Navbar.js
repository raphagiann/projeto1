import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            ModernSite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-primary' : 'text-gray-700'} hover:text-primary transition`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-primary' : 'text-gray-700'} hover:text-primary transition`}>
              Sobre
            </Link>
            <Link to="/services" className={`${isActive('/services') ? 'text-primary' : 'text-gray-700'} hover:text-primary transition`}>
              Serviços
            </Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-primary' : 'text-gray-700'} hover:text-primary transition`}>
              Contato
            </Link>
            <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Sobre</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Serviços</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contato</Link>
            <Link to="/login" className="block px-3 py-2 bg-primary text-white rounded">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
