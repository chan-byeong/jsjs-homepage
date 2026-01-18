
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Menu from './components/Menu';
import Workshop from './components/Workshop';
import Studio from './components/Studio';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="aboutus">
          <Founders />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="workshop">
          <Workshop />
        </section>

        <section id="studio">
          <Studio />
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 JSJS Workshop. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
