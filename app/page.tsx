'use client';
import Overlay from '@/components/Overlay';
import Container from '@/components/container';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import { useState } from 'react';

import Image from 'next/image';

export default function Home() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [isShowMoreLeftContainer, setIsShowMoreLeftContainer] = useState(false);
  function menuClick() {
    setIsShowNavbar(!isShowNavbar);
    setIsShowOverlay(!isShowOverlay);
    setIsShowMoreLeftContainer(!isShowMoreLeftContainer);

    console.log('test');
  }
  return (
    <div>
      <Overlay isShowOverlay={isShowOverlay} menuClick={menuClick} />
      <Header menuClick={menuClick} />
      <Navbar isShowNavbar={isShowNavbar} menuClick={menuClick} />
      <Container isShowMoreLeftContainer={isShowMoreLeftContainer} />
    </div>
  );
}
