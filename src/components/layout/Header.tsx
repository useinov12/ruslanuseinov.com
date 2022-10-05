import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [onTop, setOnTop] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('/');

  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [router.pathname]);

  React.useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return (
    <nav
      className={clsx(
        'bg-dark text-white sticky top-0 z-50',
        'transition-shadow border border-transparent',
        'transition-all relative overflow-x-hidden',
        !onTop &&
          'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border-b-gray-600 '
      )}
    >
      <div
        className={clsx(
          'h-2 w-full bg-primary-500 border-t border-b border-primary-500',
          'relative',
          'before:absolute before:inset-0',
          'before:-translate-x-full',
          'before:animate-shimmer',
          'before:bg-gradient-to-r',
          'before:from-transparent before:via-white before:to-transparent'
        )}
      />
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-6 md:px-2 py-4 ">
        <Link href={'/'}>
          <h3
            className={clsx(
              'font-mono cursor-pointer transition-all text-xl sm:text-2xl ',
              'hover:text-transparent bg-clip-text bg-gradient-to-tr from-primary-500  via-primary-400 to-white'
            )}
          >
            Ruslan Useinov
          </h3>
        </Link>

        <ul className={'hidden md:flex'}>
          {links.map(({ text, path }) => (
            <li
              key={text}
              className={clsx(
                'mx-2 text-lg hover:text-primary-500',
                'transition-all duration-100 hover:cursor-pointer hover:animate-pulse'
              )}
            >
              <h4
                className={clsx(
                  'font-normal',
                  currentPage === path && 'text-primary-500'
                )}
              >
                <Link href={path}>{text}</Link>
              </h4>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="w-8 h-4 flex flex-col justify-between"
          >
            <div
              className={clsx(
                'w-full h-1 bg-white rounded transition-all',
                isOpen ? 'translate-y-3 rotate-45' : '-translate-y-0'
              )}
            />
            <div
              className={clsx(
                'w-full h-1 bg-white rounded transition-all',
                isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'fixed inset-0 w-screen h-screen  z-40 overflow-y-hidden',
          'flex items-center justify-start px-8 transition-all duration-150',
          isOpen
            ? 'pointer-events-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 '
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-center">
          <ul className={'md:hidden flex flex-col'}>
            {links.map(({ text, path }) => (
              <li
                key={text}
                className={clsx(
                  'mx-2 hover:text-primary-400 transition-all',
                  'duration-100 hover:cursor-pointer'
                )}
              >
                <h1 className="font-mono text-4xl my-2 ">
                  <Link href={path}>{text}</Link>
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

const links = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Blog',
    path: '/blog',
  },
  {
    text: 'Projects',
    path: '/projects',
  },
  {
    text: 'Library',
    path: '/library',
  },
  {
    text: 'About',
    path: '/about',
  },
];
