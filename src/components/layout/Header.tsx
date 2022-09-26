import React from 'react';
import Link from 'next/link';
import Accent from './Accent';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [onTop, setOnTop] = React.useState(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();
  React.useEffect(() => {
    if(isOpen)setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav
      className={clsx(
        'bg-dark text-white sticky top-0 z-50 transition-shadow border border-transparent',
        !onTop && 'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50  border-b-gray-600 ',
        'transition-all',
        'relative'
      )}
    >
      <div className="h-2 w-full bg-primary-400" />
      <div className="flex items-center justify-between md:justify-around p-5 md:p-8">
        <h3 className="font-mono">Ruslan Useinov</h3>

        <ul className={'hidden md:flex'}>
          {links.map(({ text, path }) => (
            <li className="mx-2 text-lg hover:text-primary-400 transition-all duration-100 hover:cursor-pointer">
              <h4 className="font-normal">
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
            <div className="w-full h-1 bg-white rounded" />
            <div className="w-full h-1 bg-white rounded" />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'fixed inset-0 w-screen h-screen  z-40',
          'flex items-center justify-start px-8 transition-all duration-150',
          isOpen
            ? 'pointer-events-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 '
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-center">
          <ul className={'md:hidden flex flex-col'}>
            {links.map(({ text, path }) => (
              <li className="mx-2 hover:text-primary-400 transition-all duration-100 hover:cursor-pointer">
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
    path: '/',
  },
  {
    text: 'Library',
    path: '/',
  },
  {
    text: 'About',
    path: '/',
  },
];
