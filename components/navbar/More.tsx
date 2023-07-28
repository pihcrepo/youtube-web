import React from 'react';
import Image from 'next/image';
import youtubePremium from 'img/youtube-premium.png';
import youtubeMusic from 'img/youtube-music.png';
export default function More() {
  return (
    <div className="container">
      <div className="container-title">More from YouTube</div>

      <div className="item">
        <Image
          src={youtubePremium}
          alt=""
          className="more-icon youtube-premium"
        />
        <span>YouTube Premium</span>
      </div>
      <div className="item">
        <Image src={youtubeMusic} alt="" className="more-icon youtube-music" />
        <span>YouTube Music</span>
      </div>
      <div className="item">
        <Image src={youtubePremium} alt="" className="more-icon youtube-kids" />
        <span>YouTube Kids</span>
      </div>
    </div>
  );
}
