import React from 'react';
import ShowLess from './ShowLess';
import ShowMore from './ShowMore';

export default function LeftMenu({ showMore }: any) {
  return (
    <div className="">
      <ShowLess showMore={showMore} />
      <ShowMore showMore={showMore} />
    </div>
  );
}
