'use client';
import React, { useState } from 'react';

import 'css/header.css';

import LeftHeader from './LeftHeader';
import MidHeader from './MidHeader';
import RightHeader from './RightHeader';

export default function Header({ showNavbar }: any) {
  return (
    <div className="header">
      <LeftHeader showNavbar={showNavbar} />
      <MidHeader />
      <RightHeader />
    </div>
  );
}
