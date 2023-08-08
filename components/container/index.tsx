import React from 'react';

import LeftMenu from './leftMenu';
import SuggestionBar from './SuggestionBar';

export default function Container({ isShowMoreLeftContainer }: any) {
  return (
    <div className="flex mt-14 h-[calc(100vh-56px)] overflow-auto">
      <LeftMenu showMore={isShowMoreLeftContainer} />
      <SuggestionBar />
    </div>
  );
}
