// import clsx from 'clsx';
import * as React from 'react';
import {  TooltipProps } from 'react-tippy';

type TooltipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export default function Tooltip(props: TooltipTextProps) {
  return ( <></>
    // <TippyTooltip
    //   // trigger="mouseenter"
    //   interactive
    //   html={
    //     <div
    //       className={clsx(
    //         className,
    //         'inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200',
    //         'border dark:border-gray-600 '
    //       )}
    //     >
    //       {content}
    //     </div>
    //   }
    // >
    //   {withUnderline ? (
    //     <span
    //       className={clsx(spanClassName, 'underline')}
    //       style={{ textDecorationStyle: 'dotted' }}
    //     >
    //       {children}
    //     </span>
    //   ) : (
    //     <>{children}</>
    //   )}
    // </TippyTooltip>
  );
}
