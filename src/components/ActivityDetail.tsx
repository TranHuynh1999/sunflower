'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Activity } from '@/data/mockData';
import DonationTable from '@/components/DonationTable';

type ActivityDetailProps = {
  activity: Activity;
};

function parseVnd(value: string) {
  return Number(value.replace(/\D/g, '')) || 0;
}

function formatVnd(value: number) {
  return value.toLocaleString('vi-VN') + ' ₫';
}

export default function ActivityDetail({ activity }: ActivityDetailProps) {
  const totalCollected = activity.donationList.reduce((sum, donation) => sum + donation.amount, 0);
  const totalSpent = activity.financialReport.reduce((sum, item) => sum + parseVnd(item.cost), 0);
  const utilization = totalSpent === 0 ? 100 : Math.min(100, Math.round((totalCollected / totalSpent) * 100));

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Link href="/" className="font-semibold text-yellow-600 hover:underline">
              Trang chủ
            </Link>
            <span className="mx-2">›</span>
            <Link href="/activities" className="font-semibold text-yellow-600 hover:underline">
              Dự án
            </Link>
            <span className="mx-2">›</span>
            <span>{activity.title}</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            Quay về trang chủ
          </Link>
        </motion.nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[2rem] bg-white p-10 shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Báo cáo hành trình nhân ái</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">{activity.title}</h1>
          <p className="mt-4 text-sm text-gray-500">Ngày triển khai: {activity.date}</p>
          <p className="mt-6 max-w-3xl text-gray-700 leading-8">{activity.description}</p>
        </motion.header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {activity.images.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                  <Image
                    src={image}
                    alt={`${activity.title} ${index + 1}`}
                    width={760}
                    height={520}
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900">Câu chuyện chuyến đi</h2>
              <p className="mt-5 text-gray-700 leading-8 whitespace-pre-line">{activity.longStory}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900">Bảng minh bạch chi phí</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 text-left">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Hạng mục</th>
                      <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Số lượng</th>
                      <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Chi phí</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activity.financialReport.map((item) => (
                      <tr key={item.item} className="border-b border-gray-100 last:border-b-0">
                        <td className="px-4 py-4 text-sm text-gray-700">{item.item}</td>
                        <td className="px-4 py-4 text-sm text-gray-700">{item.quantity}</td>
                        <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid gap-6 md:grid-cols-3"
            >
              <div className="rounded-3xl bg-green-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Tổng quyên góp</p>
                <p className="mt-4 text-3xl font-bold text-gray-900">{formatVnd(totalCollected)}</p>
                <p className="mt-2 text-sm text-gray-600">{activity.donationList.length} nhà hảo tâm</p>
              </div>
              <div className="rounded-3xl bg-yellow-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">Tổng chi</p>
                <p className="mt-4 text-3xl font-bold text-gray-900">{formatVnd(totalSpent)}</p>
                <p className="mt-2 text-sm text-gray-600">Chi phí chuyến đi này</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-700">Tỷ lệ sử dụng</p>
                <p className="mt-4 text-3xl font-bold text-gray-900">{utilization}%</p>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full rounded-full bg-green-600" style={{ width: `${utilization}%` }} />
                </div>
              </div>
            </motion.div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Minh bạch thu chi</p>
                  <h2 className="mt-3 text-2xl font-bold text-gray-900">Xem báo cáo thu chi đầy đủ</h2>
                  <p className="mt-2 text-sm text-gray-600">Truy cập trang chi tiết để xem danh sách đóng góp và báo cáo chi phí chi tiết của chuyến đi.</p>
                </div>
                <Link
                  href={`/activities/${activity.id}/transparency`}
                  className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
                >
                  Xem chi tiết thu chi
                </Link>
              </div>
            </div>

            <DonationTable donationList={activity.donationList} tripTitle={activity.title} />
          </section>

          <aside className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Hỗ trợ hành trình</p>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Đồng hành cùng chúng tôi</h2>
              <p className="mt-4 text-gray-600 leading-7">
                Mỗi đóng góp của bạn giúp chúng tôi tiếp tục hành trình nhân ái, mang hơi ấm đến những trái tim cần hỗ trợ.
              </p>
              <div className="mt-6 space-y-4 rounded-3xl border border-gray-100 bg-yellow-50 p-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ngân hàng</p>
                  <p className="mt-2 text-base text-gray-700">Techcombank</p>
                  <p className="text-sm text-gray-600">Ngân hàng Kỹ thương Việt Nam</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Số tài khoản</p>
                  <p className="mt-2 text-base font-semibold text-gray-900">1903 2146 8040 12</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Chủ tài khoản</p>
                  <p className="mt-2 text-base font-semibold uppercase text-gray-900">NGUYEN THI ANH NGUYET</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Nội dung</p>
                  <p className="mt-2 text-base text-gray-700">Quyên góp + Tên của bạn</p>
                </div>
              </div>
              <div className="mt-6 rounded-3xl bg-white p-6 text-center">
                <div className="relative mx-auto mb-4 h-36 w-36 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
                  <Image src="/maqr.png" alt="VietQR code" fill className="object-contain" />
                </div>
                <p className="text-sm text-gray-600">Quét mã VietQR để chuyển khoản nhanh và chính xác.</p>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  );
}
