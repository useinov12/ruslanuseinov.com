import clsx from 'clsx';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { PreloadProvider } from 'src/context/PreloadContext';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <PreloadProvider>
        <Header />
        <div
          className={clsx(
            'relatve',
            'max-w-screen-lg',
            'm-auto min-h-[90vh] h-full',
            'bg-dark text-white',
            'px-3 lg:px-0'
          )}
        >
          {children}
        </div>
        <Footer />
      </PreloadProvider>
    </>
  );
};

export default Layout;
