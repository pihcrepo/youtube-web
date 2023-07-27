import React from 'react';

import iconSetting from '@/public/icon/setting.svg';
import iconReport from '@/public/icon/report.svg';
import iconHelp from '@/public/icon/help.svg';
import iconSendFeedback from '@/public/icon/sendfeedback.svg';

import Item from './Item';
import Section from './Section';
export default function Setting() {
  return (
    <Section>
      <Item icon={iconSetting} title="Settings" />
      <Item icon={iconReport} title="Report history" />
      <Item icon={iconHelp} title="Help" />
      <Item icon={iconSendFeedback} title="Send feedback" />
    </Section>
  );
}
