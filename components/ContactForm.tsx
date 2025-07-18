'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Yêu cầu mua dự án ${formData.project} đã được gửi từ ${formData.email}`);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Họ Tên
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="project" className="block text-gray-700 font-medium mb-2">
            Dự Án Quan Tâm
          </label>
          <select
            id="project"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            required
          >
            <option value="">Chọn dự án</option>
            <option value="Dự Án 1">Dự Án 1</option>
            <option value="Dự Án 2">Dự Án 2</option>
            <option value="Dự Án 3">Dự Án 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Gửi Yêu Cầu
        </button>
      </form>
    </div>
  );
}