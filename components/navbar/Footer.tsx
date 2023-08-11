import React from 'react';

export default function Footer() {
  return (
    <div className="text-[13px]">
      <div className="flex flex-wrap gap-1 w-4/5 pt-4 pr-0 pb-0 pl-6">
        <a href="">About</a>
        <a href="">Press</a>
        <a href="">Copyright</a> <br />
        <a href="">Contact us</a>
        <a href="">Creators</a> <br />
        <a href="">Advertise</a>
        <a href="">Developers</a>
      </div>
      <div className="flex flex-wrap gap-1 pt-3 pr-0 pb-0 pl-6">
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Policy & Safety</a> <br />
        <a href="">How YouTube works</a> <br />
        <a href="">Test new features</a>
      </div>
      <div className="text-[#a1998c] text-xs py-4 px-6">@ 2023 Google LLC</div>
    </div>
  );
}
