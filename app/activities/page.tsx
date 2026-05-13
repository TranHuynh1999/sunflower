"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import ActivityCard from '@/components/ActivityCard';
import { activities } from '@/data/mockData';

const categories = ['Tất cả', 'Trẻ em', 'Người già'];

export default function ActivitiesArchivePage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredActivities = useMemo(() => {
    if (activeCategory === 'Tất cả') {
      return activities;
    }
    return activities.filter((activity) => activity.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-16 md:px-8 text-slate-700">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Bộ sưu tập dự án</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
              Hành trình nhân ái
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Quay về trang chủ
          </Link>
        </div>

        <section className="mb-10 rounded-[2rem] bg-white/80 p-10 shadow-xl shadow-yellow-200/40 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Bộ sưu tập dự án</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-heading">
                Hành trình nhân ái
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                Khám phá các dự án nhân ái của chúng tôi, nơi mỗi hành trình được tổ chức với tinh thần minh bạch, trách nhiệm và cam kết hỗ trợ dài hạn.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-green-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Đang hiển thị</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{filteredActivities.length}</p>
              <p className="mt-2 text-sm text-gray-600">hành trình phù hợp với bộ lọc hiện tại.</p>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Bộ lọc</p>
              <p className="mt-2 text-sm text-slate-600">Chọn chủ đề để tìm hành trình nhân ái phù hợp với bạn.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-200/40'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-yellow-300 hover:text-yellow-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {filteredActivities.map((trip) => (
            <ActivityCard key={trip.id} activity={trip} />
          ))}
        </section>

        {filteredActivities.length === 0 ? (
          <div className="mt-12 rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Không tìm thấy dự án phù hợp.</p>
            <p className="mt-3 text-slate-600">Vui lòng thử lại với bộ lọc khác.</p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
