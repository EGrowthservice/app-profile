'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Hiếu Trương - Lập Trình Viên Chuyên Nghiệp Phát Triển Web</title>
        <meta
          name="description"
          content="Khám phá profile của Hiếu Trương, một lập trình viên chuyên nghiệp với hơn 10 năm kinh nghiệm trong phát triển web, dự án số, và công nghệ hiện đại như Laravel, React, Next.js."
        />
        <meta name="keywords" content="lập trình viên, phát triển web, dự án số, Laravel, React, Next.js, Hiếu Trương" />
        <meta name="author" content="Hiếu Trương" />
      </Head>
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen ">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center z-10 relative">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
              Hiếu Trương - Lập Trình Viên
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
              Chuyên gia phát triển web với hơn 10 năm kinh nghiệm, mang đến giải pháp công nghệ tối ưu cho khách hàng toàn cầu. Khám phá hành trình và kỹ năng của tôi!
            </p>
            <Link href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300 animate-slide-up">
              Liên Hệ Tôi
            </Link>
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </section>

        {/* About Me & Sidebar Section */}
        <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Kỹ Năng Chính</h2>
            <ul className="space-y-4">
              {['Laravel', 'React', 'Next.js', 'Node.js', 'Express', 'WordPress'].map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill} 2 năm kinh nghiệm
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-6">Thông Tin Liên Hệ</h2>
            <p className="text-gray-600">Email: hieucv204@gmail.com</p>
            <p className="text-gray-600">Phone: +84 941 518 881</p>
            <p className="text-gray-600">Địa chỉ: Phú Nhuận - TP HCM</p>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Về Tôi</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Xin chào, tôi là Hiếu Trương, một lập trình viên và chuyên gia phát triển web với hơn 10 năm kinh nghiệm. Tôi đã thực hiện hàng trăm dự án từ website cá nhân đơn giản đến các hệ thống thương mại điện tử phức tạp, phục vụ khách hàng trên toàn cầu. Đam mê của tôi là sử dụng công nghệ để biến ý tưởng thành hiện thực, từ thiết kế giao diện người dùng đến tối ưu hóa hiệu suất backend.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tôi chuyên về các công nghệ tiên tiến như Laravel cho phát triển backend, React và Next.js cho frontend, cùng với Node.js và Express để xây dựng ứng dụng toàn diện. Mỗi dự án của tôi đều được thiết kế với sự chú trọng đến SEO, bảo mật, và trải nghiệm người dùng, đảm bảo mang lại giá trị cao nhất cho khách hàng.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ngoài công việc, tôi tích cực tham gia các sự kiện công nghệ, chia sẻ kiến thức qua blog và hội thảo, và không ngừng học hỏi để cập nhật các xu hướng mới nhất. Tôi tin rằng sự sáng tạo và đổi mới là nền tảng cho thành công trong lĩnh vực lập trình.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Danh Mục Dự Án</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Dự Án {index + 1}</h3>
                  <p className="text-gray-600 mb-4">
                    Một dự án {index % 2 === 0 ? 'thương mại điện tử' : 'website doanh nghiệp'} được phát triển bằng {['Laravel', 'React', 'Next.js'][index % 3]}, hoàn thành trong {index + 2} tháng.
                  </p>
                  <Link href={`/du-an-cua-toi#project-${index}`} className="text-blue-500 hover:text-blue-600 font-medium">
                    Xem Chi Tiết
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
<section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-20 ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Hợp Tác Với Tôi</h2>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Sẵn sàng biến ý tưởng của bạn thành hiện thực? Liên hệ ngay hôm nay để bắt đầu dự án của bạn với một lập trình viên giàu kinh nghiệm!
            </p>
            <Link href="/lien-he" className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300">
              Gửi Tin Nhắn
            </Link>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nhận Xét Khách Hàng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <p className="text-gray-600 italic mb-4">
                  "Dịch vụ của Hiếu Trương rất chuyên nghiệp, website của chúng tôi đã tăng gấp đôi traffic sau khi hoàn thành!" - Khách Hàng {index + 1}
                </p>
                <span className="text-purple-700 font-semibold">Khách Hàng {index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        
      </main>
      
    </>
  );
}