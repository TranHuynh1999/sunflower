import Image from 'next/image';
import Link from 'next/link';
import type { Activity } from '@/data/mockData';

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={activity.images[0]}
          alt={activity.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            {activity.category}
          </span>
          <span className="text-sm text-green-600 font-semibold">{activity.date}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{activity.title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{activity.description}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            href={`/activities/${activity.id}`}
            className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600"
          >
            Xem hành trình
          </Link>
          <span className="text-sm text-slate-500">Báo cáo hành trình</span>
        </div>
      </div>
    </article>
  );
}
