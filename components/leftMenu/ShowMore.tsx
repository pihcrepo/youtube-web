import React from 'react';
import HomeShorts from '../navbar/HomeShorts';
import Subscriptions from '../navbar/Subscriptions';
import Explore from '../navbar/Explore';
import More from '../navbar/More';
import Setting from '../navbar/Setting';
import Footer from '../navbar/Footer';

export default function ShowMore({ showMore }: any) {
  const container = 'w-60 overflow-auto h-screen';
  return (
    <div className={container + (showMore ? '' : ' hidden')}>
      <HomeShorts />
      <Subscriptions />
      <Explore />
      <More />
      <Setting />
      <Footer />
    </div>
  );
}
