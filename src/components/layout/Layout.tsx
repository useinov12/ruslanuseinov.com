import clsx from 'clsx';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { PreloadProvider } from 'src/context/PreloadContext';
import { ThemeContext } from 'src/context/ThemeProvider';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <div
        className={clsx(
          'w-screen h-full',
          theme === 'light' ? 'bg-gray-300 text-dark' : 'bg-dark text-white'
        )}
      >
        {/* <PreloadProvider> */}
          <Header />
          <div className={clsx('mx-auto max-w-screen-lg')}>
            <div className="min-h-[90vh]">{children}</div>
            <Footer />
          </div>
        {/* </PreloadProvider> */}
      </div>
    </>
  );
};

export default Layout;
