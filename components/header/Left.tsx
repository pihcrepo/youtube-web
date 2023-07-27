import React from 'react';
import youtube from 'img/youtube.png';
import Image from 'next/image';

import iconMenu from '@/public/icon/menu.svg';

export default function Left({ menuClick }: any) {
  function log() {
    console.log('this is the log from menu icon');
  }
  return (
    <div className="flex justify-center items-center gap-2.5">
      <Image
        src={iconMenu}
        alt=""
        className="w-[25px] h-[25px]"
        onClick={menuClick}
      />
      <Image src={youtube} alt="" className="w-[90px] h-[35px]" />
    </div>
  );
}
