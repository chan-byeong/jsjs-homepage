import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
    restDelta: 0.001,
  });

  return (
    <div className='relative min-h-screen selection:bg-black selection:text-white'>
      {/* Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left'
        style={{ scaleX }}
      />

      <Navigation />

      <main className='pt-20'>
        <section id='home' className='border-b border-black/10'>
          <Hero />
        </section>

        <section id='aboutus' className='bg-white border-b border-black/10'>
          <Founders />
        </section>

        <section id='menu' className='bg-[#fafafa] border-b border-black/10'>
          <Menu />
        </section>

        <section id='workshop' className='bg-white border-b border-black/10'>
          <Workshop />
        </section>

        <section id='studio' className='bg-[#f2f2f2]'>
          <Studio />
        </section>
      </main>

      <footer className='py-20 px-8 bg-white border-t border-black/10 text-xs tracking-tight text-gray-400 font-medium'>
        <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>
          <div>
            <p className='text-black font-bold mb-4'>JSJS WORKSHOP</p>
            <p className='mb-1 text-gray-500 italic'>Everything an artist needs to build.</p>
            <p>© 2024 JSJS Workshop. Built for creators.</p>
          </div>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-2'>
              <span className='text-black font-bold uppercase tracking-widest mb-2'>Social</span>
              <a href='#' className='hover:text-black transition-colors'>
                Instagram
              </a>
              <a href='#' className='hover:text-black transition-colors'>
                Vimeo
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-black font-bold uppercase tracking-widest mb-2'>Contact</span>
              <a href='mailto:info@jsjs.art' className='hover:text-black transition-colors'>
                info@jsjs.art
              </a>
              <p>Seoul, KR</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
