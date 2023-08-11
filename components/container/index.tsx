import React from 'react';

import SuggestionBar from './SuggestionBar';

import dataimage from '@/img/dataimage.jpg';
import datalogo from '@/img/datalogo.jpg';
import Image from 'next/image';

export default function Container() {
  const data = [
    {
      id: 1,
      image: dataimage,
      title: "let's travel around the world",
      channelName: 'Travel',
      channelLogo: datalogo,
      views: '782K',
      createdAt: '1 month ago',
      time: '2:27',
    },
  ];

  return (
    <div className="overflow-hidden w-full h-full">
      <SuggestionBar />
      <div className="overflow-auto h-full pt-6">
        {data.map((e) => (
          <div className="w-[300px] h-[300px] border" key={e.id}>
            <div className="relative">
              <Image src={e.image} alt="" className="rounded-xl hover:rounded-none transition-all" />
              <div className="absolute right-0 bottom-0 px-1 mr-1 mb-1 rounded-md text-xs bg-black">
                {e.time}
              </div>
            </div>
            <div className="flex mt-3">
              <Image
                src={e.channelLogo}
                alt=""
                className="w-9 h-9 rounded-[50%] mt-2"
              />
              <div className="ml-3">
                <div className="font-light text-[#DFDCD8]">{e.title}</div>
                <div className="font-thin text-sm text-[#9F9F9F]">{e.channelName}</div>
                <div className="flex gap-3 text-[#9F9F9F]">
                  <div className="text-sm">{e.views}</div>
                  &bull;
                  <div className="text-sm">{e.createdAt}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
