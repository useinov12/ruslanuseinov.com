import clsx from 'clsx';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { ThemeContext } from 'src/context/ThemeProvider';
import { useRouter } from 'next/router';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const router = useRouter();


  return (
    <>
      <div
        className={clsx(
          'w-screen min-h-screen h-full relative',
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-dark text-white'
        )}
      >
        <Header />
        <div
          className={clsx(
            'mx-auto  px-5',
            inArticle(router.pathname) ? 'max-w-screen-lg' : 'max-w-screen-md'
          )}
        >
          <div className="">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;


export function inArticle(path: string): boolean {
  const list = [/(blog\/(.+))/, /(library\/(.+))/, /(projects\/(.+))/];
  return list.some((rx) => new RegExp(rx).test(path));
}