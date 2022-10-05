import React, { Children, ReactNode } from 'react';
import clsx from 'clsx';

const Button: React.FC<{
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}> = ({ children, className, onClick }) => {
  return (
    <div
      className={clsx(
        'bg-white',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',
        'p-[2px] mr-2 my-2 rounded-md flex justify-center items-center',
        'hover:border-primary-500 transition-all duration-200',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-25',
        'motion-reduce:hover:scale-100',
        className
      )}
    >
      <button
        onClick={onClick}
        className={clsx('px-5 py-1 rounded-md bg-dark')}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
