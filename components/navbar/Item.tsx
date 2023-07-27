import React from 'react';
import Image from 'next/image';

type Props = {
  icon: any;
  title: string;
  key?: number;
};
export default function Item({ icon, title, key }: Props) {
  return (
    <div
      className="flex items-center h-10 pl-3 cursor-pointer transition-all hover:bg-slate-300 hover:rounded-xl"
      key={key}
    >
      <Image src={icon} alt="" className="h-6 w-6" />
      <span className="pl-6 text-sm">{title}</span>
    </div>
  );
}
