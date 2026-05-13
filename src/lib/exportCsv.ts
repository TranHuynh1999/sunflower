export type CsvField = string | number | boolean;

function escapeCsvValue(value: CsvField): string {
  const stringValue = String(value ?? '');
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function buildCsv(rows: CsvField[][]): string {
  return rows.map((row) => row.map(escapeCsvValue).join(',')).join('\r\n');
}

export function downloadCsv(content: string, fileName: string) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportDonationListToCsv(donationList: {
  donorName: string;
  amount: number;
  date: string;
  message: string;
  method: string;
}[], tripTitle: string) {
  const header = ['Nhà hảo tâm', 'Số tiền', 'Ngày', 'Lời chúc', 'Phương thức'];
  const rows = donationList.map((donation) => [
    donation.donorName,
    `${donation.amount.toLocaleString('vi-VN')} ₫`,
    donation.date,
    donation.message,
    donation.method
  ]);
  const csv = buildCsv([header, ...rows]);
  const safeTitle = tripTitle.replace(/[^a-zA-Z0-9_-]/g, '_');
  downloadCsv(csv, `${safeTitle}_donations.csv`);
}
