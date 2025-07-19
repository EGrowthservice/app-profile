export default function Projects() {
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

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dự Án Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-gray-600 mt-2">Công nghệ :{project.tech}</p>
             
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}