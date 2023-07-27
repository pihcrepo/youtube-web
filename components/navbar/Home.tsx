import React, { useState } from 'react';

import iconHome from '@/public/icon/home.svg';
import iconShorts from '@/public/icon/shorts.svg';
import iconSubscriptions from '@/public/icon/subscriptions.svg';

import iconLibrary from '@/public/icon/library.svg';
import iconHistory from '@/public/icon/history.svg';
import iconWatchLater from '@/public/icon/watchlater.svg';
import iconLikedVideos from '@/public/icon/likedvideos.svg';
import iconShowMore from '@/public/icon/showmore.svg';
import iconList from '@/public/icon/list.svg';
import iconShowLess from '@/public/icon/showless.svg';

import Item from './Item';
import Section from './Section';

export default function Home() {
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
    <Section>
      <Item icon={iconHome} title="Home" />
      <Item icon={iconShorts} title="Shorts" />
      <Item icon={iconSubscriptions} title="Subscriptions" />

      <div className="mt-3 pt3 border-t">
        <Item icon={iconLibrary} title="Library" />
        <Item icon={iconHistory} title="History" />
        <Item icon={iconWatchLater} title="WatchLater" />
        <Item icon={iconLikedVideos} title="LikedVideos" />

        {isShowLess ? (
          <Item icon={iconList} title={createdList[0].name} />
        ) : (
          createdList.map((list) => <Item icon={iconList} title={list.name} />)
        )}

        <div onClick={handleShowMore}>
          <Item
            icon={isShowLess ? iconShowMore : iconShowLess}
            title={isShowLess ? 'Show more' : 'Show less'}
          />
        </div>
      </div>
    </Section>
  );
}
