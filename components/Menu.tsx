
import React from 'react';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  const services = [
    { title: 'Workshops', sub: '워크샵', href: '#workshop' },
    { title: 'Studio & Tool', sub: '작업실 · 장비', href: '#studio' },
    { title: 'Commission & Collaboration', sub: '외주 · 협업', href: '#' },
    { title: 'Community', sub: '커뮤니티', href: '#' },
    { title: 'Contact', sub: '문의', href: '#' },
  ];

  return (
    <div className="min-h-screen py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-8xl font-black tracking-tighter mb-8 leading-none"
          >
            What<br/>We Do?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-xl leading-relaxed space-y-4 max-w-md"
          >
            <span className="block italic">"워크샵을 중심으로 제작 환경과 기술적 지원, 그리고 작업을 매개로 한 커뮤니티를 운영합니다."</span>
            <span className="block font-light text-sm">아티스트의 작업 과정 전반을 연결하는 여러 진입점을 제공합니다.</span>
          </motion.p>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-white/10 py-8 flex items-end justify-between hover:px-4 transition-all"
            >
              <div>
                <span className="text-gray-600 font-black mr-4 text-xs">0{i + 1}</span>
                <span className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-white text-gray-300 transition-colors uppercase">
                  {service.title}
                </span>
                <p className="text-gray-500 text-sm mt-2">{service.sub}</p>
              </div>
              <span className="text-4xl font-light text-white group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
