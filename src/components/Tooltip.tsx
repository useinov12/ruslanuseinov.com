import clsx from 'clsx';
import * as React from 'react';

interface TooltipTextProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipTextProps) {
  return (
    <div className="relative group h-full">
      <div
        className={clsx(
          'w-fit whitespace-nowrap',
          'absolute -translate-y-[110%] -translate-x-1/3 ',
          'scale-0 group-hover:scale-100 ',
          'transition-all duration-150 ease',
          'inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200',
          'border dark:border-gray-600 '
        )}
      >
        {content}
      </div>
      {children}
    </div>
  );
}
