import React from 'react';
import ShowLess from './ShowLess';
import ShowMore from './ShowMore';

export default function LeftMenu({ showMore }: any) {
  return (
    <div className="mt-14 h-[calc(100vh-56px)] overflow-auto">
      <ShowLess showMore={showMore} />
      <ShowMore showMore={showMore} />
    </div>
  );
}
