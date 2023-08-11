import React from 'react';

import Header from './Header';
import Home from './Home';
import Subscriptions from './Subscriptions';
import Explore from './Explore';
import More from './More';
import Setting from './Setting';
import Footer from './Footer';

type Props = {
  isShowNavbar: boolean;
  menuClick: any;
};

export default function Navbar({ isShowNavbar, menuClick }: Props) {
  const container =
    'w-60 h-screen flex flex-col absolute left-0 top-0 transition-all overflow-auto z-50 bg-white translate-x-[-100%]';
  return (
    <div
      className={
        container +
        (isShowNavbar ? ' md:translate-x-0' : ' md:translate-x-[-100%]')
      }
    >
      <Header showNavbar={menuClick} />
      <div className="mt-14 overflow-auto">
        <Home />
        <Subscriptions />
        <Explore />
        <More />
        <Setting />
        <Footer />
      </div>
    </div>
  );
}
