import clsx from 'clsx';
import { ReactNode } from 'react';
import { useTheme } from 'src/context/ThemeProvider';

interface TooltipTextProps {
  content: ReactNode;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipTextProps) {
  const { theme } = useTheme();
  return (
    <div className="relative group h-full">
      <div
        className={clsx(
          'w-fit whitespace-nowrap',
          'absolute -translate-y-[110%] -translate-x-1/3 ',
          'scale-0 group-hover:scale-100 ',
          'transition-all duration-150 ease',
          'inline-block rounded-md  p-1  ',
          'border-2 border-gray-600 ',
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
        )}
      >
        {content}
      </div>
      {children}
    </div>
  );
}
