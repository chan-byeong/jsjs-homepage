
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center px-8 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">
            Mentoring / Studio / Workshop
          </span>
          
          <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.9] text-black mb-10">
            EVERYTHING<br/>
            AN ARTIST<br/>
            <span className="text-gray-200">NEEDS TO BUILD.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <p className="max-w-md text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              JSJS Workshop은 아티스트들이 각자의 작업을 기술적으로 구체화하고,<br/>
              실험적인 매체를 탐구할 수 있도록 돕는 제작 전문 플랫폼입니다.
            </p>
            
            <motion.a 
              href="#workshop"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest">Explore Program</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Abstract Background Element */}
      <div className="absolute top-1/2 right-[-5%] translate-y-[-50%] opacity-[0.03] pointer-events-none">
        <h2 className="text-[40vw] font-black tracking-tighter leading-none select-none">JSJS</h2>
      </div>
    </div>
  );
};

export default Hero;
