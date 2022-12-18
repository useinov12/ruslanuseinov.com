import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RiMoonClearLine, RiSunFill } from 'react-icons/ri';
import { ThemeContext } from 'src/context/ThemeProvider';

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
    <div
      className='sticky top-0 z-50'
    >
      <HorizontalBar />
      <nav
        className={clsx(
          'transition-shadow border border-transparent',
          'transition-all overflow-x-hidden',
          'overflow-y-hidden',
          !onTop &&
            !isMobileNavOpen &&
            'bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80 ',
        )}
      >
        <div
          className={clsx(
            'max-w-screen-md mx-auto',
            'py-1 px-5',
            'flex items-center justify-between',
          )}
        >
          <Logo className="z-50"/>
          <DesktopNav currentPage={currentPage} />

          <MobileNavButton
              isMobileNavOpen={isMobileNavOpen}
              setMobileNavOpen={setMobileNavOpen}
          />
        </div>

        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          currentPage={currentPage}
        />
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

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'}>
      <Image
        src={'/favicon/logo-2.png'}
        width={55}
        height={55}
        className={clsx('cursor-pointer', className)}
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
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className='z-50 md:hidden md:z-0'
    >
      <button
        onClick={() => setMobileNavOpen((p: boolean) => !p)}
        className='w-8 h-4 flex flex-col justify-between'
      >
        <div
          className={clsx(
            'w-full h-1 rounded transition-all',
            isMobileNavOpen ? 'translate-y-3 rotate-45' : '-translate-y-0',
            theme === 'light' ? 'bg-gray-800' : 'bg-gray-50'
          )}
        />
        <div
          className={clsx(
            'w-full h-1 rounded transition-all',
            isMobileNavOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1',
            theme === 'light' ? 'bg-gray-800' : 'bg-gray-50'
          )}
        />
      </button>
    </div>
  );
};

const ThemeSwitch = ({className}:{className?:string}) => {
  const { theme, handleTheme } = React.useContext(ThemeContext);
  return (
    <>
      <button
        className={clsx(
          'bg-transaprent border-none text-xl hover:text-primary-500 ',
          'z-50',
          className
        )}
        onClick={handleTheme}
      >
        {theme === 'light' ? (
          <RiMoonClearLine className="" />
        ) : (
          <RiSunFill className="" />
        )}
      </button>
    </>
  );
};

const DesktopNav = ({ currentPage }: { currentPage: string }) => {
  return (
    <>
      <ul className="hidden md:flex gap-3">
        {links.map(({ text, path }) => (
          <li
            key={text}
            className={clsx(
              'text-lg hover:text-primary-500',
              'transition-all duration-100 hover:cursor-pointer hover:animate-pulse'
            )}
          >
            <Link href={path}>
              <h4
                className={clsx(
                  'font-normal drop-shadow',
                  currentPage === path && 'text-primary-500'
                )}
              >
                {text}
              </h4>
            </Link>
          </li>
        ))}
        <ThemeSwitch />
      </ul>
    </>
  );
};

const MobileNav = ({
  isMobileNavOpen,
  currentPage,
}: {
  isMobileNavOpen: boolean;
  currentPage: string;
}) => {
  return (
    <div
      className={clsx(
        'absolute inset-0',
        'w-screen h-screen',
        'z-40 overflow-y-hidden',
        'flex items-center justify-start px-8',
        'transition-all duration-150',
        isMobileNavOpen ?  'opacity-1' : 'opacity-0',
        isMobileNavOpen
          ? 'pointer-events-auto bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 scroll-y-none'
          : 'pointer-events-none',
      )}
    >
      <div className="flex items-center justify-center">
        <ul className='md:hidden flex flex-col'>
          {links.map(({ text, path }) => (
            <li
              key={text}
              className={clsx(
                'mx-2 hover:text-primary-500 transition-all',
                'duration-100 hover:cursor-pointer'
              )}
            >
              <Link href={path}>
                <h1
                  className={clsx(
                    'font-mono text-4xl my-2',
                    currentPage === path && 'text-primary-500'
                  )}
                >
                  {text}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch className="absolute top-40 right-14 text-5xl" />
      </div>
    </div>
  );
};