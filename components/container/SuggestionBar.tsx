import React, { useRef } from 'react';
export default function SuggestionBar() {
  const suggestionList = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Music',
    },
    {
      id: 3,
      name: 'Rain',
    },
    {
      id: 4,
      name: 'Vocabulary',
    },
    {
      id: 5,
      name: 'Podcasts',
    },
    {
      id: 6,
      name: 'Gaming',
    },
    {
      id: 7,
      name: 'Game shows',
    },
    {
      id: 8,
      name: 'Funny',
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  const cssSuggestList =
    'flex gap-6 h-full w-5/6 items-center overflow-hidden border-black';

  return (
    <div className="flex justify-around overflow-hidden w-full h-14 border-b">
      <Btn onClick={handleScrollLeft} content={'<'} />
      <div className={cssSuggestList} ref={scrollRef}>
        {suggestionList.map((e) => (
          <SuggestionItem name={e.name} key={e.id} />
        ))}
      </div>
      <Btn onClick={handleScrollRight} content={'>'} />
    </div>
  );
}

type BtnProps = {
  onClick: () => void;
  content: string;
};
function Btn({ onClick, content }: BtnProps) {
  return (
    <button
      className="bg-transparent border-none cursor-pointer text-2xl"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

type SuggestionItemProps = {
  name: string;
  key: number;
};
function SuggestionItem({ name, key }: SuggestionItemProps) {
  return (
    <div
      className="flex justify-center items-center p-2
    cursor-pointer transition-all 
    hover:bg-gray-500 hover:rounded-md"
      key={key}
    >
      <span className="text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}
