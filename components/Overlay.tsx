import React from 'react';
import 'css/overlay.css';

export default function Overlay({ isShowOverlay, showNavbar }: {isShowOverlay: boolean, showNavbar: any}) {
  return (
    <div
      className={'overlay ' + (isShowOverlay ? 'show-overlay' : '')}
      onClick={showNavbar}
    >
    </div>
  );
}
