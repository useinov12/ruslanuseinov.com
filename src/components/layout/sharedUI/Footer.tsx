/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';
import clsx from 'clsx';
import UnstyledLink from '../../UnstyledLink';
import Accent from '../../Accent';
import Tooltip from '../../Tooltip';
import { useTheme } from 'src/context/ThemeProvider';
import copyToClipboard from 'src/utils/clipboard';

const Footer: FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={clsx(
        'max-w-screen-lg m-auto',
        'px-3 lg:px-0 pt-4 mt-12',
        'border-t-2',
        theme === 'light' ? 'border-t-gray-800' : 'border-t-gray-300',
        'flex flex-col items-center'
      )}
    >
      <ul className="inline-flex gap-4 ">
        <li>
          <UnstyledLink
            href="https://github.com/useinov12/ruslanuseinov.com"
            className={clsx(
              'focus:outline-none',
              'transition-colors',
              'cursor-alias'
            )}
          >
            <h4>Source Code</h4>
          </UnstyledLink>
        </li>
        <li>
          <EmailAddress />
        </li>
        <li>
          <UnstyledLink
            href="https://github.com/useinov12"
            className={clsx('focus:outline-none', 'cursor-alias')}
          >
            <h4>Github</h4>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a"
            className={clsx('focus:outline-none', 'cursor-alias')}
          >
            <h4>LinkedIn</h4>
          </UnstyledLink>
        </li>
      </ul>
      <h6 className={clsx('font-semibold my-2', 'cursor-default')}>
        Ruslan Useinov 2022
      </h6>
    </footer>
  );
};

export default Footer;

function EmailAddress() {
  return (
    <Tooltip
      content={
        <div className="text-lg font-bold whitespace-nowrap flex flex-col justify-center items-center">
          <p id="email-tooltip-text-footer">Click to copy</p>
          <button
            onClick={() =>
              copyToClipboard({
                text: 'me@ruslan-useinov.com',
                id: 'email-tooltip-text-footer',
              })
            }
          >
            <Accent className="font-bold cursor-pointer">
              me@ruslan-useinov.com
            </Accent>
          </button>
        </div>
      }
    >
      <h4
        className="cursor-pointer "
        onClick={() =>
          copyToClipboard({
            text: 'me@ruslan-useinov.com',
            id: 'email-tooltip-text-footer',
          })
        }
      >
        Email
      </h4>
    </Tooltip>
  );
}
