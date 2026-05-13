import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm">
              <Image src="/logo.png" alt="Logo Sunflower" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Sunflower</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Về Chúng Tôi
            </a>
            <a href="/activities" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Hoạt Động
            </a>
            <a href="#transparency" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Minh Bạch
            </a>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-2xl font-semibold transition-colors">
              Quyên Góp Ngay
            </button>
          </div>
          <div className="md:hidden">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-2xl font-semibold transition-colors">
              Quyên Góp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}