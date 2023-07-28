import React from 'react';
import avatar from 'img/avatar.png';
import Image from 'next/image';

export default function Subscriptions() {
  const subscriptionsArr = [
    {
      avatar: avatar,
      name: 'tatics',
    },
    {
      avatar: avatar,
      name: 'channel',
    },
    {
      avatar: avatar,
      name: 'music',
    },
  ];
  return (
    <div className="container">
      <div className="container-title">Subscriptions</div>

      {subscriptionsArr.map((sub) => (
        <div className="item">
          <Image src={sub.avatar} alt="" className="sub-avatar" />
          <span>{sub.name}</span>
        </div>
      ))}
    </div>
  );
}
