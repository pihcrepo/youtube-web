import React from 'react';

export default function NavFooter() {
  return (
    <div className="navfooter">
      <div className="navfooter-section">
        <a href="">About</a>
        <a href="">Press</a>
        <a href="">Copyright</a> <br />
        <a href="">Contact us</a>
        <a href="">Creators</a> <br />
        <a href="">Advertise</a>
        <a href="">Developers</a>
      </div>
      <div className="navfooter-midsection">
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Policy & Safety</a> <br />
        <a href="">How YouTube works</a> <br />
        <a href="">Test new features</a>
      </div>
      <div className="navfooter-bottom">@ 2023 Google LLC</div>
    </div>
  );
}
