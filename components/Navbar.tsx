'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 fixed w-full z-20 top-0 start-0 border-b border-gray-700" role="navigation">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Hiếu Trương
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Link
            href="/lien-he"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-200"
          >
            Bắt đầu nào
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M1 1l15 12M1 13L16 1' : 'M1 1h15M1 7h15M1 13h15'} />
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-full left-0 w-full md:static md:flex md:w-auto md:order-1 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 font-medium border border-gray-700 rounded-lg bg-blue-900 md:bg-blue-950 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-blue-200 md:hover:text-white md:p-0"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link
                href="/gioi-thieu"
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 md:hover:bg-transparent md:hover:text-white md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/du-an-cua-toi"
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 md:hover:bg-transparent md:hover:text-white md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Dự Án
              </Link>
            </li>
            <li>
              <Link
                href="/lien-he"
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 md:hover:bg-transparent md:hover:text-white md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}