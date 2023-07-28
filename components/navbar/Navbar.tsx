import React from 'react';
import Image from 'next/image';

import youtube from 'img/youtube.png';

import { iconMenu } from './icon';

import 'css/navbar.css';
import HomeShorts from './HomeShorts';
import Subscriptions from './Subscriptions';
import Explore from './Explore';
import More from './More';
import Setting from './Setting';
import NavFooter from './NavFooter';

export default function Navbar({ isShowNavbar }: any) {
  return (
    <div className={'navbar ' + (isShowNavbar ? 'show-navbar' : '')}>
      <div className="navbar-header">
        <div className="menu-icon">{iconMenu}</div>
        <Image src={youtube} alt={''} className="youtube-icon" />
      </div>

      <HomeShorts />
      <Subscriptions />
      <Explore />
      <More />
      <Setting />
      <NavFooter />
    </div>
  );
}
