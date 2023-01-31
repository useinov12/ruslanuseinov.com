import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import Header from './sharedUI/Header';
import Footer from './sharedUI/Footer';

import { useTheme } from 'src/context/ThemeProvider';
import { useRouter } from 'next/router';

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      <div
        className={clsx(
          'w-screen min-h-screen relative',
          'overflow-x-hidden',
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-dark text-white'
        )}
      >
        <Header />
        <div className={clsx('mx-auto  px-5', 'max-w-screen-lg')}>
          <div className="">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
