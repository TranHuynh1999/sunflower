export type FinancialReportItem = {
  item: string;
  cost: string;
  quantity: number;
};

export type DonationRecord = {
  donorName: string;
  amount: number;
  date: string;
  message: string;
  method: string;
};

export type Activity = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  longStory: string;
  images: string[];
  financialReport: FinancialReportItem[];
  donationList: DonationRecord[];
};

export type AppealCase = {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  fullStory: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  status: string;
  contact: {
    name: string;
    phone: string;
    relation: string;
    location: string;
  };
  images: string[];
  donationList: DonationRecord[];
};

export const activities: Activity[] = [
  {
    id: 'duong-di-vung-cao-2025',
    title: 'Hành Trình Yêu Thương Vùng Cao',
    category: 'Trẻ em',
    date: '15/03/2025',
    description: 'Mang quà, đồ dùng học tập và niềm vui đến trẻ em đồng bào vùng cao.',
    longStory:
      'Trong chuyến đi này, đoàn Sunflower đã đồng hành cùng các em học sinh tại bản Tả Phìn. Chúng tôi tổ chức lớp học kỹ năng, trao tặng sách giáo khoa và đồ dùng học tập, đồng thời lắng nghe tâm sự của gia đình để hiểu rõ hơn những khó khăn hằng ngày. ' +
      'Mỗi nụ cười, mỗi cái bắt tay ấm áp đã tiếp thêm động lực cho chúng tôi tiếp tục hành trình. Kết thúc chuyến đi, cộng đồng địa phương cam kết hợp tác cùng Sunflower để triển khai chương trình hỗ trợ dài hạn.',
    images: [
      'https://images.unsplash.com/photo-1496950866446-325aee490d7d?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&h=600&fit=crop'
    ],
    financialReport: [
      { item: 'Quà tặng và dụng cụ học tập', cost: '7.500.000 VND', quantity: 75 },
      { item: 'Chi phí di chuyển', cost: '4.200.000 VND', quantity: 1 },
      { item: 'Ăn uống và sinh hoạt', cost: '3.400.000 VND', quantity: 1 }
    ],
    donationList: [
      { donorName: 'Nguyễn Văn A', amount: 500000, date: '16/03/2025', message: 'Chúc các em luôn vui khỏe.', method: 'Bank Transfer' },
      { donorName: 'Trần Thị B', amount: 1200000, date: '17/03/2025', message: 'Mong chuyến đi mang nhiều niềm vui.', method: 'Momo' },
      { donorName: 'Lê Văn C', amount: 300000, date: '18/03/2025', message: 'Ủng hộ nhỏ nhoi.', method: 'Bank Transfer' },
      { donorName: 'Phạm Thị D', amount: 750000, date: '19/03/2025', message: 'Chúc các em học tốt.', method: 'Momo' },
      { donorName: 'Hoàng Văn E', amount: 300000, date: '20/03/2025', message: 'Mong cộng đồng thêm ấm áp.', method: 'Bank Transfer' },
      { donorName: 'NGUYEN THI ANH NGUYET', amount: 2000000, date: '15/03/2025', message: 'Đóng góp từ đại diện CLB để khởi động chuyến đi.', method: 'Bank Transfer' }
    ]
  },
  {
    id: 'thap-sang-tuoi-gia-2025',
    title: 'Thắp Sáng Tuổi Già',
    category: 'Người già',
    date: '30/04/2025',
    description: 'Thăm hỏi, tặng quà và tổ chức hoạt động cùng người cao tuổi cô đơn.',
    longStory:
      'Chuyến đi đến huyện Đạ Huoai mang đến nhiều cảm xúc đối với đội ngũ Sunflower. Chúng tôi tổ chức buổi trò chuyện, hát múa và trao những phần quà thiết yếu cho người già neo đơn. ' +
      'Nhiều cụ chia sẻ rằng đây là lần đầu tiên họ cảm nhận rõ sự quan tâm từ cộng đồng. Đó là nguồn động lực lớn để Sunflower tiếp tục xây dựng chương trình chăm sóc định kỳ và kết nối tình nguyện viên địa phương.',
    images: [
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=600&fit=crop'
    ],
    financialReport: [
      { item: 'Quà tặng cẩm nang sức khỏe', cost: '5.200.000 VND', quantity: 60 },
      { item: 'Chi phí vận chuyển', cost: '2.900.000 VND', quantity: 1 },
      { item: 'Hoạt động giao lưu', cost: '1.800.000 VND', quantity: 1 }
    ],
    donationList: [
      { donorName: 'Nguyễn Thị H', amount: 900000, date: '01/05/2025', message: 'Cầu mong những ngày tháng ấm áp.', method: 'Bank Transfer' },
      { donorName: 'Trần Văn K', amount: 600000, date: '02/05/2025', message: 'Sẻ chia với người cao tuổi.', method: 'Momo' },
      { donorName: 'Lê Thị L', amount: 350000, date: '03/05/2025', message: 'Mong các cụ luôn khỏe mạnh.', method: 'Bank Transfer' },
      { donorName: 'Phạm Văn M', amount: 400000, date: '04/05/2025', message: 'Ủng hộ tinh thần.', method: 'Momo' }
    ]
  },
  {
    id: 'xay-dung-lop-hoc-2025',
    title: 'Xây Dựng Lớp Học Mơ Ước',
    category: 'Trẻ em',
    date: '10/06/2025',
    description: 'Hỗ trợ sửa chữa lớp học và trao học bổng cho học sinh nghèo.',
    longStory:
      'Dự án lớp học mơ ước tại xã vùng cao đã kết nối nhiều nhà hảo tâm và chuyên gia xây dựng. Chúng tôi đã cùng nhau sơn sửa phòng học, lắp đặt đèn chiếu sáng và bàn ghế mới cho các em. ' +
      'Không chỉ dừng lại ở vật chất, Sunflower còn trao tặng học bổng động viên 20 em học sinh vượt khó, góp phần thắp lên hy vọng cho tương lai.',
    images: [
      'https://images.unsplash.com/photo-1523473827537-61d4d8fd2823?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503484764585-6d2821e8f2e8?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1510070009289-b5bc34383727?w=900&h=600&fit=crop'
    ],
    financialReport: [
      { item: 'Vật liệu sửa chữa', cost: '8.100.000 VND', quantity: 1 },
      { item: 'Bàn ghế và thiết bị học tập', cost: '6.700.000 VND', quantity: 1 },
      { item: 'Học bổng và quà hỗ trợ', cost: '4.500.000 VND', quantity: 20 }
    ],
    donationList: [
      { donorName: 'Hoàng Thị N', amount: 1500000, date: '11/06/2025', message: 'Chúc lớp học khang trang hơn.', method: 'Bank Transfer' },
      { donorName: 'Đinh Văn P', amount: 500000, date: '12/06/2025', message: 'Hy vọng các em có tương lai tươi sáng.', method: 'Momo' },
      { donorName: 'Trương Thị Q', amount: 800000, date: '13/06/2025', message: 'Ủng hộ giáo dục vùng cao.', method: 'Bank Transfer' },
      { donorName: 'Ngô Văn R', amount: 400000, date: '14/06/2025', message: 'Mong các em học tập tốt.', method: 'Momo' },
      { donorName: 'Phan Thị S', amount: 300000, date: '15/06/2025', message: 'Thắp sáng ước mơ của các em.', method: 'Bank Transfer' }
    ]
  }
];

export const fundraisingAppeals: AppealCase[] = [
  {
    id: 'benh-nhan-ung-thu-an-dinh',
    title: 'Gia đình bệnh nhân ung thư cần gấp',
    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop',
    shortDescription: 'Gia đình em An đang cần viện phí điều trị gấp và hỗ trợ sinh hoạt ngay trong tháng này.',
    fullStory:
      'Em An, 12 tuổi, đang điều trị ung thư máu tại bệnh viện tỉnh. Cha mẹ em làm nông và đã bán hết tài sản nhỏ để lo chi phí. ' +
      'Sunflower nhận thấy con số cần huy động còn rất lớn, trong khi thời hạn điều trị đang gấp rút. Mọi đóng góp sẽ được chuyển trực tiếp vào tài khoản gia đình và cập nhật minh bạch hàng tuần.\n\n' +
      'Mỗi đóng góp của bạn không chỉ giúp em An tiếp tục điều trị, mà còn giữ lại hy vọng cho cả gia đình nhỏ giữa những ngày khó khăn nhất.',
    targetAmount: 18000000,
    currentAmount: 8600000,
    deadline: '30/06/2026',
    status: 'Đang kêu gọi',
    contact: {
      name: 'Chị Mai - Mẹ em An',
      phone: '+84981234567',
      relation: 'Người thân xác thực',
      location: 'Phú Yên',
    },
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&h=600&fit=crop'
    ],
    donationList: [
      { donorName: 'Nguyễn Thị L', amount: 1500000, date: '10/05/2026', message: 'Mong em mau khỏi bệnh.', method: 'Bank Transfer' },
      { donorName: 'Phạm Văn T', amount: 800000, date: '12/05/2026', message: 'Gửi chút tấm lòng.', method: 'Momo' },
      { donorName: 'Trần Thị H', amount: 500000, date: '13/05/2026', message: 'Cầu mong phép màu.', method: 'Bank Transfer' }
    ]
  },
  {
    id: 'bao-lu-ngap-sat-nguoi-gia',
    title: 'Cứu trợ người già sau bão lũ',
    thumbnail: 'https://images.unsplash.com/photo-1510070009289-b5bc34383727?w=900&h=600&fit=crop',
    shortDescription: 'Những cụ già neo đơn cần chăn màn, thực phẩm và thuốc men ngay trong tuần này.',
    fullStory:
      'Sau trận bão lớn, nhiều cụ già tại vùng sông nước bị cô lập, nhà tốc mái và không có đủ nhu yếu phẩm. ' +
      'Sunflower đang phối hợp với lực lượng địa phương để chuyển những hỗ trợ khẩn cấp nhanh chóng, nhưng nguồn quỹ hiện chưa đủ.\n\n' +
      'Chúng tôi cam kết dùng đúng mục đích, công khai chi tiết và thông tin xác thực để mọi người ủng hộ với niềm tin.',
    targetAmount: 12000000,
    currentAmount: 7300000,
    deadline: '25/05/2026',
    status: 'Đang kêu gọi',
    contact: {
      name: 'Anh Khánh - Điều phối viên địa phương',
      phone: '+84987654321',
      relation: 'Điều phối viên',
      location: 'Bến Tre',
    },
    images: [
      'https://images.unsplash.com/photo-1503484764585-6d2821e8f2e8?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523473827537-61d4d8fd2823?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop'
    ],
    donationList: [
      { donorName: 'Lê Thị M', amount: 600000, date: '08/05/2026', message: 'Hy vọng cụ được ấm áp.', method: 'Bank Transfer' },
      { donorName: 'Phạm Văn Q', amount: 1000000, date: '09/05/2026', message: 'Gửi chút tấm lòng thương.', method: 'Momo' },
      { donorName: 'Đoàn Thị S', amount: 400000, date: '10/05/2026', message: 'Cầu chúc bình an.', method: 'Bank Transfer' }
    ]
  },
  {
    id: 'mot-hoc-sinh-moi-day-giup-do',
    title: 'Học sinh nghèo cần hỗ trợ học phí',
    thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=600&fit=crop',
    shortDescription: 'Em Mai có nguy cơ bỏ học vì thiếu học phí; cần hỗ trợ gấp để không mất cơ hội tương lai.',
    fullStory:
      'Em Mai là học sinh lớp 7, hiện sống với bà ngoại và em nhỏ. Cha mẹ em đã mất vì bệnh tật, và gia đình đang sống trong căn nhà tạm. ' +
      'Năm học mới sắp đến, nếu không có học phí, em Mai sẽ phải nghỉ giữa chừng. Mọi giúp đỡ sẽ được chuyển thẳng tới quỹ học bổng cá nhân và duyệt theo hồ sơ xác thực.\n\n' +
      'Sunflower cam kết sử dụng khoản hỗ trợ này để mua vở, sách, đồng phục và học phí cho em Mai trong năm học tới.',
    targetAmount: 10000000,
    currentAmount: 5400000,
    deadline: '01/07/2026',
    status: 'Đang kêu gọi',
    contact: {
      name: 'Bà Lan - Bà ngoại em Mai',
      phone: '+84981230000',
      relation: 'Người giám hộ trực tiếp',
      location: 'Thanh Hóa',
    },
    images: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop'
    ],
    donationList: [
      { donorName: 'Nguyễn Văn D', amount: 700000, date: '11/05/2026', message: 'Mong Mai vững bước đến trường.', method: 'Bank Transfer' },
      { donorName: 'Hoàng Thị K', amount: 500000, date: '12/05/2026', message: 'Ủng hộ em đến lớp.', method: 'Momo' }
    ]
  }
];

export const donationSummary = activities.reduce(
  (summary, activity) => {
    summary.totalDonations += activity.donationList.length;
    summary.totalCollected += activity.donationList.reduce((sum, donation) => sum + donation.amount, 0);
    return summary;
  },
  { totalDonations: 0, totalCollected: 0 }
);
