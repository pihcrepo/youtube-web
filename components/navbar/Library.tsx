import React from 'react';

import {
  iconLibrary,
  iconHistory,
  iconWatchLater,
  iconLikedVideos,
  iconShowMore,
} from './icon';

export default function Library() {
  return (
    <div className="library">
      <div className="item">
        {iconLibrary}
        <span>Library</span>
      </div>
      <div className="item">
        {iconHistory}
        <span>History</span>
      </div>
      <div className="item">
        {iconWatchLater}
        <span>Watch later</span>
      </div>
      <div className="item">
        {iconLikedVideos}
        <span>Liked videos</span>
      </div>
      <div className="item">
        {iconShowMore}
        <span>Show more</span>
      </div>
    </div>
  );
}
