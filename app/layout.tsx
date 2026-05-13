import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunflower - Lan tỏa yêu thương, Thắp sáng hy vọng",
  description: "Hội từ thiện Hoa Hướng Dương - Mang niềm vui và sự hỗ trợ đến trẻ em vùng cao và người cao tuổi cô đơn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${quicksand.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-slate-700 bg-white selection:bg-yellow-200 selection:text-slate-900">
        {children}
        <Footer />
      </body>
    </html>
  );
}
