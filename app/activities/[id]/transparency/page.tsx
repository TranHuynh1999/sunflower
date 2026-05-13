import Link from 'next/link';
import DonationTable from '@/components/DonationTable';
import { activities } from '@/data/mockData';

type TransparencyPageProps = {
  params: Promise<{ id: string }>;
};

function parseVnd(value: string) {
  return Number(value.replace(/\D/g, '')) || 0;
}

function formatVnd(value: number) {
  return value.toLocaleString('vi-VN') + ' ₫';
}

export default async function ActivityTransparencyPage({ params }: TransparencyPageProps) {
  const { id } = await params;
  const activity = activities.find((item) => item.id === id);

  if (!activity) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">Không tìm thấy báo cáo</h1>
          <p className="mt-4 text-gray-600">Chúng tôi không tìm thấy dữ liệu minh bạch thu chi cho chuyến đi này.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600">
            Quay về trang chủ
          </Link>
        </div>
      </main>
    );
  }

  const totalCollected = activity.donationList.reduce((sum, donation) => sum + donation.amount, 0);
  const totalSpent = activity.financialReport.reduce((sum, item) => sum + parseVnd(item.cost), 0);
  const utilization = totalSpent === 0 ? 100 : Math.min(100, Math.round((totalCollected / totalSpent) * 100));

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-10 md:px-8 text-gray-900">
      <div className="mx-auto max-w-7xl">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="font-semibold text-yellow-600 hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2">›</span>
          <Link href={`/activities/${activity.id}`} className="font-semibold text-yellow-600 hover:underline">
            {activity.title}
          </Link>
          <span className="mx-2">›</span>
          <span>Báo cáo tài chính định kỳ</span>
        </nav>

        <header className="mt-8 rounded-[2rem] bg-white p-10 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">Báo cáo tài chính định kỳ</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">Thu chi chuyến đi {activity.title}</h1>
          <p className="mt-4 text-sm text-gray-500">Ngày thực hiện: {activity.date}</p>
          <p className="mt-6 text-gray-700 leading-8">Tại đây, bạn có thể xem chi tiết các khoản thu và chi trong hành trình nhân ái này.</p>
        </header>

        <div className="mt-10 grid gap-10 xl:grid-cols-[1.8fr_0.9fr]">
          <section className="space-y-10">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Tổng quan thu chi</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-green-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Tổng thu</p>
                  <p className="mt-4 text-3xl font-bold text-gray-900">{formatVnd(totalCollected)}</p>
                  <p className="mt-2 text-sm text-gray-600">Số tiền đã nhận được</p>
                </div>
                <div className="rounded-3xl bg-yellow-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">Tổng chi</p>
                  <p className="mt-4 text-3xl font-bold text-gray-900">{formatVnd(totalSpent)}</p>
                  <p className="mt-2 text-sm text-gray-600">Tổng chi phí chuyến đi</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-700">Tỷ lệ sử dụng</p>
                  <p className="mt-4 text-3xl font-bold text-gray-900">{utilization}%</p>
                  <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-green-600" style={{ width: `${utilization}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Chi phí chi tiết</h2>
                  <p className="mt-2 text-sm text-gray-600">Các khoản mục đã chi tiêu trong chuyến đi.</p>
                </div>
                <Link
                  href={`/activities/${activity.id}`}
                  className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
                >
                  Quay lại chuyến đi
                </Link>
              </div>

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
            </div>

            <DonationTable donationList={activity.donationList} tripTitle={`${activity.title} — Báo cáo thu`} />
          </section>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Thông tin minh bạch</p>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Mở rộng hỗ trợ</h2>
              <p className="mt-4 text-gray-600 leading-7">
                Trang này cung cấp toàn bộ chi tiết thu chi và danh sách đóng góp để bạn có thể theo dõi các khoản tài trợ một cách minh bạch.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Lưu ý</h3>
              <p className="mt-3 text-sm text-gray-600">
                Nếu bạn muốn biết thêm về cách chúng tôi sử dụng nguồn lực, hãy ghé lại trang chi tiết chuyến đi hoặc liên hệ trực tiếp qua địa chỉ email liên hệ trên trang chính.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
