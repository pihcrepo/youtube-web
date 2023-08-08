import React, { useState } from 'react';
import avatar from 'img/avatar.png';
import Image from 'next/image';

import iconShowMore from '@/public/icon/showmore.svg';
import iconShowLess from '@/public/icon/showless.svg';
import {
  container,
  containerTitle,
  item,
  itemTitle,
  itemIcon,
} from './tailwind';

export default function Subscriptions() {
  const subscriptionsArr = [
    {
      id: 1,
      avatar: avatar,
      name: 'tatics',
    },
    {
      id: 2,
      avatar: avatar,
      name: 'channel',
    },
    {
      id: 3,
      avatar: avatar,
      name: 'music',
    },
    {
      id: 4,
      avatar: avatar,
      name: 'long music',
    },
    {
      id: 5,
      avatar: avatar,
      name: 'short music',
    },
    {
      id: 6,
      avatar: avatar,
      name: 'remix music',
    },
  ];

  const [isShowLess, setIsShowLess] = useState(true);
  function handleShowMore() {
    setIsShowLess(!isShowLess);
  }

  const showLessQuantity = 3;

  return (
    <div className={container}>
      <div className={containerTitle}>Subscriptions</div>

      {isShowLess
        ? subscriptionsArr.slice(0, showLessQuantity).map((sub) => (
            <div key={sub.id} className={item}>
              <Image src={sub.avatar} alt="" className={itemIcon} />
              <span className={itemTitle}>{sub.name}</span>
            </div>
          ))
        : subscriptionsArr.map((sub) => (
            <div key={sub.id} className={item}>
              <Image src={sub.avatar} alt="" className={itemIcon} />
              <span className={itemTitle}>{sub.name}</span>
            </div>
          ))}

      {subscriptionsArr.length > showLessQuantity ? (
        <div className={item} onClick={handleShowMore}>
          <Image src={isShowLess ? iconShowMore : iconShowLess} alt="" />
          <span className={itemTitle}>
            {isShowLess
              ? `Show ${subscriptionsArr.length - showLessQuantity} more`
              : 'Show less'}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
