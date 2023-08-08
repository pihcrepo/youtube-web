import React from 'react';

type Props = {
  isShowOverlay: boolean;
  menuClick: any;
};

export default function Overlay({ isShowOverlay, menuClick }: Props) {
  return (
    <div
      className={
        'fixed bg-[#00000080] w-screen h-screen z-30 opacity-50' +
        (isShowOverlay ? ' block' : ' hidden')
      }
      onClick={menuClick}
    ></div>
  );
}
