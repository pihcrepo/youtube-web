import React from 'react';
import Image from 'next/image';

import iconHome from '@/public/icon/home.svg';
import iconShorts from '@/public/icon/shorts.svg';
import iconSubscriptions from '@/public/icon/subscriptions.svg';
import iconLibrary from '@/public/icon/library.svg';

export default function ShowLess({ showMore }: any) {
  const container = 'px-1 w-[70px] border-r';
  return (
    <div className={container + (showMore ? ' hidden' : '')}>
      <Item icon={iconHome} title="Home" />
      <Item icon={iconShorts} title="Shorts" />
      <Item icon={iconSubscriptions} title="Subscriptions" />
      <Item icon={iconLibrary} title="Library" />
    </div>
  );
}

type ItemProps = {
  icon: string;
  title: string;
};
function Item({ icon, title }: ItemProps) {
  return (
    <div className="flex flex-col jus items-center w-16 h-[74px] pt-4 px-0 pb-3.5">
      <Image src={icon} alt="" />
      <span className="text-[10px]">{title}</span>
    </div>
  );
}
