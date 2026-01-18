
import React from 'react';
import { motion } from 'framer-motion';

const Workshop: React.FC = () => {
  return (
    <div className="py-40 px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-32">
        <h2 className="text-7xl font-bold tracking-tighter uppercase mb-6">Program</h2>
        <div className="w-16 h-[2px] bg-black mx-auto"></div>
      </div>

      <div className="space-y-40">
        {/* Basic Program */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase tracking-widest">Level 01</span>
                <span className="w-10 h-[1px] bg-black/10"></span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Basic Course</span>
              </div>
              
              <h3 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
                제작을 위한<br/>첫걸음: 기초과정
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed mb-10 font-medium">
                센서, 모터, 아두이노를 포함한 전기적 제어 방식과 3D프린팅을 활용한 기계적 설계의 기초를 다룹니다. 도구를 익히고 자신의 언어로 변환하는 과정을 경험합니다.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "기초 전기전자 및 아두이노",
                  "모터 제어 메커니즘",
                  "3D 모델링 및 출력 실습",
                  "메커니즘 설계 기초"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <span className="text-sm font-bold text-black/80">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:opacity-50 transition-all">
                Detail & Apply
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gray-50 border border-black/5 overflow-hidden">
               <img src="https://picsum.photos/seed/workshop1/1000/750" className="w-full h-full object-cover grayscale opacity-80" alt="workshop" />
            </div>
          </div>
        </div>

        {/* Advanced Program */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="aspect-[4/3] bg-gray-50 border border-black/5 overflow-hidden">
               <img src="https://picsum.photos/seed/workshop2/1000/750" className="w-full h-full object-cover grayscale opacity-80" alt="workshop" />
            </div>
          </div>

          <div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase tracking-widest">Level 02</span>
                <span className="w-10 h-[1px] bg-black/10"></span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Advanced Lab</span>
              </div>
              
              <h3 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
                작업의 확장:<br/>심화과정 및 실전
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed mb-10 font-medium">
                이미 진행 중인 개인의 작업을 기술적으로 고도화합니다. 소수 정예로 운영되며, 매주 각자의 작업 진행 상황을 공유하고 기술적 피드백을 주고받는 랩 형식으로 진행됩니다.
              </p>

               <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "1:1 기술 컨설팅",
                  "고도화된 파이썬 제어",
                  "복합 메커니즘 제작",
                  "인터랙션 기획 및 구현"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <span className="text-sm font-bold text-black/80">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:opacity-50 transition-all">
                Detail & Apply
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
