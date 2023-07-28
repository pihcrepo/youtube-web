import React from 'react';
import { iconSetting, iconReport, iconHelp, iconSendFeedback } from './icon';
export default function Setting() {
  return (
    <div className="container">
      <div className="item">
        {iconSetting}
        <span>Settings</span>
      </div>
      <div className="item">
        {iconReport}
        <span>Report history</span>
      </div>
      <div className="item">
        {iconHelp}
        <span>Help</span>
      </div>
      <div className="item">
        {iconSendFeedback}
        <span>Send feedback</span>
      </div>
    </div>
  );
}
