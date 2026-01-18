
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-sm border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="text-lg font-bold tracking-tight text-black flex items-center gap-2">
          JSJS <span className="w-[1px] h-4 bg-black/20" /> <span className="text-gray-400 font-medium">WORKSHOP</span>
        </a>
        
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold tracking-widest uppercase hover:text-black text-gray-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
