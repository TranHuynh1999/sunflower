'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Lan tỏa yêu thương,<br />
          <span className="text-yellow-600">Thắp sáng hy vọng</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          Chúng tôi mang niềm vui và sự hỗ trợ đến trẻ em vùng cao và người già cô đơn,
          tạo nên những nụ cười và hy vọng mới.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg">
            Tham Gia Với Chúng Tôi
          </button>
          <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors">
            Tìm Hiểu Thêm
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
}