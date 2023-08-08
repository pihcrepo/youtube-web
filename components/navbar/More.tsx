import React from 'react';
import Image from 'next/image';
import youtubePremium from 'img/youtube-premium.png';
import youtubeMusic from 'img/youtube-music.png';
import {
  container,
  containerTitle,
  item,
  itemIcon,
  itemTitle,
} from './tailwind';
export default function More() {
  return (
    <div className={container}>
      <div className={containerTitle}>More from YouTube</div>

      <div className={item}>
        <Image src={youtubePremium} alt="" className={itemIcon} />
        <span className={itemTitle}>YouTube Premium</span>
      </div>
      <div className={item}>
        <Image src={youtubeMusic} alt="" className={itemIcon} />
        <span className={itemTitle}>YouTube Music</span>
      </div>
      <div className={item}>
        <Image
          src={youtubePremium}
          alt=""
          className="w-5 h-5 rotate-[-15deg]"
        />
        <span className={itemTitle}>YouTube Kids</span>
      </div>
    </div>
  );
}
