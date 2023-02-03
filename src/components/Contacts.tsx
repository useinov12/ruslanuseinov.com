import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Tooltip from 'src/components/Tooltip';
import UnstyledLink from 'src/components/UnstyledLink';
import Accent from 'src/components/Accent';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import copyToClipboard from 'src/utils/clipboard';
import { useTheme } from 'src/context/ThemeProvider';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdContentCopy } from 'react-icons/md';

export default function Contacts() {
  const { theme } = useTheme();
  return (
    <ul className="inline-flex gap-1 w-full">
      {listOfContacts.map((contact) => (
        <li
          className={clsx(
            'border rounded',
            'w-full',
            theme === 'light'
              ? 'border-gray-600 hover:bg-dark/20'
              : 'border-white hover:bg-white/5',
            'hover:border-white/50'
          )}
          key={contact.title}
        >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

function Contact({ contact }: { contact: Contact }) {
  return (
    <>
      {contact.path ? (
        <UnstyledLink href={contact.path}>
          <div className="inline-flex items-center justify-between px-2 w-full cursor-alias">
            <div className="md:px-2 py-2 w-full h-full inline-flex gap-1 items-center ">
              <span className="text-xl ">{contact.icon}</span>
              <p>{contact.title}</p>
            </div>
            <FiArrowUpRight className="text-xl" />
          </div>
        </UnstyledLink>
      ) : (
        <Tooltip content={contact.tooltipContent}>
          <div
            className="inline-flex items-center justify-between px-2 w-full cursor-pointer"
            onClick={() =>
              copyToClipboard({
                text: 'me@ruslan-useinov.com',
                id: 'email-tooltip-text-about',
              })
            }
          >
            <div className="md:px-2 py-2 w-full h-full inline-flex gap-1 items-center ">
              <span className="text-xl ">{contact.icon}</span>
              <p>{contact.title}</p>
            </div>
            <MdContentCopy className="text-xl" />
          </div>
        </Tooltip>
      )}
    </>
  );
}

type Contact = {
  title: string;
  icon: JSX.Element;
  tooltipContent: JSX.Element;
  path: string | undefined;
};

const listOfContacts = [
  {
    title: 'Email',
    icon: <EmailIcon />,
    tooltipContent: <EmailTootlip />,
    path: undefined,
  },
  {
    title: 'LinkedIn',
    icon: <SiLinkedin />,
    tooltipContent: <LinkedInTooltip />,
    path: 'https://www.linkedin.com/in/ruslan-useinov-330b5a23a',
  },
  {
    title: 'Github',
    icon: <SiGithub />,
    tooltipContent: <GithubTooltip />,
    path: 'https://github.com/useinov12',
  },
];

function EmailIcon() {
  return (
    <SiGmail
      onClick={() =>
        copyToClipboard({
          text: 'me@ruslan-useinov.com',
          id: 'email-tooltip-text-about',
        })
      }
      className="cursor-pointer"
    />
  );
}

function TooltipContent({ children }: { children: ReactNode }) {
  return (
    <div className="text-lg font-bold whitespace-nowrap flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

function EmailTootlip() {
  return (
    <TooltipContent>
      <p id="email-tooltip-text-about">Click to copy</p>
      <button
        onClick={() =>
          copyToClipboard({
            text: 'me@ruslan-useinov.com',
            id: 'email-tooltip-text-about',
          })
        }
      >
        <p className="font-medium text-blue-500 cursor-pointer">
          me@ruslan-useinov.com
        </p>
      </button>
    </TooltipContent>
  );
}

function LinkedInTooltip() {
  return (
    <TooltipContent>
      <p>Reach me on</p>
      <Accent className="font-bold">LinkedIn</Accent>
    </TooltipContent>
  );
}

function GithubTooltip() {
  return (
    <TooltipContent>
      <p>Check my projects on</p>
      <Accent className="font-bold">Github</Accent>
    </TooltipContent>
  );
}
