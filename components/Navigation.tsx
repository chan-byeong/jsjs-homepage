
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#aboutus' },
    { name: 'What we do', href: '#menu' },
    { name: 'Workshops', href: '#workshop' },
    { name: 'Studio', href: '#studio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-black tracking-tighter">JSJS <span className="text-gray-500">Workshop</span></a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold tracking-widest uppercase hover:text-white text-gray-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
