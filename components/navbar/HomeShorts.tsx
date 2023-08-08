import React from 'react';
import Image from 'next/image';

import iconHome from '@/public/icon/home.svg';
import iconShorts from '@/public/icon/shorts.svg';
import iconSubscriptions from '@/public/icon/subscriptions.svg';
import Library from './Library';

import { container, item, itemTitle } from './tailwind';

export default function HomeShorts() {
  return (
    <div className={container}>
      <div className={item}>
        <Image src={iconHome} alt="" />
        <span className={itemTitle}>Home</span>
      </div>
      <div className={item}>
        <Image src={iconShorts} alt="" />
        <span className={itemTitle}>Shorts</span>
      </div>
      <div className={item}>
        <Image src={iconSubscriptions} alt="" />
        <span className={itemTitle}>Subscriptions</span>
      </div>

      <Library />
    </div>
  );
}
