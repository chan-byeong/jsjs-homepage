
import React from 'react';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  const services = [
    { title: 'Workshops', sub: '기초부터 심화까지 아우르는 제작 워크샵', href: '#workshop' },
    { title: 'Studio & Equipment', sub: '3D 프린터, 목공 및 전자공학 툴 지원', href: '#studio' },
    { title: 'Mentoring', sub: '작가의 프로젝트 기술적 고민 해결 및 멘토링', href: '#' },
    { title: 'Collaboration', sub: '융합 예술 프로젝트 협업 및 외주 제작', href: '#' },
  ];

  return (
    <div className="py-40 px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl font-bold tracking-tighter leading-none mb-10">CORE<br/>VALUES</h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium mb-6">
              기술은 도구일 뿐이지만,<br/>
              도구를 다루는 방식은 예술이 됩니다.
            </p>
            <p className="text-sm text-gray-400 leading-loose max-w-sm">
              JSJS는 아티스트가 자신의 상상력을 물리적인 형태로 구현하는 모든 과정에서 발생하는 기술적 진입장벽을 허무는 데 집중합니다.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-black/10">
            {services.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/10 hover:bg-black hover:text-white hover:px-6 transition-all duration-500"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-gray-500">0{i + 1}</span>
                  <h3 className="text-3xl font-bold tracking-tight uppercase">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 mt-2 md:mt-0 font-medium">{service.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
