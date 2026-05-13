import Image from 'next/image';
import Link from 'next/link';
import { fundraisingAppeals } from '@/data/mockData';

const formatMoney = (value: number) => value.toLocaleString('vi-VN') + ' ₫';
const getProgress = (current: number, target: number) => Math.min(100, Math.round((current / target) * 100));

export default function AppealsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-16 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-yellow-200/40 ring-1 ring-black/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Danh sách kêu gọi</p>
              <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">Xem tất cả trường hợp cần giúp đỡ</h1>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Những lời kêu gọi cấp bách được Sunflower tập trung hỗ trợ với thông tin minh bạch và cập nhật sát thực.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 px-6 py-3 text-sm font-semibold text-yellow-800 transition hover:bg-yellow-100"
            >
              Quay về trang chủ
            </Link>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {fundraisingAppeals.map((appeal) => {
            const progress = getProgress(appeal.currentAmount, appeal.targetAmount);
            return (
              <article key={appeal.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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
                    <h2 className="text-xl font-bold text-gray-900">{appeal.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{appeal.shortDescription}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                      <span>{progress}% hoàn thành</span>
                      <span className="text-slate-500">Hạn: {appeal.deadline}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-yellow-500" />
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

                  <Link
                    href={`/appeals/${appeal.id}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-green-200/30 ring-1 ring-black/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Gợi ý tương tự</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Bộ lọc thông tin giống “Chuyến đi nhân ái”</h2>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Mỗi trường hợp kêu gọi đều được trình bày rõ ràng, cảm xúc và có tính minh bạch giống như phần Chuyến đi nhân ái của chúng tôi.
              </p>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center rounded-full border border-green-300 bg-green-50 px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-100"
            >
              Xem hành trình nhân ái
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
