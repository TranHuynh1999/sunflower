'use client';

import { motion } from 'framer-motion';
import { CreditCard, Users, CheckCircle } from 'lucide-react';

const donors = [
  'Nguyễn Văn A - 500.000 VND',
  'Trần Thị B - 1.000.000 VND',
  'Lê Văn C - 200.000 VND',
  'Phạm Thị D - 750.000 VND',
  'Hoàng Văn E - 300.000 VND'
];

export default function TransparencyDonation() {
  return (
    <section id="transparency" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Minh Bạch & Quyên Góp
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center mb-6">
              <CreditCard className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Quyên Góp Ngay</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Mọi đóng góp của bạn đều được sử dụng hiệu quả và minh bạch.
              Chúng tôi cam kết 100% số tiền quyên góp sẽ đến tay người cần giúp đỡ.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Chuyển Khoản Ngân Hàng</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Ngân hàng:</strong> Vietcombank</p>
                  <p><strong>Số tài khoản:</strong> 1234567890</p>
                  <p><strong>Chủ tài khoản:</strong> Hội Từ Thiện Hoa Hướng Dương</p>
                  <p><strong>Nội dung:</strong> Quyên góp + Tên của bạn</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Quét Mã QR</h4>
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-gray-500 text-sm">VietQR</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transparency Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Danh Sách Ủng Hộ</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Cảm ơn những tấm lòng vàng đã đồng hành cùng chúng tôi.
              Đây là danh sách các nhà hảo tâm gần đây nhất.
            </p>

            <div className="space-y-3">
              {donors.map((donor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{donor}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Minh bạch:</strong> Tất cả các giao dịch đều được công khai trên website
                và báo cáo định kỳ hàng quý.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}