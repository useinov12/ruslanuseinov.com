import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import logo from '../../../public/favicon/logo-2.png';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
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
    if (isMobileNavOpen) setMobileNavOpen(false);
  }, [router.asPath]);

  React.useEffect(() => {
    setCurrentPage(router.asPath);
  }, [router.asPath]);

  return (
    <nav
      className={clsx(
        'bg-dark text-white sticky top-0 z-50',
        'transition-shadow border border-transparent',
        'transition-all overflow-x-hidden',
        'relative overflow-y-hidden',
        !onTop &&
          'bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 ',
        isMobileNavOpen && 'overflow-y-hidden'
      )}
    >
      <div
        className={clsx(
          'h-1 w-full bg-primary-500',
          'relative',
          'before:absolute before:inset-0',
          'before:-translate-x-full',
          'before:animate-shimmer',
          'before:bg-gradient-to-r',
          'before:from-transparent before:via-white before:to-transparent'
        )}
      />
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-6 lg:px-0 py-4 ">
        <Link href={'/'}>
          <Image
            src={logo}
            width={70}
            height={70}
            className={clsx(' cursor-pointer transition-all')}
          />
        </Link>
        {/* DESKTOP NAV */}
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

        {/* MOBILE NAV */}
        <div
          className={clsx(
            'z-50 md:hidden md:z-0',
            isMobileNavOpen && 'h-screen'
          )}
        >
          
          <button
            onClick={() => setMobileNavOpen((p) => !p)}
            className={clsx(
              'w-8 h-4 flex flex-col justify-between',
              isMobileNavOpen && 'translate-y-6'
            )}
          >
            <div
              className={clsx(
                'w-full h-1 bg-white rounded transition-all',
                isMobileNavOpen ? 'translate-y-3 rotate-45' : '-translate-y-0'
              )}
            />
            <div
              className={clsx(
                'w-full h-1 bg-white rounded transition-all',
                isMobileNavOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'
              )}
            />
          </button>
        </div>
      </div>
      

      <div
        className={clsx(
          'absolute inset-0 w-screen h-screen  z-40 overflow-y-hidden',
          'flex items-center justify-start px-8 transition-all duration-150',
          isMobileNavOpen
            ? 'pointer-events-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 scroll-y-none '
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-center">
          <ul className={'md:hidden flex flex-col'}>
            {links.map(({ text, path }) => (
              <li
                key={text}
                className={clsx(
                  'mx-2 hover:text-primary-500 transition-all',
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
