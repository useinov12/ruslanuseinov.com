import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import Navbar from './sharedUI/Navbar';
import Footer from './sharedUI/Footer';

import { useTheme } from 'src/context/ThemeProvider';

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={clsx(
          'w-screen min-h-screen relative',
          'overflow-x-hidden',
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-dark text-white'
        )}
      >
        <Navbar />
        <div className='px-3 lg:px-0'>{children}</div>
        <Footer />
      </div>
    </>
  );
}
