
import React from 'react';
import { motion } from 'framer-motion';

const Studio: React.FC = () => {
  const tools = [
    { title: "WOODWORKING", desc: "Basic hand tools & power machines" },
    { title: "3D PRINTING", desc: "FDM printers for prototyping" },
    { title: "ELECTRONICS", desc: "Soldering, test tools, & components" },
    { title: "COMPUTING", desc: "High-spec workstations & testing kits" }
  ];

  return (
    <div className="py-40 px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-24">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-10 leading-none">Studio &<br/>Inventory</h2>
            <p className="text-gray-500 text-sm leading-loose font-medium mb-12">
              JSJS의 작업실은 아티스트가 장비의 제약 없이 자유롭게 실험할 수 있도록 설계되었습니다.<br/>
              우리는 제작의 모든 과정이 원활하게 흘러갈 수 있도록 최상의 제작 환경을 상시 유지합니다.
            </p>
            
            <div className="flex flex-col gap-1 w-full">
              {tools.map((tool, i) => (
                <div key={i} className="group border-b border-black/5 py-5 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest text-black group-hover:translate-x-2 transition-transform">{tool.title}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{tool.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-2 gap-8">
          <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="aspect-[4/5] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden"
          >
            <img src="https://picsum.photos/seed/studio3/800/1000" className="w-full h-full object-cover" alt="studio inventory" />
          </motion.div>
          <div className="flex flex-col gap-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="aspect-[4/3] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden"
            >
              <img src="https://picsum.photos/seed/studio4/800/600" className="w-full h-full object-cover" alt="studio interior" />
            </motion.div>
            <div className="flex-1 bg-black text-white p-10 flex flex-col justify-end">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-gray-500">Notice</span>
              <p className="text-sm font-medium leading-relaxed">
                워크샵 수강생은 수업 기간 동안 작업실을 자유롭게 이용할 수 있으며, 개별 장비 사용 문의는 연락처를 통해 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
