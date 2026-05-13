'use client';

import { useEffect, useMemo, useState } from 'react';
import type { DonationRecord } from '@/data/mockData';
import { exportDonationListToCsv } from '@/lib/exportCsv';

type DonationTableProps = {
  donationList: DonationRecord[];
  tripTitle: string;
};

const PAGE_SIZE = 5;

export default function DonationTable({ donationList, tripTitle }: DonationTableProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const filteredDonations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return donationList;
    }

    return donationList.filter((donation) => {
      return (
        donation.donorName.toLowerCase().includes(normalizedQuery) ||
        donation.message.toLowerCase().includes(normalizedQuery) ||
        donation.method.toLowerCase().includes(normalizedQuery) ||
        donation.amount.toString().includes(normalizedQuery) ||
        donation.date.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [donationList, query]);

  const totalPages = Math.max(1, Math.ceil(filteredDonations.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredDonations.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Minh bạch đóng góp</p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Danh sách đóng góp</h3>
          <p className="mt-2 text-sm text-gray-600">Tìm kiếm, theo dõi và tải xuống báo cáo quyên góp cho chuyến đi này.</p>
        </div>
        <button
          type="button"
          onClick={() => exportDonationListToCsv(donationList, tripTitle)}
          className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Tải báo cáo
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="w-full sm:max-w-md">
          <span className="sr-only">Tìm kiếm đóng góp</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm nhà hảo tâm, phương thức hoặc lời chúc"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </label>
        <p className="text-sm text-gray-500">{filteredDonations.length} kết quả</p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="hidden min-w-full text-left lg:table">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Nhà hảo tâm</th>
              <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Số tiền</th>
              <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Ngày</th>
              <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Lời chúc</th>
              <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">Phương thức</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((donation) => (
              <tr key={`${donation.donorName}-${donation.date}-${donation.amount}`} className="border-b border-gray-100 last:border-b-0">
                <td className="px-4 py-4 text-sm text-gray-700">{donation.donorName}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{donation.amount.toLocaleString('vi-VN')} ₫</td>
                <td className="px-4 py-4 text-sm text-gray-600">{donation.date}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{donation.message}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{donation.method}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="space-y-4 lg:hidden">
          {pageItems.map((donation) => (
            <div key={`${donation.donorName}-${donation.date}-${donation.amount}`} className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-semibold text-gray-900">{donation.donorName}</p>
                <p className="text-sm font-semibold text-green-700">{donation.amount.toLocaleString('vi-VN')} ₫</p>
              </div>
              <p className="mt-3 text-sm text-gray-600">{donation.message}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">{donation.method}</span>
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">{donation.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">Trang {currentPage} / {totalPages}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage(Math.max(1, currentPage - 1))}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Trước
          </button>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
}
