import React, { useState } from 'react';
import avatar from 'img/avatar.png';

import iconShowMore from '@/public/icon/showmore.svg';
import iconShowLess from '@/public/icon/showless.svg';
import { container, containerTitle } from './tailwind';
import Item from './Item';
import Section from './Section';

export default function Subscriptions() {
  const [isShowLess, setIsShowLess] = useState(true);
  function handleShowMore() {
    setIsShowLess(!isShowLess);
  }

  const showLessQuantity = 3;

  return (
    <Section title="Subscriptions">
      {isShowLess
        ? subscriptionsList()
            .slice(0, showLessQuantity)
            .map((sub) => (
              <Item icon={sub.avatar} title={sub.name} key={sub.id} />
            ))
        : subscriptionsList().map((sub) => (
            <Item icon={sub.avatar} title={sub.name} key={sub.id} />
          ))}

      {subscriptionsList().length > showLessQuantity ? (
        <div onClick={handleShowMore}>
          <Item
            icon={isShowLess ? iconShowMore : iconShowLess}
            title={
              isShowLess
                ? `Show ${subscriptionsList().length - showLessQuantity} more`
                : 'Show less'
            }
          />
        </div>
      ) : (
        ''
      )}
    </Section>
  );
}

type SubscriptionsListProps = {
  id: number;
  avatar: any;
  name: string;
};
function subscriptionsList(): SubscriptionsListProps[] {
  return [
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
}
