import clsx from 'clsx';
import { ReactNode } from 'react';

import Navbar from './sharedUI/Navbar';
import Footer from './sharedUI/Footer';

import { useTheme } from 'src/context/ThemeProvider';

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={clsx(
          'w-screen overflow-x-hidden min-h-screen relative',
          'overflow-x-hidden',
          theme === 'light' ? ' text-gray-800' : ' text-gray-50',
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-100 to-gray-300'
            : 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 to-gray-900'
        )}
      >
        <Navbar />
        <div className="px-3 lg:px-0 w-screen overflow-x-hidden">{children}</div>
        <Footer />
      </div>
    </>
  );
}
