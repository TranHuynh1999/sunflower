import type {
  Activity,
  DonationRecord,
  FinancialReportItem,
} from '@/data/mockData';

export type InflowRecord = DonationRecord & {
  activityId: string;
  activityTitle: string;
  activityDate: string;
};

export type OutflowRecord = FinancialReportItem & {
  activityId: string;
  activityTitle: string;
  activityDate: string;
  unitPrice: number;
};

export const parseVNDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export const flattenDonationRecords = (activities: Activity[]): InflowRecord[] =>
  activities.flatMap((activity) =>
    activity.donationList.map((donation) => ({
      ...donation,
      activityId: activity.id,
      activityTitle: activity.title,
      activityDate: activity.date,
    }))
  );

export const flattenExpenseRecords = (activities: Activity[]): OutflowRecord[] =>
  activities.flatMap((activity) =>
    activity.financialReport.map((expense) => {
      const unitPrice = Number(expense.cost.replace(/[^0-9]/g, '')) || 0;
      return {
        ...expense,
        activityId: activity.id,
        activityTitle: activity.title,
        activityDate: activity.date,
        unitPrice: unitPrice/ expense.quantity,
      };
    })
  );

export const downloadCsv = (fileName: string, headers: string[], rows: string[][]) => {
  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');
  const blob = new Blob(['\uFEFF', csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
