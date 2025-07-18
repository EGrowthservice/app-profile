import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hồ Sơ Doanh Nghiệp - [Tên Bạn]',
  description: 'Chuyên cung cấp các dự án chất lượng cao',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <SocialButtons />
        {children}
        <Footer />
      </body>
    </html>
  );
}