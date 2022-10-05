import React from 'react';
import clsx from 'clsx';
import UnstyledLink from '../UnstyledLink';

const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        'max-w-screen-lg m-auto',
        'bg-dark text-white',
        'px-3 lg:px-0 pt-4 mt-12',
        'border-t-2 border-t-gray-300',
        'flex flex-col items-center'
      )}
    >
      <ul className="inline-flex gap-4 ">
        <li>
          <UnstyledLink
            href="https://github.com/useinov12/ruslanuseinov.com"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors',
              'cursor-alias'
            )}
          >
            <h4>Source Code</h4>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="/"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors'
            )}
          >
            <h4>Email</h4>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="https://github.com/useinov12"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors',
              'cursor-alias'
            )}
          >
            <h4>Github</h4>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors',
              'cursor-alias'
            )}
          >
            <h4>LinkedIn</h4>
          </UnstyledLink>
        </li>
      </ul>
      <h6
        className={clsx(
          'text-gray-300 hover:text-primary-500',
          'font-semibold my-2',
          'cursor-default'
        )}
      >
        Ruslan Useinov 2022
      </h6>
    </footer>
  );
};

export default Footer;
