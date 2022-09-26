import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'text-transparent bg-clip-text bg-gradient-to-tr from-primary-500  via-primary-400 to-white'
      )}
    >
      {children}
    </span>
  );
}
