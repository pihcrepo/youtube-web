import React from 'react';

import iconTrending from '@/public/icon/trending.svg';
import iconMusic from '@/public/icon/music.svg';
import iconGaming from '@/public/icon/gaming.svg';
import iconNews from '@/public/icon/news.svg';
import iconSports from '@/public/icon/sports.svg';

import Item from './Item';
import Section from './Section';
export default function Explore() {
  return (
    <Section title="Explore">
      <Item icon={iconTrending} title="Trending" />
      <Item icon={iconMusic} title="Music" />
      <Item icon={iconGaming} title="Gaming" />
      <Item icon={iconNews} title="News" />
      <Item icon={iconSports} title="Sports" />
    </Section>
  );
}
