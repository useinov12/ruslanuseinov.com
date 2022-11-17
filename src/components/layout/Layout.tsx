import clsx from 'clsx';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { ThemeContext } from 'src/context/ThemeProvider';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <div
        className={clsx(
          'w-screen min-h-screen h-full relative',
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-dark text-white'
        )}
      >
          <Header />
          <div className='mx-auto max-w-screen-lg px-5'>
            <div className=''>{children}</div>
            <Footer />
          </div>
      </div>
    </>
  );
};

export default Layout;
