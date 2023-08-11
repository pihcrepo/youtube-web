import React from 'react';

type Props = {
  isShowOverlay: boolean;
  menuClick: any;
};

export default function Overlay({ isShowOverlay, menuClick }: Props) {
  return (
    <div
      className={
        isShowOverlay
          ? 'md:fixed md:bg-[#00000080] md:w-screen md:h-screen md:opacity-50 md:z-30'
          : ' md:hidden '
      }
      onClick={menuClick}
    ></div>
  );
}
