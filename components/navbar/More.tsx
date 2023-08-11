import React from 'react';
import Image from 'next/image';
import youtubePremium from 'img/youtube-premium.png';
import youtubeMusic from 'img/youtube-music.png';
import Item from './Item';
import Section from './Section';
export default function More() {
  const item =
    'flex items-center h-10 pl-3 cursor-pointer transition-all hover:bg-slate-300 hover:rounded-xl';
  const itemTitle = 'pl-6 text-sm';
  return (
    <Section title="Explore">
      <Item icon={youtubePremium} title="YouTube Premium" />
      <Item icon={youtubeMusic} title="YouTube Music" />

      <div className={item}>
        <Image
          src={youtubePremium}
          alt=""
          className="w-5 h-5 rotate-[-15deg]"
        />
        <span className={itemTitle}>YouTube Kids</span>
      </div>
    </Section>
  );
}
