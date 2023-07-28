import React from 'react';
import {
  iconTrending,
  iconMusic,
  iconGaming,
  iconNews,
  iconSports,
} from './icon';
export default function Explore() {
  return (
    <div className="container">
      <div className="container-title">Explore</div>

      <div className="item">
        {iconTrending}
        <span>Trending</span>
      </div>
      <div className="item">
        {iconMusic}
        <span>Music</span>
      </div>
      <div className="item">
        {iconGaming}
        <span>Gaming</span>
      </div>
      <div className="item">
        {iconNews}
        <span>News</span>
      </div>
      <div className="item">
        {iconSports}
        <span>Sports</span>
      </div>
    </div>
  );
}
