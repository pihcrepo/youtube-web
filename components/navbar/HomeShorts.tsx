import React from 'react';

import { iconHome, iconShorts, iconSubscriptions } from './icon';
import Library from './Library';

export default function HomeShorts() {
  return (
    <div className="container">
      <div className="item">
        {iconHome}
        <span>Home</span>
      </div>
      <div className="item">
        {iconShorts}
        <span>Shorts</span>
      </div>
      <div className="item">
        {iconSubscriptions}
        <span>Subscriptions</span>
      </div>

      <Library />
    </div>
  );
}
