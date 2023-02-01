import React from 'react';
import clsx from 'clsx';
import Tooltip from 'src/components/Tooltip';
import UnstyledLink from 'src/components/UnstyledLink';
import Accent from 'src/components/Accent';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import copyToClipboard from 'src/utils/clipboard';
import { useTheme } from 'src/context/ThemeProvider';

const Contacts = () => {
  const { theme } = useTheme();
  return (
    <ul className="inline-flex gap-2">
      {contacts.map(({ type, Icon, tooltip }) => (
        <li
          className={clsx(
            'list-none py-2 mx-1',
            'flex flex-col justify-center items-center whitespace-nowrap',
            theme === 'light'
              ? 'text-gray-800 hover:text-primary-500'
              : 'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300'
          )}
          key={type}
        >
          <Tooltip content={<p>{tooltip}</p>}>{Icon}</Tooltip>
        </li>
      ))}
    </ul>
  );
};
const iconStyle = 'h-8 w-8 md:h-10 md:w-10 transition-colors';
const contacts = [
  {
    type: 'gmail',
    Icon: (
      <SiGmail
        onClick={() =>
          copyToClipboard({
            text: 'me@ruslan-useinov.com',
            id: 'email-tooltip-text-about',
          })
        }
        className={clsx(iconStyle, 'cursor-pointer')}
      />
    ),
    tooltip: (
      <div className="text-lg font-bold whitespace-nowrap flex flex-col items-center justify-center">
        <p id="email-tooltip-text-about">Click to copy</p>
        <button
          onClick={() =>
            copyToClipboard({
              text: 'me@ruslan-useinov.com',
              id: 'email-tooltip-text-about',
            })
          }
        >
          <Accent className="font-bold cursor-pointer">
            me@ruslan-useinov.com
          </Accent>
        </button>
      </div>
    ),
  },
  {
    type: 'github',
    Icon: (
      <UnstyledLink
        href="https://github.com/useinov12"
        className="cursor-alias"
      >
        <SiGithub className={iconStyle} />
      </UnstyledLink>
    ),
    tooltip: (
      <div className="text-lg font-bold whitespace-nowrap flex flex-col items-center justify-center">
        <p>Check my projects on</p>
        <UnstyledLink href="https://github.com/useinov12">
          <Accent className="font-bold">Github</Accent>
        </UnstyledLink>
      </div>
    ),
  },
  {
    type: 'linkedIn',
    Icon: (
      <UnstyledLink
        href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a"
        className="cursor-alias "
      >
        <SiLinkedin className={iconStyle} />
      </UnstyledLink>
    ),
    tooltip: (
      <div className="text-lg font-bold whitespace-nowrap flex flex-col items-center justify-center">
        <p>Reach me on</p>
        <UnstyledLink href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a">
          <Accent className="font-bold">LinkedIn</Accent>
        </UnstyledLink>
      </div>
    ),
  },
];

export default Contacts;
