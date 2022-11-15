import clsx from 'clsx';
import * as React from 'react';
import { Tooltip as ReactTooltip, TooltipProps } from 'react-tippy';


type TooltipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
}  & TooltipProps & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

const Tooltip = ({
  content,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: any) => {
  return (
    <ReactTooltip
      trigger="mouseenter"
      interactive
      html={
        <div
          className={clsx(
            className,
            'inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200',
            'border dark:border-gray-600 '
          )}
        >
          {content}
        </div>
      }
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </ReactTooltip>
  );
};

export default Tooltip;
