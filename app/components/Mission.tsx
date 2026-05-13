'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Leaf } from 'lucide-react';

const missions = [
  {
    icon: Heart,
    title: 'Lòng Từ Bi',
    description: 'Chúng tôi luôn đặt trái tim vào mỗi hành động, mang yêu thương chân thành đến với những người cần giúp đỡ.'
  },
  {
    icon: Eye,
    title: 'Minh Bạch',
    description: 'Mọi hoạt động và nguồn lực đều được công khai, minh bạch để cộng đồng có thể theo dõi và tin tưởng.'
  },
  {
    icon: Leaf,
    title: 'Hỗ Trợ Bền Vững',
    description: 'Chúng tôi không chỉ giúp đỡ tức thì mà còn tạo nền tảng lâu dài cho sự phát triển của cộng đồng.'
  }
];

export default function Mission() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Sứ Mệnh Của Chúng Tôi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                <mission.icon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}