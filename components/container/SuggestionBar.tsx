import React, { useRef } from 'react';
export default function SuggestionBar() {
  const suggestionList = [
    {
      name: 'All',
    },
    {
      name: 'Music',
    },
    {
      name: 'Rain',
    },
    {
      name: 'Vocabulary',
    },
    {
      name: 'Podcasts',
    },
    {
      name: 'Gaming',
    },
    {
      name: 'Game shows',
    },
    {
      name: 'Funny',
    },
    {
      name: 'Funny',
    },
    {
      name: 'Funny',
    },
    {
      name: 'Funny',
    },
    {
      name: 'Funny',
    },
  ];

  // const scrollRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -200, // Adjust this value to control the slide distance
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      top: 0,
      left: 200, // Adjust this value to control the slide distance
      behavior: 'smooth',
    });
  };

  const cssContainer =
    'flex w-[93%] h-14 bg-black fixed justify-between mt-14 overflow-hidden';
  const cssBtn = 'bg-transparent border-none cursor-pointer text-2xl';
  const cssSuggestList =
    'flex gap-6 w-4/5 items-center overflow-auto border-black';
  const cssSuggestItem =
    'flex justify-center items-center text-sm h-8 px-3 cursor-pointer overflow-x-hidden transition-all hover:bg-gray-500 hover:rounded-md';

  return (
    <div className={cssContainer}>
      <button className={cssBtn} onClick={handleScrollLeft}>
        &lt;
      </button>

      <div className={cssSuggestList} ref={scrollRef}>
        {suggestionList.map((e) => (
          <div className={cssSuggestItem}>{e.name}</div>
        ))}
      </div>

      <button className={cssBtn} onClick={handleScrollRight}>
        &gt;
      </button>
    </div>
  );
}
