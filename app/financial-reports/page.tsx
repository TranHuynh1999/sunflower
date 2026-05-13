'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';
import { activities, donationSummary } from '@/data/mockData';
import {
  flattenDonationRecords,
  flattenExpenseRecords,
  InflowRecord,
  OutflowRecord,
} from '@/lib/reportUtils';

const currencyFormatter = new Intl.NumberFormat('vi-VN');

function parseVietnameseCurrency(value: string) {
  return Number(value.replace(/[^0-9]/g, '')) || 0;
}

function getTotalExpense(items: { cost: string; quantity: number }[]) {
  return items.reduce((total, item) => total + parseVietnameseCurrency(item.cost), 0);
}

function exportToExcel(allDonations: InflowRecord[], allExpenses: OutflowRecord[]) {
  const thuData = allDonations.map((record) => ({
    'Ngày': record.date,
    'Nhà hảo tâm': record.donorName,
    'Số tiền': record.amount,
    'Hình thức': record.method,
    'Lời chúc': record.message,
    'Dự án': record.activityTitle,
  }));

  const chiData = allExpenses.map((record) => ({
    'Ngày chi': record.activityDate,
    'Dự án': record.activityTitle,
    'Nội dung chi': record.item,
    'Đơn giá': record.unitPrice,
    'Số lượng': record.quantity,
    'Thành tiền': record.cost,
  }));

  const thuSheet = XLSX.utils.json_to_sheet(thuData);
  const chiSheet = XLSX.utils.json_to_sheet(chiData);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, thuSheet, 'Danh sách Thu');
  XLSX.utils.book_append_sheet(workbook, chiSheet, 'Danh sách Chi');

  const dateStr = new Date().toISOString().split('T')[0];
  const fileName = `Bao_Cao_Tai_Chinh_Hoa_Huong_Duong_${dateStr}.xlsx`;

  XLSX.writeFile(workbook, fileName);
  window.alert('Báo cáo Excel đã được tải xuống thành công!');
}

export default function FinancialReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Tất cả');

  const categories = useMemo(
    () => ['Tất cả', ...Array.from(new Set(activities.map((activity) => activity.category)))],
    []
  );

  const totalExpense = useMemo(
    () => activities.reduce((sum, activity) => sum + getTotalExpense(activity.financialReport), 0),
    []
  );

  const allDonations = useMemo(() => flattenDonationRecords(activities), []);
  const allExpenses = useMemo(() => flattenExpenseRecords(activities), []);

  const filteredActivities = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesCategory = categoryFilter === 'Tất cả' || activity.category === categoryFilter;
      const matchesSearch = normalizedSearch
        ? activity.donationList.some((donation) => donation.donorName.toLowerCase().includes(normalizedSearch))
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm]);

  const handleExportExcel = () => {
    exportToExcel(allDonations, allExpenses);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50 px-6 py-12 text-slate-700 md:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-yellow-200/40 ring-1 ring-black/5">
          <div className="mb-8">
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Báo cáo tài chính</p>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 font-heading">
                    Tổng quan tài chính và minh bạch thu chi
                  </h1>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    Quay về trang chủ
                  </Link>
                  <button
                    type="button"
                    onClick={handleExportExcel}
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    Tải Báo Cáo Excel
                  </button>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Cung cấp cái nhìn toàn diện về tổng ngân quỹ, chi phí thực hiện và dữ liệu thu chi theo từng chuyến đi nhân ái.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-yellow-200 bg-yellow-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-yellow-200/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">Tổng ngân quỹ đã vận động</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{currencyFormatter.format(donationSummary.totalCollected)} ₫</p>
              <p className="mt-3 text-sm text-slate-600">Tổng số tiền đóng góp đã tiếp nhận từ các mạnh thường quân.</p>
            </div>
            <div className="rounded-[1.75rem] border border-green-200 bg-green-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-green-200/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Tổng chi phí đã thực hiện</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{currencyFormatter.format(totalExpense)} ₫</p>
              <p className="mt-3 text-sm text-slate-600">Tổng hợp chi phí cho các chuyến đi nhân ái đã triển khai.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-slate-200/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Tổng số lượt đóng góp</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{donationSummary.totalDonations}</p>
              <p className="mt-3 text-sm text-slate-600">Số lần đóng góp đã ghi nhận trên tất cả chuyến đi.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-green-200/30 ring-1 ring-black/5">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quản lý báo cáo</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Tìm kiếm và lọc theo chuyến đi</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="block">
                <span className="sr-only">Tìm kiếm theo tên nhà tài trợ</span>
                <input
                  aria-label="Tìm kiếm theo tên nhà tài trợ"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Tìm kiếm theo tên nhà tài trợ"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <div className="rounded-3xl border border-slate-200 bg-white p-3">
                <label className="block text-sm font-semibold text-slate-600">Danh mục</label>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-200"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-10 text-center">
              <p className="text-xl font-semibold text-slate-900">Không tìm thấy báo cáo phù hợp.</p>
              <p className="mt-3 text-sm text-slate-600">Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredActivities.map((activity) => {
                const collected = activity.donationList.reduce((sum, donation) => sum + donation.amount, 0);
                const spent = getTotalExpense(activity.financialReport);
                const balance = collected - spent;

                return (
                  <article key={activity.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <div className="flex flex-col gap-6 border-b border-slate-200 bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">{activity.category}</p>
                        <h3 className="mt-2 text-2xl font-bold text-gray-900">{activity.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">Ngày thực hiện: {activity.date}</p>
                      </div>
                    </div>

                    <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_1fr]">
                      <section className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                        <div className="mb-4 flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900">Bảng Thu</h4>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-green-800">
                            {activity.donationList.length} lượt
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                            <thead className="bg-slate-100 text-slate-600">
                              <tr>
                                <th className="px-4 py-3 font-semibold">Nhà tài trợ</th>
                                <th className="px-4 py-3 font-semibold">Số tiền</th>
                                <th className="px-4 py-3 font-semibold">Ngày</th>
                                <th className="px-4 py-3 font-semibold">Phương thức</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {activity.donationList.map((donation) => (
                                <tr key={`${activity.id}-${donation.donorName}-${donation.date}`} className="transition hover:bg-yellow-50">
                                  <td className="px-4 py-4 text-slate-900">{donation.donorName}</td>
                                  <td className="px-4 py-4 text-slate-900">{currencyFormatter.format(donation.amount)} ₫</td>
                                  <td className="px-4 py-4 text-slate-600">{donation.date}</td>
                                  <td className="px-4 py-4 text-slate-600">{donation.method}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>

                      <section className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                        <div className="mb-4 flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900">Bảng Chi</h4>
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-800">
                            {activity.financialReport.length} đầu mục
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                            <thead className="bg-slate-100 text-slate-600">
                              <tr>
                                <th className="px-4 py-3 font-semibold">Hạng mục</th>
                                <th className="px-4 py-3 font-semibold">Số lượng</th>
                                <th className="px-4 py-3 font-semibold">Chi phí</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {activity.financialReport.map((expense) => (
                                <tr key={`${activity.id}-${expense.item}`} className="transition hover:bg-green-50">
                                  <td className="px-4 py-4 text-slate-900">{expense.item}</td>
                                  <td className="px-4 py-4 text-slate-900">{expense.quantity}</td>
                                  <td className="px-4 py-4 text-slate-900">{expense.cost}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Số liệu chuyến đi</p>
                        <p className="mt-2 text-lg font-semibold text-gray-900">Số tiền thu: {currencyFormatter.format(collected)} ₫</p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">Số tiền chi: {currencyFormatter.format(spent)} ₫</p>
                      </div>
                      <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Cân đối chuyến đi</p>
                        <p className="mt-2 text-2xl font-bold">
                          {balance >= 0 ? '+' : '-'}{currencyFormatter.format(Math.abs(balance))} ₫
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {balance >= 0 ? 'Dư quỹ sau chi phí' : 'Thiếu hụt so với thu'}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-yellow-200/30 ring-1 ring-black/5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-yellow-200 bg-yellow-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-yellow-200/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">Ngân sách hiện tại</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">{currencyFormatter.format(donationSummary.totalCollected - totalExpense)} ₫</p>
              <p className="mt-3 text-sm text-slate-600">Số dư ngân sách còn lại sau khi trừ chi phí.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Tổng thu</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">{currencyFormatter.format(donationSummary.totalCollected)} ₫</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Tổng chi</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">{currencyFormatter.format(totalExpense)} ₫</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
