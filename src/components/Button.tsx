import { ReactNode, FC } from 'react';
import clsx from 'clsx';
import { useTheme } from 'src/context/ThemeProvider';

const Button: FC<{
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}> = ({ children, className, onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        theme === 'light' ? 'bg-dark/70' : 'bg-white',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',
        'p-[2px] rounded-lg flex justify-center items-center',
        'hover:border-primary-500 transition-all duration-200',
        'scale-100 hover:scale-[1.01] active:scale-[0.99] motion-safe:transform-gpu',
        'transition duration-25',
        'motion-reduce:hover:scale-100',
        'drop-shadow hover:drop-shadow-xl',
        className
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          'px-5 py-1 rounded-lg',
          theme === 'light' ? 'bg-gray-100' : 'bg-dark'
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
