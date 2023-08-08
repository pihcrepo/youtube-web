import React from 'react';
import ShowLess from './ShowLess';
import ShowMore from './ShowMore';

export default function LeftMenu({ showMore }: any) {
  return (
    <>
      <ShowLess showMore={showMore} />
      <ShowMore showMore={showMore} />
    </>
  );
}
