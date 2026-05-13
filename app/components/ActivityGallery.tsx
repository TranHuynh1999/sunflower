'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const activities = [
  {
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
    title: 'Chuyến Đi Vùng Cao',
    description: 'Mang quà và niềm vui đến trẻ em bản làng'
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
    title: 'Hỗ Trợ Người Già',
    description: 'Thăm hỏi và chăm sóc người già cô đơn'
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    title: 'Giáo Dục Và Phát Triển',
    description: 'Xây dựng trường học và cung cấp vật dụng học tập'
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    title: 'Phát Triển Cộng Đồng',
    description: 'Hợp tác với địa phương để cải thiện cuộc sống'
  }
];

export default function ActivityGallery() {
  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Hoạt Động Của Chúng Tôi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{activity.title}</h3>
                  <p className="text-sm opacity-90">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}