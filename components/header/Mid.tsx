import React from 'react';
import Image from 'next/image';

import iconSearch from '@/public/icon/search.svg';
import iconMicro from '@/public/icon/micro.svg';

export default function Mid() {
  return (
    <div className="flex items-center h-10">
      <input
        type="text"
        className="w-[25vw] h-full pl-4 rounded-tl-[3rem] rounded-bl-[3rem] border border-black text-sm"
        placeholder="Search"
      />

      <div className="flex justify-center items-center w-14 h-10 border border-black rounded-tr-[3rem] rounded-br-[3rem]">
        <Image src={iconSearch} alt="" className="w-[25px] h-[25px]" />
      </div>

      <Image src={iconMicro} alt="" className="w-[25px] h-[25px]" />
    </div>
  );
}
