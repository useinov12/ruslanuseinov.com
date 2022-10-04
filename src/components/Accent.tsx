import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors z-20',
        'text-transparent bg-clip-text bg-gradient-to-tr from-primary-400 via-blue-500 to-primary-400',
      )}
    >
      {children}
    </span>
  );
}
