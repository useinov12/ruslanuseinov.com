import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

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
          'w-screen min-h-screen h-full relative',
          'overflow-x-hidden',
          theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-dark text-white'
        )}
      >
        <Header />
        <div
          className={clsx(
            'mx-auto  px-5',
            'max-w-screen-lg'
            // inArticle(router.pathname) ? 'max-w-screen-lg' : 'max-w-screen-md'
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
