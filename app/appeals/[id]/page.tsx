import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fundraisingAppeals } from '@/data/mockData';

const formatMoney = (value: number) => value.toLocaleString('vi-VN') + ' ₫';

export default async function AppealDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const appeal = fundraisingAppeals.find((item) => item.id === id);

  if (!appeal) {
    notFound();
  }

  const progress = Math.min(100, Math.round((appeal.currentAmount / appeal.targetAmount) * 100));

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-red-50 px-6 py-16 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-200/30 ring-1 ring-black/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-800">
                Trường hợp cấp bách
              </span>
              <h1 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">{appeal.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700">
                {appeal.shortDescription}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-red-100 bg-red-50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-700">Tình trạng</p>
              <p className="mt-3 text-3xl font-bold text-gray-900">{appeal.status}</p>
              <p className="mt-2 text-sm text-gray-600">Hạn kêu gọi: {appeal.deadline}</p>
              <div className="mt-6 space-y-3">
                <div className="rounded-full bg-slate-200 p-3 text-sm text-gray-700">
                  {progress}% mục tiêu đã đạt được
                </div>
                <div className="rounded-full bg-white p-4 text-sm text-gray-600 ring-1 ring-red-100">
                  {formatMoney(appeal.currentAmount)} đã nhận / {formatMoney(appeal.targetAmount)} mục tiêu
                </div>
                <Link
                  href="/#transparency"
                  className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Quyên góp ngay
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-slate-100 p-6">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-yellow-500" />
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-yellow-200/30 ring-1 ring-black/5">
            <div className="grid gap-6 sm:grid-cols-3">
              {appeal.images.map((src, index) => (
                <div key={index} className="relative h-52 overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image src={src} alt={`${appeal.title} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Câu chuyện chi tiết</h2>
              {appeal.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="rounded-[1.75rem] bg-yellow-50 p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-gray-900">Danh sách nhà hảo tâm</h3>
              <p className="mt-2 text-sm text-gray-600">Danh sách những người đã đồng hành cùng trường hợp này.</p>
              <div className="mt-6 space-y-4">
                {appeal.donationList.map((donation) => (
                  <div key={`${donation.donorName}-${donation.date}`} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{donation.donorName}</p>
                        <p className="text-sm text-slate-600">{donation.method} · {donation.date}</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{formatMoney(donation.amount)}</p>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">"{donation.message}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 rounded-[2rem] bg-white p-8 shadow-xl shadow-red-200/30 ring-1 ring-black/5">
            <div className="rounded-[1.75rem] bg-red-50 p-6 shadow-sm ring-1 ring-red-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-700">Liên hệ xác thực</p>
              <p className="mt-4 text-xl font-semibold text-gray-900">{appeal.contact.name}</p>
              <p className="mt-2 text-sm text-gray-600">{appeal.contact.relation}</p>
              <p className="mt-3 text-sm text-gray-700">SĐT: <a href={`tel:${appeal.contact.phone}`} className="font-semibold text-red-700">{appeal.contact.phone}</a></p>
              <p className="mt-1 text-sm text-gray-700">Địa chỉ: {appeal.contact.location}</p>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                Thông tin được xác thực bởi điều phối viên địa phương hoặc người thân để đảm bảo minh bạch cho người ủng hộ.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-100">
              <h3 className="text-lg font-semibold text-gray-900">Thông tin ủng hộ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Mọi khoản đóng góp sẽ được ghi nhận công khai và chuyển đến gia đình/đơn vị xác thực của trường hợp này.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>Ngân hàng: Techcombank (Ngân hàng Kỹ thương Việt Nam)</li>
                <li>Số tài khoản: 1903 2146 8040 12</li>
                <li>Chủ tài khoản: NGUYEN THI ANH NGUYET</li>
                <li>Nội dung: Quyên góp + Tên bạn</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
            >
              Trở về trang chủ
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
