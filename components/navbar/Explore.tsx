import React from 'react';
import Image from 'next/image';

import iconTrending from '@/public/icon/trending.svg';
import iconMusic from '@/public/icon/music.svg';
import iconGaming from '@/public/icon/gaming.svg';
import iconNews from '@/public/icon/news.svg';
import iconSports from '@/public/icon/sports.svg';

import { container, containerTitle, item, itemTitle } from './tailwind';
export default function Explore() {
  return (
    <div className={container}>
      <div className={containerTitle}>Explore</div>

      <div className={item}>
        <Image src={iconTrending} alt="" />
        <span className={itemTitle}>Trending</span>
      </div>
      <div className={item}>
        <Image src={iconMusic} alt="" />
        <span className={itemTitle}>Music</span>
      </div>
      <div className={item}>
        <Image src={iconGaming} alt="" />
        <span className={itemTitle}>Gaming</span>
      </div>
      <div className={item}>
        <Image src={iconNews} alt="" />
        <span className={itemTitle}>News</span>
      </div>
      <div className={item}>
        <Image src={iconSports} alt="" />
        <span className={itemTitle}>Sports</span>
      </div>
    </div>
  );
}
