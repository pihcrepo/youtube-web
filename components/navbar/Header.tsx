import React from 'react';

import Image from 'next/image';
import youtube from 'img/youtube.png';
import iconMenu from '@/public/icon/menu.svg';

export default function Header({ showNavbar }: any) {
  return (
    <div className="flex items-center gap-[15px] pl-4 h-14 fixed top-0 left-0">
      <div className="h-10 w-10 p-2 cursor-pointer" onClick={showNavbar}>
        <Image src={iconMenu} alt="" className="w-6 h-6" />
      </div>
      <Image src={youtube} alt={''} className="h-9 w-28" />
    </div>
  );
}
