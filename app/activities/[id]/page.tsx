import Link from 'next/link';
import ActivityDetail from '@/components/ActivityDetail';
import { activities } from '@/data/mockData';

type ActivityPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id,
  }));
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { id } = await params;
  const activity = activities.find((item) => item.id === id);

  if (!activity) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">Không tìm thấy chuyến đi</h1>
          <p className="mt-4 text-gray-600">Chúng tôi không tìm thấy thông tin cho chuyến đi này. Vui lòng quay lại trang chủ để xem các chuyến đi khác.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600">
            Quay về trang chủ
          </Link>
        </div>
      </main>
    );
  }

  return <ActivityDetail activity={activity} />;
}
