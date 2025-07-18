'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ContactForm from '../components/ContactForm';
import LanguageIntro from '../components/LanguageIntro';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Slider */}
      <section className="mb-16">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-[28rem] md:h-[40rem] lg:h-[48rem]"
        >
          <SwiperSlide>
            <div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 text-center text-white px-4 pt-[80px] pb-[80px]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  Thiết Kế Website Chuyên Nghiệp
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl drop-shadow-md">
                  Tạo website đẹp, tối ưu SEO, và thân thiện với người dùng.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Liên Hệ Ngay
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full flex items-center justify-center bg-cover bg-center relative transition-transform duration-5000 transform scale-100 group-hover:scale-105"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 text-center text-white px-4 pt-[80px] pb-[80px]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  Tư Vấn Phát Triển Website
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl drop-shadow-md">
                  Giải pháp toàn diện từ ý tưởng đến triển khai.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Liên Hệ Ngay
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full flex items-center justify-center bg-cover bg-center relative transition-transform duration-5000 transform scale-100 group-hover:scale-105"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 text-center text-white px-4 pt-[80px] pb-[80px]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  Công Nghệ Hiện Đại
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl drop-shadow-md">
                  Sử dụng Laravel, Next.js, React, và hơn thế nữa!
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Liên Hệ Ngay
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Chào Mừng Đến Với Dịch Vụ Thiết Kế Website Chuyên Nghiệp
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Bạn đang tìm kiếm giải pháp thiết kế website chất lượng, tối ưu và phù hợp với doanh nghiệp? Chúng tôi cung cấp dịch vụ <span className="font-bold">thiết kế website</span>, <span className="font-bold">tư vấn phát triển</span>, và các giải pháp công nghệ web toàn diện.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Service 1: Website Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Thiết Kế Website</h3>
            <p className="text-gray-600">
              Chúng tôi tạo ra các website đẹp, dễ sử dụng, và tối ưu SEO. Từ website cá nhân, doanh nghiệp đến thương mại điện tử, chúng tôi đáp ứng mọi yêu cầu.
            </p>
          </div>
          {/* Service 2: Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tư Vấn Phát Triển</h3>
            <p className="text-gray-600">
              Hỗ trợ chiến lược phát triển website hiệu quả, từ lựa chọn công nghệ, tối ưu hóa UX/UI đến cải thiện hiệu suất và bảo mật.
            </p>
          </div>
          {/* Service 3: Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Công Nghệ Hiện Đại</h3>
            <p className="text-gray-600">
              Sử dụng <span className="font-bold">Laravel</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">React</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">WordPress</span>, và hơn thế nữa để xây dựng giải pháp tối ưu.
            </p>
          </div>
        </section>
        <LanguageIntro />

        {/* Contact Form */}
       <section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-20 rounded-lg">
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
      </div>
    </main>
  );
}