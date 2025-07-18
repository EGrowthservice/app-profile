'use client';

export default function LanguageIntro() {
  const languages = [
    {
      name: 'Laravel',
      description: 'Framework PHP mạnh mẽ để xây dựng các ứng dụng web quy mô lớn.',
      image: '/images/logos/laravel.png',
    },
    {
      name: 'Node.js',
      description: 'Môi trường chạy JavaScript phía máy chủ, hiệu suất cao và mở rộng tốt.',
      image: '/images/logos/nodejs.png',
    },
    {
      name: 'Express',
      description: 'Framework đơn giản, linh hoạt trên nền Node.js để phát triển API và ứng dụng web.',
      image: '/images/logos/express.png',
    },
    {
      name: 'React',
      description: 'Thư viện JavaScript phổ biến để xây dựng giao diện người dùng hiện đại.',
      image: '/images/logos/react.png',
    },
    {
      name: 'Next.js',
      description: 'Framework React tối ưu cho SEO và hiệu suất cao trong môi trường production.',
      image: '/images/logos/next.png',
    },
    {
      name: 'WordPress',
      description: 'Hệ thống quản trị nội dung (CMS) phổ biến, dễ dùng và tùy biến cao.',
      image: '/images/logos/wp.png',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Các Công Nghệ Chúng Tôi Sử Dụng
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2 text-center"
            >
              <img
                src={lang.image}
                alt={`Logo ${lang.name}`}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-950 mb-2">{lang.name}</h3>
              <p className="text-gray-600">{lang.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
