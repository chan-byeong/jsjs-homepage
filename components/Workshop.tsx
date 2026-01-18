
import React from 'react';
import { motion } from 'framer-motion';

const Workshop: React.FC = () => {
  return (
    <div className="py-32 bg-white text-black min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-[12vw] font-black leading-none tracking-tighter text-center uppercase mb-20"
        >
          Workshops
        </motion.h2>

        {/* Basic Program */}
        <div id="basic" className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 border-t border-black/10">
          <div>
            <span className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Level 01</span>
            <h3 className="text-5xl font-black tracking-tighter mb-4">
              Basic Program<br/>
              <span className="text-gray-400 font-light text-3xl">기초반</span>
            </h3>
            <p className="text-xl font-bold mb-6">미디어 · 키네틱 작업을 위한 전기적 제어와 기계적 설계의 기초를 다룹니다.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              센서, 모터, 아두이노를 포함한 전기적 제어 방식과 3D프린팅, 구조설계 등 기계적 설계의 기본을 함께 다룹니다. 최종적으로 그 방식들을 융합하고 응용하여 설계언어를 익히는 과정입니다.
            </p>
            
            <ul className="space-y-3 mb-12">
              {[
                "전기적 제어의 기본 구조 (아두이노, 센서, 모터)",
                "아날로그 / 디지털, PWM 개념",
                "AC / DC / 서보 / 스텝모터등 모터 종류별 차이",
                "외부 전원, MOSFET 등 실무 기초 지식",
                "3D 프린팅을 고려한 구조 설계",
                "링크, 기어, 베어링 등 기본 메커니즘"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-800 border-b border-black/5 pb-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-8 border border-black/5 rounded-sm mb-8">
              <h4 className="font-black text-xs uppercase tracking-widest mb-4">Operations</h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div>
                  <p className="text-gray-400 mb-1">Duration</p>
                  <p>10회 (5주 커리큘럼)</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Capacity</p>
                  <p>10명 이하</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Price</p>
                  <p>200,000₩ (재료비 포함)</p>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-black text-white font-black text-lg hover:bg-gray-800 transition-colors uppercase tracking-widest flex items-center justify-center gap-4">
              Apply Now
              <svg className="w-6 h-6" viewBox="0 0 40 40" fill="currentColor">
                 <path d="M38.2,11.5l-20,20c0,0,0,.1-.1.2l-2.4,2.4s0,0-.2.1h-.1c-.1.2-.2.2-.4.2-.2,0-.3,0-.4-.1h-.1c0-.1-.1-.2-.2-.2l-2.4-2.4s0,0-.1-.2L1.8,21.5c-.2-.2-.1-.7.2-1.1l2.4-2.4c.4-.4.9-.5,1.1-.2l9.5,9.5L34.5,7.7c.2-.2.7-.1,1.1.2l2.4,2.4c.4.4.5.9.2,1.1Z"/>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-gray-100 border border-black/10 overflow-hidden group">
              <img src="https://picsum.photos/seed/basic1/500/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="workshop" />
            </div>
            <div className="pt-20">
              <div className="bg-gray-100 border border-black/10 overflow-hidden h-[calc(100%-80px)] group">
                <img src="https://picsum.photos/seed/basic2/500/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="workshop" />
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Program */}
        <div id="advanced" className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 border-t border-black/10">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="pt-20">
               <div className="bg-gray-100 border border-black/10 overflow-hidden h-[calc(100%-80px)] group">
                <img src="https://picsum.photos/seed/adv1/500/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="workshop" />
              </div>
            </div>
            <div className="bg-gray-100 border border-black/10 overflow-hidden group">
              <img src="https://picsum.photos/seed/adv2/500/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="workshop" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Level 02</span>
            <h3 className="text-5xl font-black tracking-tighter mb-4">
              Advanced Program<br/>
              <span className="text-gray-400 font-light text-3xl">심화반</span>
            </h3>
            <p className="text-xl font-bold mb-6">각자의 작업에 기술을 적용하고 피드백하는 실천 중심 프로그램입니다.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              기초 강의보다 토론, 질의 및 적용 과정에 더 많은 비중을 둡니다. 이미 작업을 하고 있거나, 기술을 자신의 작업에 어떻게 적용할지 고민 중인 아티스트를 대상으로 합니다.
            </p>
            
            <ul className="space-y-3 mb-12">
              {[
                "개인 작업 소개 및 기술적 고민 공유",
                "작업에 필요한 기술 선택과 구조 설계",
                "파이썬과 터치디자이너 응용 시스템 자체 개발",
                "전기, 기계, 미디어 요소의 적용 전략 토론",
                "참여자 간 피드백 세션"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-800 border-b border-black/5 pb-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-8 border border-black/5 rounded-sm mb-8">
               <h4 className="font-black text-xs uppercase tracking-widest mb-4">Operations</h4>
               <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div>
                  <p className="text-gray-400 mb-1">Format</p>
                  <p>발표 + 피드백 중심</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Capacity</p>
                  <p>5명 이하 소수정예</p>
                </div>
              </div>
            </div>

             <button className="w-full py-6 bg-black text-white font-black text-lg hover:bg-gray-800 transition-colors uppercase tracking-widest flex items-center justify-center gap-4">
              Apply Now
              <svg className="w-6 h-6" viewBox="0 0 40 40" fill="currentColor">
                 <path d="M38.2,11.5l-20,20c0,0,0,.1-.1.2l-2.4,2.4s0,0-.2.1h-.1c-.1.2-.2.2-.4.2-.2,0-.3,0-.4-.1h-.1c0-.1-.1-.2-.2-.2l-2.4-2.4s0,0-.1-.2L1.8,21.5c-.2-.2-.1-.7.2-1.1l2.4-2.4c.4-.4.9-.5,1.1-.2l9.5,9.5L34.5,7.7c.2-.2.7-.1,1.1.2l2.4,2.4c.4.4.5.9.2,1.1Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
