import React from 'react';
import Image from 'next/image';

import iconSetting from '@/public/icon/setting.svg';
import iconReport from '@/public/icon/report.svg';
import iconHelp from '@/public/icon/help.svg';
import iconSendFeedback from '@/public/icon/sendfeedback.svg';

import {
  container,
  containerTitle,
  item,
  itemIcon,
  itemTitle,
} from './tailwind';
export default function Setting() {
  return (
    <div className={container}>
      <div className={item}>
        <Image src={iconSetting} alt="" className={itemIcon} />
        <span className={itemTitle}>Settings</span>
      </div>
      <div className={item}>
        <Image src={iconReport} alt="" className={itemIcon} />
        <span className={itemTitle}>Report history</span>
      </div>
      <div className={item}>
        <Image src={iconHelp} alt="" className={itemIcon} />
        <span className={itemTitle}>Help</span>
      </div>
      <div className={item}>
        <Image src={iconSendFeedback} alt="" className={itemIcon} />
        <span className={itemTitle}>Send feedback</span>
      </div>
    </div>
  );
}
