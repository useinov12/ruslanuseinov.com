import React from 'react';
import clsx from 'clsx';
import Tooltip from 'src/components/Tooltip';
import UnstyledLink from 'src/components/UnstyledLink';
import Accent from 'src/components/Accent';
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';
import copyToClipboard from 'src/utils/clipboard';

const Contacts = () => {
  return (
    <ul className="inline-flex gap-2">
      {contacts.map(({ type, Icon, tooltip }) => (
        <li className="list-none py-2 mx-1" key={type}>
          <Tooltip interactive hideOnClick={false} content={<p>{tooltip}</p>}>
            {Icon}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
const iconStyle = clsx(
  'h-8 w-8 md:h-12 md:w-12',
  'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300',
  'transition-colors'
);
const contacts = [
  {
    type: 'gmail',
    Icon: (
      <SiGmail
        onClick={() =>
          copyToClipboard({
            text: 'me@ruslan-useinov.com',
            id: 'email-tooltip-text',
          })
        }
        className={clsx(iconStyle, 'cursor-pointer')}
      />
    ),
    tooltip: (
      <div className="text-lg font-bold">
        <p id="email-tooltip-text">Click on icon to copy</p>
        <Accent className="font-bold">me@ruslan-useinov.com</Accent>
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
      <div className="text-lg font-bold">
        <p>Check my projects on</p>
        <UnstyledLink
          href="https://github.com/useinov12"
          className="cursor-alias"
        >
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
        className="cursor-alias"
      >
        <SiLinkedin className={iconStyle} />
      </UnstyledLink>
    ),
    tooltip: (
      <div className="text-lg font-bold">
        <p>Reach me on</p>
        <UnstyledLink
          href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a"
          className="cursor-alias"
        >
          <Accent className="font-bold">LinkedIn</Accent>
        </UnstyledLink>
      </div>
    ),
  },
];

export default Contacts;
