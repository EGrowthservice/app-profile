export default function Projects() {
  const projects = [
    {
      title: 'Dự Án 1',
      description: 'Mô tả ngắn gọn về dự án 1. Một giải pháp sáng tạo giúp giải quyết vấn đề X.',
      image: 'https://via.placeholder.com/400x200',
      price: '1,000,000 VNĐ',
    },
    {
      title: 'Dự Án 2',
      description: 'Mô tả ngắn gọn về dự án 2. Tối ưu hóa hiệu suất cho doanh nghiệp.',
      image: 'https://via.placeholder.com/400x200',
      price: '1,500,000 VNĐ',
    },
    {
      title: 'Dự Án 3',
      description: 'Mô tả ngắn gọn về dự án 3. Phù hợp với các startup nhỏ.',
      image: 'https://via.placeholder.com/400x200',
      price: '800,000 VNĐ',
    },
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
                <p className="text-blue-600 font-bold mt-2">{project.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Mua Ngay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}