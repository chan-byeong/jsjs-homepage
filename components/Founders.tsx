
import React from 'react';
import { motion } from 'framer-motion';

const Founders: React.FC = () => {
  const founders = [
    { name: '연준성', en: 'Junsung Yon', role: 'Artist / Media, Kinetic System', img: 'https://picsum.photos/seed/artist1/600/800' },
    { name: '박정선', en: 'Sun Park', role: 'Artist / AI, Photographic, Directing', img: 'https://picsum.photos/seed/artist2/600/800' },
  ];

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4"
      >
        Mentors & Directors
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-black mb-20 tracking-tighter"
      >
        JSJS is run by:
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((founder, i) => (
          <motion.div 
            key={founder.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="overflow-hidden mb-6 aspect-[3/4] bg-gray-900 border border-white/10">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={founder.img} 
                alt={founder.name} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="border-l-2 border-white pl-6 py-2">
              <h3 className="text-2xl font-bold mb-1">
                {founder.name} <span className="text-gray-500 font-light text-lg ml-2">{founder.en}</span>
              </h3>
              <p className="text-gray-400 text-sm italic">{founder.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
