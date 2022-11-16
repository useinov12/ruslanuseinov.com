import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
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
    <div className="sticky top-0 z-50">
      <HorizontalBar />
      <nav
        className={clsx(
          'transition-shadow border border-transparent',
          'transition-all overflow-x-hidden',
          'relative overflow-y-hidden',
          !onTop &&
            'bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 ',
          isMobileNavOpen && 'overflow-y-hidden',
          'max-w-screen-lg mx-auto',
          'px-6 lg:px-0 py-4'
        )}
      >
        <div className="flex items-center justify-between ">
          <Logo />
          <DesktopNav currentPage={currentPage} />

          <MobileNavButton
            isMobileNavOpen={isMobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>

        <MobileNav isMobileNavOpen={isMobileNavOpen} />
      </nav>
    </div>
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

const HorizontalBar = () => {
  return (
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
  );
};

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'/favicon/logo-2.png'}
        width={50}
        height={50}
        className={clsx(' cursor-pointer transition-all')}
      />
    </Link>
  );
};

const MobileNavButton = ({
  isMobileNavOpen,
  setMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<any>;
}) => {
  return (
    <div
      className={clsx('z-50 md:hidden md:z-0', isMobileNavOpen && 'h-screen')}
    >
      <button
        onClick={() => setMobileNavOpen((p: any) => !p)}
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
  );
};

const DesktopNav = ({ currentPage }: { currentPage: string }) => {
  return (
    <ul className={'hidden md:flex'}>
      {links.map(({ text, path }) => (
        <li
          key={text}
          className={clsx(
            'mx-2 text-lg hover:text-primary-500',
            'transition-all duration-100 hover:cursor-pointer hover:animate-pulse'
          )}
        >
          <Link href={path}>
            <h4
              className={clsx(
                'font-normal',
                currentPage === path && 'text-primary-500'
              )}
            >
              {text}
            </h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNav = ({ isMobileNavOpen }: { isMobileNavOpen: boolean }) => {
  return (
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
              <Link href={path}>
                <h1 className="font-mono text-4xl my-2 ">{text}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
