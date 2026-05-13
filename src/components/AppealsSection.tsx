import Image from 'next/image';
import Link from 'next/link';
import { fundraisingAppeals } from '@/data/mockData';
import type { AppealCase } from '@/data/mockData';

const formatMoney = (value: number) => value.toLocaleString('vi-VN') + ' ₫';
const getProgress = (appeal: AppealCase) => Math.min(100, Math.round((appeal.currentAmount / appeal.targetAmount) * 100));

export default function AppealsSection() {
  return (
    <section id="urgent-appeals" className="bg-gradient-to-b from-yellow-50 via-white to-red-50 px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-xl shadow-red-200/30 ring-1 ring-black/5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Danh sách kêu gọi</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Trường hợp khẩn cấp</h2>
            <p className="mt-4 text-base leading-8 text-gray-700">
              Những hoàn cảnh khó khăn cần sự giúp đỡ ngay hôm nay. Mỗi đóng góp của bạn sẽ được cập nhật minh bạch và chuyển đúng nơi cần đến.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/appeals"
              className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            >
              Xem danh sách kêu gọi
            </Link>
            <a
              href="#transparency"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
            >
              Quyên góp ngay
            </a>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {fundraisingAppeals.map((appeal) => {
            const progress = getProgress(appeal);
            return (
              <article key={appeal.id} className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-64">
                  <Image src={appeal.thumbnail} alt={appeal.title} fill className="object-cover" />
                  <div className="absolute inset-x-0 top-4 px-4">
                    <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-800">
                      {appeal.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{appeal.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{appeal.shortDescription}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                      <span>{progress}% hoàn thành</span>
                      <span className="text-slate-500">Đến hạn: {appeal.deadline}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-yellow-500 transition-all duration-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">{formatMoney(appeal.currentAmount)}</p>
                        <p>Số đã nhận</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{formatMoney(appeal.targetAmount)}</p>
                        <p>Mục tiêu</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={`/appeals/${appeal.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
                    >
                      Xem chi tiết
                    </Link>
                    <a
                      href="#transparency"
                      className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                    >
                      Quyên góp ngay
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
