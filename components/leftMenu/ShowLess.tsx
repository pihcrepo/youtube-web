import React from 'react';
import Image from 'next/image';

import iconHome from '@/public/icon/home.svg';
import iconShorts from '@/public/icon/shorts.svg';
import iconSubscriptions from '@/public/icon/subscriptions.svg';
import iconLibrary from '@/public/icon/library.svg';

export default function ShowLess({ showMore }: any) {
  const container = 'flex flex-col py-0 px-1 mt-1';
  const item = 'flex flex-col items-center w-16 pt-4 px-0 pb-3.5 gap-1';
  return (
    <div className={container + (showMore ? ' hidden' : '')}>
      <div className={item}>
        <Image src={iconHome} alt="" />
        <span className="text-xs">Home</span>
      </div>
      <div className={item}>
        <Image src={iconShorts} alt="" />
        <span className="text-xs">Shorts</span>
      </div>
      <div className={item}>
        <Image src={iconSubscriptions} alt="" />
        <span className="text-xs">Subscriptions</span>
      </div>
      <div className={item}>
        <Image src={iconLibrary} alt="" />
        <span className="text-xs">Library</span>
      </div>
    </div>
  );
}
