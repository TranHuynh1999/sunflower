'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function DonationModal() {
  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-yellow-200/40 ring-1 ring-black/5 max-w-3xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 font-heading">Thông tin quyên góp</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-heading">Tài khoản chính thức của CLB</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Mọi khoản đóng góp qua tài khoản dưới đây đều được xác thực bởi đại diện chính thức của CLB.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-200">
            <CheckCircle className="h-5 w-5" />
            Verified Account
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-yellow-50 p-6 ring-1 ring-yellow-200">
            <p className="text-sm font-semibold text-gray-900">Ngân hàng</p>
            <p className="mt-3 text-xl font-bold text-gray-900">Techcombank</p>
            <p className="mt-1 text-sm text-gray-600">Ngân hàng Kỹ thương Việt Nam</p>
          </div>
          <div className="rounded-3xl bg-green-50 p-6 ring-1 ring-green-200">
            <p className="text-sm font-semibold text-gray-900">Chủ tài khoản</p>
            <p className="mt-3 text-xl font-bold uppercase text-gray-900">NGUYEN THI ANH NGUYET</p>
            <p className="mt-1 text-sm text-gray-600">Club President</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <p className="text-sm font-semibold text-gray-900">Số tài khoản</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">1903 2146 8040 12</p>
          <p className="mt-4 text-sm text-gray-600">Nội dung chuyển khoản: Quyên góp + Tên của bạn</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-gray-900">Mã VietQR</h3>
            <p className="text-sm text-gray-600">Quét mã để chuyển khoản nhanh chóng và chính xác.</p>
            <div className="space-y-2 rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Đại diện</p>
              <p className="text-sm text-gray-600">Nguyễn Thị Ánh Nguyệt</p>
              <p className="text-sm text-gray-600">Liên hệ: 0354420472</p>
              <p className="text-sm text-gray-600">Email: nhomthiennguyenhoahuongduong@gmail.com</p>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-4">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-300 via-transparent to-green-400" />
            <div className="relative h-full w-full">
              <Image src="/maqr.png" alt="VietQR code" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
