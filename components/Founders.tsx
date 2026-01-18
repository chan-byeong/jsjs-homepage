
import React from 'react';
import { motion } from 'framer-motion';

const Founders: React.FC = () => {
  const founders = [
    { name: '연준성', en: 'Junsung Yon', role: 'Artist / Media, Kinetic System', img: 'https://picsum.photos/seed/artist1/800/1000' },
    { name: '박정선', en: 'Sun Park', role: 'Artist / AI, Photographic, Directing', img: 'https://picsum.photos/seed/artist2/800/1000' },
  ];

  return (
    <div className="py-32 px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4 border-b border-black/5 pb-10">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">Mentors</h2>
        <p className="text-gray-400 text-sm max-w-sm">전문적인 필드에서 활동하는 작가들이 직접 여러분의 프로젝트를 멘토링합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
        {founders.map((founder, i) => (
          <div key={founder.name} className="bg-white p-8 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col gap-10"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={founder.img} 
                  alt={founder.name} 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight">{founder.name}</h3>
                  <span className="text-gray-300 font-medium text-lg tracking-tight uppercase">{founder.en}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{founder.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
