import Image from 'next/image';
import Link from 'next/link';
import { Share2, PlayCircle, Hash } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-3xl border border-yellow-300 bg-white shadow-sm">
              <Image src="/logo.png" alt="Logo Sunflower" fill className="object-contain" />
            </div>
            <div>
              <p className="text-xl font-semibold text-white font-heading">Nhóm Thiện Nguyện Hoa Hướng Dương</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                Kết nối tấm lòng nhân ái và nguồn lực để lan tỏa yêu thương đến trẻ em và người cao tuổi vùng cao.
              </p>
              <p className="mt-4 text-sm text-yellow-300">
                Đại diện CLB: Nguyễn Thị Ánh Nguyệt, Chủ nhiệm CLB.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Liên kết</p>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-slate-300 transition hover:text-white">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#trips" className="text-slate-300 transition hover:text-white">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="#transparency" className="text-slate-300 transition hover:text-white">
                  Minh bạch
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 transition hover:text-white">
                  Tham gia
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Liên hệ</p>
            <div className="space-y-2 text-slate-300">
              <p>Địa chỉ: 123 Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
              <p>
                Hotline: <a href="tel:+84912345678" className="text-white hover:text-yellow-400">+84 0354 420 472</a>
              </p>
              <p>
                Email: <a href="mailto:nhomthiennguyenhoahuongduong@gmail.com" className="text-white hover:text-yellow-400">nhomthiennguyenhoahuongduong@gmail.com</a>
              </p>
            </div>
            <div className="mt-4 rounded-3xl bg-slate-800 p-4 text-sm text-slate-200 ring-1 ring-slate-700">
              <p className="font-semibold text-white">Tài khoản chính thức</p>
              <p className="mt-2 text-sm text-slate-200">Techcombank</p>
              <p className="text-sm text-slate-200">1903 2146 8040 12</p>
              <p className="text-sm text-slate-200">NGUYEN THI ANH NGUYET</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Mạng xã hội</p>
            <p className="text-slate-300">Kết nối với chúng tôi để theo dõi hành trình nhân ái và báo cáo định kỳ.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-yellow-500 hover:text-slate-900" aria-label="Facebook">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-yellow-500 hover:text-slate-900" aria-label="YouTube">
                <PlayCircle className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-yellow-500 hover:text-slate-900" aria-label="TikTok">
                <Hash className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 text-center text-sm text-slate-500">
        © 2026 Nhóm Thiện Nguyện Hoa Hướng Dương. All rights reserved.
      </div>
    </footer>
  );
}