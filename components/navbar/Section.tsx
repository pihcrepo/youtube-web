import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Section({ children, title }: Props) {
  return (
    <div className="flex flex-col w-full px-3 py-3 border-b">
      <div className="h-7.5 pl-3 flex items-center">{title}</div>
      {children}
    </div>
  );
}
