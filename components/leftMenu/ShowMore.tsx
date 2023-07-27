import React from 'react';
import Home from '../navbar/Home';
import Subscriptions from '../navbar/Subscriptions';
import Explore from '../navbar/Explore';
import More from '../navbar/More';
import Setting from '../navbar/Setting';
import Footer from '../navbar/Footer';

export default function ShowMore({ showMore }: any) {
  const container = 'w-60 h-full overflow-auto';
  return (
    <div className={container + (showMore ? '' : ' hidden')}>
      <Home />
      <Subscriptions />
      <Explore />
      <More />
      <Setting />
      <Footer />
    </div>
  );
}
