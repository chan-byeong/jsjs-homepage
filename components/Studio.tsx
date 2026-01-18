
import React from 'react';
import { motion } from 'framer-motion';

const Studio: React.FC = () => {
  const categories = [
    {
      title: "Wood & Fabrication",
      desc: "목공 작업을 위한 기본 수공구 및 전동 공구, 가공을 위한 넓은 테이블"
    },
    {
      title: "3D Printing",
      desc: "Bamboo Lab 3D 프린터, 구조 테스트 및 부품 제작용 출력 환경"
    },
    {
      title: "Electronics",
      desc: "다양한 전압의 파워 서플라이, 납땜 및 센서, 모터 테스트 환경"
    },
    {
      title: "Prototyping",
      desc: "구조와 전기 시스템을 동시에 테스트할 수 있는 쾌적한 세팅"
    }
  ];

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/2 sticky top-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 uppercase tracking-widest text-[10px] font-black mb-4"
          >
            Fabrication Space
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-black tracking-tighter mb-8"
          >
            Studio & Tool<br/>
            <span className="text-gray-600 font-light text-4xl">작업실 · 장비</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 leading-relaxed font-light italic"
          >
            JSJS 작업실은 아이디어를 바로 손으로 옮길 수 있는 제작 중심의 환경을 갖추고 있습니다. 단순히 장비를 빌려주는 곳이 아닌, '실제로 만들어지는 공간'입니다.
          </motion.p>
          
          <div className="space-y-12 mt-16">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{cat.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-12 text-xs text-gray-600 border-l border-white/20 pl-4 py-2">
            * 장비 사용은 워크샵 수강생 또는 사전 협의를 통해 진행됩니다.
          </p>
        </div>

        <div className="lg:w-1/2 space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-gray-900 border border-white/10 group overflow-hidden"
          >
            <img src="https://picsum.photos/seed/studio1/800/800" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt="studio" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] bg-gray-900 border border-white/10 group overflow-hidden"
          >
            <img src="https://picsum.photos/seed/studio2/800/1000" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt="studio" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
