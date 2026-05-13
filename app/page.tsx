'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ActivityCard from '@/components/ActivityCard';
import AppealsSection from '@/components/AppealsSection';
import { activities, donationSummary } from '@/data/mockData';
import { flattenDonationRecords } from '@/lib/reportUtils';

const impactMetrics = [
  { value: '500+', label: 'Quà tặng', detail: 'đã trao cho trẻ em vùng cao' },
  { value: '20+', label: 'Chuyến đi', detail: 'đã tổ chức trong năm' },
  { value: '1.000+', label: 'Nụ cười', detail: 'đã lan tỏa niềm vui' }
];

export default function Home() {
  const latestTrips = activities.slice(0, 3);
  const featuredTransparencyTrip = activities[0];

  const allDonations = flattenDonationRecords(activities);
  const latestDonations = allDonations
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm">
              <Image src="/logo.png" alt="Logo Sunflower" fill className="object-contain" />
            </div>
            <div>
              <span className="text-2xl font-bold text-yellow-600 font-heading">Sunflower</span>
              <p className="text-sm text-gray-600">Hội Từ Thiện Hoa Hướng Dương</p>
            </div>
          </div>
          <nav className="hidden items-center gap-10 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-yellow-600">
              Về Chúng Tôi
            </Link>
            <Link href="/activities" className="text-sm font-medium hover:text-yellow-600">
              Chuyến Đi
            </Link>
            <Link href="#transparency" className="text-sm font-medium hover:text-yellow-600">
              Minh Bạch
            </Link>
          </nav>
          <Link
            href="#transparency"
            className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-yellow-200 transition hover:bg-yellow-600"
          >
            Quyên Góp Ngay
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-20 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Sứ mệnh hành trình nhân ái
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Lan tỏa yêu thương, <span className="text-yellow-600">thắp sáng tương lai</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl">
              Nhóm Thiện Nguyện Hoa Hướng Dương kết nối nguồn lực và trái tim để trao gửi yêu thương tới trẻ em và người cao tuổi vùng cao.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#trips"
                className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-yellow-200 transition hover:bg-yellow-600"
              >
                Xem hành trình nhân ái
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500 bg-white px-7 py-3 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-50"
              >
                Tìm hiểu sứ mệnh
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid w-full max-w-2xl gap-6 rounded-[2rem] bg-white/80 p-8 shadow-xl shadow-yellow-200/30 backdrop-blur-sm md:grid-cols-2"
          >
            <div className="rounded-3xl bg-yellow-100 p-6 text-gray-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-700">Sứ mệnh</p>
              <h2 className="mt-4 text-2xl font-bold">Hỗ trợ bền vững</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Chúng tôi xây cầu nối giữa nhà hảo tâm và cộng đồng vùng cao để tạo ra thay đổi lâu dài.
              </p>
            </div>
            <div className="rounded-3xl bg-green-50 p-6 text-gray-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-700">Tin cậy</p>
              <h2 className="mt-4 text-2xl font-bold">Minh bạch</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Báo cáo chi tiết và công khai mọi khoản chi để người ủng hộ luôn an tâm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center lg:mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Sứ mệnh nhân ái</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Hành trình nhân ái và giá trị bền vững</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {impactMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-4xl font-extrabold text-yellow-600">{metric.value}</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{metric.label}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{metric.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Tổng nhà hảo tâm</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{donationSummary.totalDonations}</p>
              <p className="mt-2 text-sm text-gray-600">Người đã đóng góp cho các chuyến đi</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Tổng quyên góp</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{donationSummary.totalCollected.toLocaleString('vi-VN')} ₫</p>
              <p className="mt-2 text-sm text-gray-600">Số tiền đã được ghi nhận và minh bạch</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">Đại diện CLB</p>
            <h3 className="mt-4 text-2xl font-bold text-gray-900 font-heading">Nguyễn Thị Ánh Nguyệt</h3>
            <p className="mt-2 text-sm text-gray-600">Chủ nhiệm CLB | Club President</p>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              Bà Nguyễn Thị Ánh Nguyệt là đại diện chính thức của CLB trên mọi trang truyền thông và bản tin quyên góp. Mọi thông tin chuyển khoản đều được xác thực bằng tài khoản ngân hàng chính thức của đại diện.
            </p>
          </div>
        </div>
      </section>

      <AppealsSection />

      <section id="trips" className="bg-white px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Chuyến đi nhân ái</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Báo cáo hành trình và cam kết minh bạch</h2>
            </div>
            <Link href="/activities" className="inline-flex rounded-full border border-yellow-500 bg-yellow-50 px-6 py-2 text-sm font-semibold text-yellow-700 transition hover:bg-yellow-100">
              Khám phá tất cả chuyến đi
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {latestTrips.map((trip) => (
              <ActivityCard key={trip.id} activity={trip} />
            ))}
          </div>
        </div>
      </section>

      <section id="transparency" className="relative overflow-hidden px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Báo cáo tài chính định kỳ</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Mỗi đóng góp được theo dõi và báo cáo minh bạch
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-gray-700">
              Nhóm Thiện Nguyện Hoa Hướng Dương cam kết công khai minh bạch mọi nguồn lực, giúp quý vị an tâm đồng hành dài hạn.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] bg-white p-8 shadow-xl shadow-green-200/40 ring-1 ring-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Đóng góp gần đây</p>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Những tấm lòng mới nhất</h3>
              <div className="mt-6 space-y-3">
                {latestDonations.map((donation, index) => (
                  <div key={index} className="rounded-xl bg-green-50 p-3">
                    <p className="text-sm font-semibold text-gray-900">{donation.donorName}</p>
                    <p className="text-sm text-gray-600">{donation.amount.toLocaleString('vi-VN')} ₫ - {donation.activityTitle}</p>
                    <p className="text-xs text-gray-500">{donation.date}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/financial-reports"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-yellow-200/50 transition hover:bg-yellow-600"
              >
                Xem báo cáo đầy đủ
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-[2rem] bg-gradient-to-r from-yellow-100 via-white to-green-100 p-8 shadow-xl shadow-yellow-200/40 ring-1 ring-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">Tài khoản chính thức</p>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Thông tin chuyển khoản</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-white p-4 ring-1 ring-yellow-200">
                  <p className="text-sm font-semibold text-gray-900">Techcombank</p>
                  <p className="mt-2 text-lg font-bold text-gray-900">1903 2146 8040 12</p>
                  <p className="mt-1 text-sm text-gray-600">NGUYEN THI ANH NGUYET</p>
                </div>
                <div className="rounded-3xl bg-yellow-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">Mã VietQR</p>
                  <div className="mt-3 relative aspect-square w-full overflow-hidden  rounded-2xl border border-gray-200 bg-gray-45">
                    <Image src="/maqr.png" alt="VietQR code" fill className="object-contain" />
                  </div>
                  <p className="mt-3 text-xs text-gray-600">Quét mã để chuyển khoản nhanh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
