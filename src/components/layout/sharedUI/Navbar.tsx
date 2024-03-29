import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RiMoonClearLine, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'src/context/ThemeProvider';

export default function Navbar() {
  const { asPath } = useRouter();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  /* close mobile navbar when when redirecting */
  useEffect(() => {
    if (isMobileNavOpen) setMobileNavOpen(false);
  }, [asPath]);

  return (
    <div
      className={clsx(
        'sticky top-0 w-full overflow-hidden',
        isMobileNavOpen && 'h-screen w-screen'
      )}
    >
      <HorizontalBar />
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNavScreen isMobileNavOpen={isMobileNavOpen} />
    </div>
  );
}

function HorizontalBar() {
  return (
    <div
      className={clsx(
        'z-50',
        'h-[5px] w-full bg-blue-600',
        'relative',
        'before:absolute before:inset-0',
        'before:-translate-x-full',
        'before:animate-shimmer',
        'before:bg-gradient-to-r',
        'before:from-transparent before:via-white before:to-transparent'
      )}
    />
  );
}

function Navigation({
  isMobileNavOpen,
  setMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [onTop, setOnTop] = useState(true);

  /* track page scroll */
  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        'px-3 lg:px-0',
        'transition-shadow border border-transparent',
        'transition-all overflow-x-hidden',
        'overflow-y-hidden',
        !onTop &&
          'md:bg-clip-padding md:backdrop-filter md:backdrop-blur-2xl md:bg-opacity-80 '
      )}
    >
      <div
        className={clsx(
          'mx-auto',
          'py-4',
          'flex items-center justify-between',
          'transition-all duration-200',
          'max-w-screen-lg'
        )}
      >
        <Logo className="z-50" />
        <DesktopNavLinks />

        <MobileNavButton
          isMobileNavOpen={isMobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
      </div>
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Link href={'/'}>
      <Image
        src={'/assets/logo.png'}
        width={78}
        height={35}
        className={clsx('cursor-pointer', className)}
        alt={'logo'}
      />
    </Link>
  );
}

function MobileNavButton({
  isMobileNavOpen,
  setMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { theme } = useTheme();
  return (
    <div className="z-50 md:hidden md:z-0">
      <button
        onClick={() => setMobileNavOpen((p: boolean) => !p)}
        className="w-8 h-4 flex flex-col justify-between"
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
}

function ThemeSwitch({ className }: { className?: string }) {
  const { theme, handleTheme } = useTheme();
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
}

function DesktopNavLinks() {
  const { asPath } = useRouter();
  return (
    <>
      <ul className="hidden md:flex gap-3">
        {links.map(({ text, path }) => (
          <li
            key={text}
            className={clsx('text-lg ', 'cursor-pointer hover:opacity-70')}
          >
            <Link href={path}>
              <h4
                className={clsx(
                  'font-medium drop-shadow',
                  asPath === path && 'text-blue-500'
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
}

function MobileNavScreen({ isMobileNavOpen }: { isMobileNavOpen: boolean }) {
  const { asPath } = useRouter();
  return (
    <div
      className={clsx(
        'absolute inset-0',
        'w-screen h-screen',
        'z-40 overflow-y-hidden',
        'flex items-center justify-start px-8',
        'transition-all duration-150',
        isMobileNavOpen ? 'opacity-1' : 'opacity-0',
        isMobileNavOpen
          ? 'pointer-events-auto bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 scroll-y-none'
          : 'pointer-events-none'
      )}
    >
      <div className="flex items-center justify-center">
        <ul className="md:hidden flex flex-col">
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
                    asPath === path && 'text-blue-500'
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
}

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
