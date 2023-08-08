import React, { useState } from 'react';
import Image from 'next/image';

import iconLibrary from '@/public/icon/library.svg';
import iconHistory from '@/public/icon/history.svg';
import iconWatchLater from '@/public/icon/watchlater.svg';
import iconLikedVideos from '@/public/icon/likedvideos.svg';
import iconShowMore from '@/public/icon/showmore.svg';
import iconList from '@/public/icon/list.svg';
import iconShowLess from '@/public/icon/showless.svg';

import { item, itemTitle } from './tailwind';

export default function Library() {
  const createdList = [
    {
      name: 'music',
    },
    {
      name: 'long music',
    },
    {
      name: 'remix music',
    },
  ];

  const [isShowLess, setIsShowLess] = useState(true);
  function handleShowMore() {
    setIsShowLess(!isShowLess);
  }

  return (
    <div className="mt-3 pt3 border-t-gray-300">
      <div className={item}>
        <Image src={iconLibrary} alt="" />
        <span className={itemTitle}>Library</span>
      </div>
      <div className={item}>
        <Image src={iconHistory} alt="" />
        <span className={itemTitle}>History</span>
      </div>
      <div className={item}>
        <Image src={iconWatchLater} alt="" />
        <span className={itemTitle}>WatchLater</span>
      </div>
      <div className={item}>
        <Image src={iconLikedVideos} alt="" />
        <span className={itemTitle}>LikedVideos</span>
      </div>

      {isShowLess ? (
        <div className={item}>
          <Image src={iconList} alt="" />
          <span className={itemTitle}>{createdList[0].name}</span>
        </div>
      ) : (
        createdList.map((list) => (
          <div className={item}>
            <Image src={iconList} alt="" />
            <span className={itemTitle}>{list.name}</span>
          </div>
        ))
      )}

      <div className={item} onClick={handleShowMore}>
        {isShowLess ? (
          <Image src={iconShowMore} alt="" />
        ) : (
          <Image src={iconShowLess} alt="" />
        )}
        <span className={itemTitle}>
          {isShowLess ? 'Show more' : 'Show less'}
        </span>
      </div>
    </div>
  );
}
