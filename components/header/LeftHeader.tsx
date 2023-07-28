import React from 'react';
import youtube from 'img/youtube.png';
import Image from 'next/image';

import { iconMenu } from './icon';

export default function LeftHeader({ showNavbar }: any) {
  function log() {
    console.log('this is the log from menu icon');
  }
  return (
    <div className="left-header">
      <div className="menu-icon" onClick={showNavbar}>
        {iconMenu}
      </div>
      <Image src={youtube} alt="" className="youtube-icon" />
    </div>
  );
}
