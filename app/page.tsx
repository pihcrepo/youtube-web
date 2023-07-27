'use client';

import { useState } from 'react';

import Overlay from '@/components/Overlay';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import LeftMenu from '@/components/leftMenu';
import Container from '@/components/container';

export default function Home() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [isShowMoreLeftMenu, setIsShowMoreLeftContainer] = useState(false);
  function menuClick() {
    setIsShowNavbar(!isShowNavbar);
    setIsShowOverlay(!isShowOverlay);
    setIsShowMoreLeftContainer(!isShowMoreLeftMenu);
  }
  return (
    <div>
      <Overlay isShowOverlay={isShowOverlay} menuClick={menuClick} />
      <Header menuClick={menuClick} />
      <Navbar isShowNavbar={isShowNavbar} menuClick={menuClick} />

      <div className="flex h-[calc(100vh-56px)]">
        <LeftMenu showMore={isShowMoreLeftMenu} />
        <Container />
      </div>
    </div>
  );
}
