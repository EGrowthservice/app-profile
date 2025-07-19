'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SocialButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      {/* Zalo */}
      <Link
        href="https://zalo.me/0941518881"
        target="_blank"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center w-12 h-12"
      >
        <Image
          src="/images/logos/zalo.png"
          alt="Zalo"
          width={24}
          height={24}
        />
      </Link>

      {/* Facebook */}
      <Link
        href="https://facebook.com/hieuxinh204"
        target="_blank"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center w-12 h-12"
      >
        <Image
          src="/images/logos/fb.png"
          alt="Facebook"
          width={24}
          height={24}
        />
      </Link>

      {/* SMS */}
      <Link
        href="tel:+84941518881"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center w-12 h-12"
      >
        <Image
          src="/images/logos/phone.png"
          alt="SMS"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}
