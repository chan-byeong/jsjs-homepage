
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      {/* Background Kinetic Element Simulation */}
      <motion.div 
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none -z-10"
      />

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold"
      >
        Everything an artist needs to build
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none mb-8"
      >
        JSJS<br/>WORK<span className="text-outline">SHOP</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
      >
        JSJS Workshop은 아티스트들이 함께 배우고 실험하며 각자의 작업을 확장할 수 있도록 돕는 워크샵 플랫폼입니다.<br/>
        기술을 배우는 것을 넘어, 어떻게 사용할 것인지 함께 고민합니다.
      </motion.p>

      <motion.a 
        href="#aboutus"
        whileHover={{ y: 5 }}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white transition-colors">Explore</span>
        <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 40 40" fill="currentColor">
          <path d="M5.2,14.6l1.5-1.5c0.2-0.2,0.5-0.2,0.7,0l12.4,12.4l12.4-12.4c0.2-0.2,0.5-0.2,0.7,0l1.6,1.6c0.2,0.2,0.2,0.5,0,0.7L19.8,30 L5.2,15.4C5,15.2,5,14.8,5.2,14.6z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default Hero;
