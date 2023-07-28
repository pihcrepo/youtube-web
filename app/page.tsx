'use client';
import Overlay from '@/components/Overlay';
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';
import { useState } from 'react';

export default function Home() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  function showNavbar() {
    setIsShowNavbar(!isShowNavbar);
    setIsShowOverlay(!isShowOverlay);
  }
  return (
    <div>
      <Overlay isShowOverlay={isShowOverlay} showNavbar={showNavbar} />
      <Header showNavbar={showNavbar} />
      <Navbar isShowNavbar={isShowNavbar} />
    </div>
  );
}
