'use client';

import { motion } from 'framer-motion';
import { Gift, MapPin, Smile, Users } from 'lucide-react';

const stats = [
  {
    icon: Gift,
    number: '500+',
    label: 'Quà Tặng',
    description: 'Đã trao tặng cho trẻ em'
  },
  {
    icon: MapPin,
    number: '20+',
    label: 'Chuyến Đi',
    description: 'Đến vùng cao'
  },
  {
    icon: Smile,
    number: '1000+',
    label: 'Nụ Cười',
    description: 'Được tạo nên'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Tình Nguyện Viên',
    description: 'Đã tham gia'
  }
];

export default function ImpactStats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Tác Động Của Chúng Tôi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                <stat.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}