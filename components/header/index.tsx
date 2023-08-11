'use client';
import React, { useState } from 'react';

import Left from './Left';
import Mid from './Mid';
import Right from './Right';

type Props = {
  menuClick: any;
};

export default function Header({ menuClick }: Props) {
  return (
    <div className="flex justify-between items-center w-screen h-14 px-4 z-50 border-b">
      <Left menuClick={menuClick} />
      <Mid />
      <Right />
    </div>
  );
}
