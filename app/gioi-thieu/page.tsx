'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  // Dữ liệu mẫu cho các dự án
const projects = [
  {
    title: 'Nền Tảng Thương Mại Điện Tử',
    description: 'Một nền tảng thương mại điện tử đầy đủ tính năng với tích hợp thanh toán, được xây dựng bằng Next.js và Laravel.',
    image: '/images/projects/tmdt.png',
    tech: 'Next.js, Laravel',
  },
  {
    title: 'Nền Tảng Chợ cũ ( C2C )',
    description: 'Ứng dụng website đáp ứng nhu cầu mua bán của người dùng .',
    image: '/images/projects/chocu.png',
    tech: 'Next.js, Laravel',
  },
  {
    title: 'Ứng Dụng Quản Lý Tác Vụ',
    description: 'Một ứng dụng quản lý tác vụ với khả năng cộng tác thời gian thực, được xây dựng bằng Node.js và Express.',
    image: '/images/projects/tacvu.png',
    tech: 'Node.js, Express',
  },
  {
    title: 'Hệ Thống Quản Lý Bán Hàng',
    description: 'Hệ thống quản lý bán hàng giúp các doanh nghiệp theo dõi đơn hàng, khách hàng, và tồn kho, phát triển bằng Laravel và React.',
    image: '/images/projects/ql.png',
    tech: 'Laravel, React',
  },
  {
    title: 'Ứng Dụng Chat Thời Gian Thực',
    description: 'Ứng dụng chat thời gian thực cho phép người dùng trò chuyện với nhau, sử dụng WebSocket và được xây dựng bằng Node.js và React.',
    image: '/images/projects/chat.png',
    tech: 'Node.js, React',
  },
  {
    title: 'Blog Cá Nhân Tích Hợp SEO',
    description: 'Một blog cá nhân với tính năng SEO nâng cao và giao diện thân thiện, được phát triển bằng Next.js và Laravel.',
    image: '/images/projects/blog.png',
    tech: 'Next.js, Laravel',
  },
  {
    title: 'Ứng Dụng Quản Lý Công Việc',
    description: 'Ứng dụng quản lý công việc giúp người dùng theo dõi và phân công nhiệm vụ, được xây dựng bằng React và Node.js.',
    image: '/images/projects/cv.png',
    tech: 'React, Node.js',
  },
  {
    title: 'Nền Tảng Đặt Lịch Hẹn',
    description: 'Nền tảng cho phép người dùng đặt lịch hẹn với các dịch vụ, phát triển bằng Next.js và Laravel.',
    image: '/images/projects/lh.png',
    tech: 'Next.js, Laravel',
  }
];

  // Dữ liệu mẫu cho lời chứng thực
  const testimonials = [
    {
      quote: 'Hiếu đã mang đến một nền tảng thương mại điện tử xuất sắc, giúp doanh số của chúng tôi tăng gấp đôi trong vài tháng!',
      author: 'Nguyễn Văn Bình, Giám đốc điều hành ShopEasy',
    },
    {
      quote: 'Website doanh nghiệp do Hiếu xây dựng cho chúng tôi vừa đẹp mắt vừa có tính năng cao.',
      author: 'Trần Thị Lý, Giám đốc Marketing',
    },
    {
      quote: 'Làm việc với Hiếu thật dễ dàng; chuyên môn của anh ấy về các công nghệ hiện đại rất ấn tượng.',
      author: 'Lê Văn Huy, Nhà sáng lập Startup',
    },
  ];

  // Dữ liệu mẫu cho kỹ năng
  const skills = [
    { name: 'Lập trình website, web app', experience: '2 năm' },
    { name: 'Tối ưu và tăng tốc độ website ', experience: '2 năm' },
    { name: 'SEO website ', experience: '2 năm' },
    { name: 'Ads', experience: '2 năm' },
    { name: 'Phát triển CRM', experience: '2 năm' },
  ];

  return (
    <>
      <Head>
        <title>Hiếu Trương - Lập Trình Viên Chuyên Nghiệp Phát Triển Web</title>
        <meta
          name="description"
          content="Khám phá profile của Hiếu Trương, một lập trình viên chuyên nghiệp với hơn 10 năm kinh nghiệm trong phát triển web, dự án số, SEO, thiết kế CMS và công nghệ hiện đại như Laravel, React, Next.js."
        />
        <meta
          name="keywords"
          content="lập trình viên, phát triển web, dự án số, Laravel, React, Next.js, SEO, CMS, Ứng dụng Web, Hiếu Trương"
        />
        <meta name="author" content="Hiếu Trương" />
      </Head>
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Phần đầu trang */}
        <section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center z-10 relative">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
              Hiếu Trương - Lập Trình Viên
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
              Chuyên gia phát triển web với hơn 10 năm kinh nghiệm, mang đến giải pháp công nghệ tối ưu cho khách hàng toàn cầu. Khám phá hành trình và kỹ năng của tôi!
            </p>
            <Link
              href="#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300 animate-slide-up"
            >
              Liên Hệ Tôi
            </Link>
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </section>

        {/* Phần Giới Thiệu & Thanh Bên */}
        <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Kỹ Năng Chính</h2>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill.name} - {skill.experience}
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
                  Tôi chuyên về các công nghệ tiên tiến như Laravel, React, Next.js, cùng với các giải pháp như tối ưu hóa SEO, thiết kế CMS, và phát triển ứng dụng web toàn diện. Mỗi dự án của tôi đều được tối ưu hóa cho SEO, bảo mật, và trải nghiệm người dùng, đảm bảo mang lại giá trị cao nhất cho khách hàng.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ngoài công việc, tôi tích cực tham gia các sự kiện công nghệ, chia sẻ kiến thức qua blog và hội thảo, và không ngừng học hỏi để cập nhật các xu hướng mới nhất. Tôi tin rằng sự sáng tạo và đổi mới là nền tảng cho thành công trong lĩnh vực lập trình.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phần Danh Mục Dự Án */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Danh Mục Dự Án</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-gray-500 text-sm mb-2">Công nghệ: {project.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phần Kêu Gọi Hành Động */}
        <section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Hợp Tác Với Tôi</h2>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Sẵn sàng biến ý tưởng của bạn thành hiện thực? Liên hệ ngay hôm nay để bắt đầu dự án của bạn với một lập trình viên giàu kinh nghiệm!
            </p>
            <Link
              href="/lien-he"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300"
            >
              Gửi Tin Nhắn
            </Link>
          </div>
        </section>

        {/* Phần Nhận Xét Khách Hàng */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nhận Xét Khách Hàng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <span className="text-purple-700 font-semibold">{testimonial.author}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}