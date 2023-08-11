import React from 'react';
import Image from 'next/image';

import avatar from 'img/avatar.png';
import iconCamera from '@/public/icon/camera.svg';
import iconBell from '@/public/icon/bell.svg';

export default function Right() {
  return (
    <div className="flex items-center gap-4">
      <Image src={iconCamera} alt="" className="w-6 h-6" />
      <Image src={iconBell} alt="" className="w-6 h-6" />
      <Image src={avatar} alt="" className="w-8 h-8" />
    </div>
  );
}
