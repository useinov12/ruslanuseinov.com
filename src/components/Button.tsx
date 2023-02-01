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
        'group',
        theme === 'light' ? 'bg-gray-700/20' : 'bg-transparent',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',
        'p-[2px] rounded-lg flex justify-center items-center border',
        'hover:border-primary-500 ',
        'transition duration-25',
        'hover:ring-4 ring-white',
        'drop-shadow hover:drop-shadow-xl',
        className
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          'px-5 py-1 rounded-lg',
          'font-poppins font-medium',
          'group-hover:text-white'
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
