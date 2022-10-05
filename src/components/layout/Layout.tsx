import clsx from 'clsx';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className={clsx(
          'max-w-screen-lg m-auto min-h-[90vh] h-full',
          'bg-dark text-white',
          'px-3 lg:px-0'
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
