'use client';

export default function WebsiteDesignProcess() {
  const steps = [
    { number: 1, title: 'Thu Thập Yêu Cầu', description: 'Chúng tôi bắt đầu bằng cách thu thập thông tin chi tiết từ bạn về mục tiêu kinh doanh, đối tượng mục tiêu, các tính năng mong muốn và ngân sách. Bước này giúp xác định rõ tầm nhìn và nhu cầu cụ thể của bạn.' },
    { number: 2, title: 'Nghiên Cứu', description: 'Đội ngũ của chúng tôi thực hiện nghiên cứu thị trường kỹ lưỡng, phân tích đối thủ cạnh tranh và đánh giá khả năng kỹ thuật để xây dựng chiến lược tối ưu, giúp website của bạn nổi bật.' },
    { number: 3, title: 'Lập Kế Hoạch', description: 'Chúng tôi phát triển lộ trình dự án, tạo sitemap và wireframe để phác thảo cấu trúc website, đảm bảo luồng người dùng logic trước khi tiến hành thiết kế.' },
    { number: 4, title: 'Thiết Kế UI', description: 'Các nhà thiết kế tạo ra giao diện đẹp mắt, thân thiện, tập trung vào thương hiệu, bảng màu phù hợp và bố cục đáp ứng, được tối ưu hóa cho mọi thiết bị.' },
    { number: 5, title: 'Phát Triển', description: 'Chúng tôi xây dựng website bằng các công nghệ tiên tiến như Laravel, React, Next.js, đảm bảo hiệu suất cao, khả năng mở rộng và tích hợp các tính năng hiện đại.' },
    { number: 6, title: 'Kiểm Thử', description: 'Kiểm tra kỹ lưỡng được thực hiện để đảm bảo chức năng hoạt động trơn tru, hiệu suất tốt, bảo mật cao và tương thích trên nhiều nền tảng khác nhau.' },
    { number: 7, title: 'Triển Khai', description: 'Chúng tôi triển khai website lên máy chủ trực tiếp, cấu hình tên miền và ra mắt với quy trình mượt mà, giảm thiểu thời gian gián đoạn cho người dùng.' },
    { number: 8, title: 'Bảo Trì', description: 'Sau ra mắt, chúng tôi cung cấp cập nhật định kỳ, vá lỗi bảo mật và hỗ trợ kỹ thuật liên tục để website luôn hoạt động ổn định và hiệu quả.' },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Quy Trình Thiết Kế Website</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-950 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-2">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}