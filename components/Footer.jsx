'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';  // Import các icon

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 ">
      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Hiếu Trương</h3>
          <p className="text-gray-300">
            Kết nối với tôi để tạo ra các dự án đỉnh cao 
            </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/hieuxinh204" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Khóa Học</h3>
          <ul className="space-y-2 text-gray-300">
            <li>- Viết Sáng Tạo</li>
            <li>- Tiếp Thị Số</li>
            <li>- SEO cho Doanh Nghiệp</li>
            <li>- Tiếp Thị Mạng Xã Hội</li>
            <li>- Thiết Kế Đồ Họa</li>
            <li>- Phát Triển Website</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h3>
          <ul className="space-y-2 text-gray-300">
            <li>- Số điện thoại: +84 941518881</li>
            <li>- Email: hieucv204@gmail.com</li>
            <li>- Nơi làm việc : Phú Nhuận - TP HCM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
