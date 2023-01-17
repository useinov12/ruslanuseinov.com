import clsx from 'clsx';
import * as React from 'react';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

import UnstyledLink from './UnstyledLink';
import Tooltip from './Tooltip';
import { ThemeContext } from 'src/context/ThemeProvider';
import Accent from './Accent';

const TechStack = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ul className="flex space-x-2 md:space-x-4 my-2">
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-10 w-10 md:h-12 md:w-12',
              theme === 'light'
                ? 'text-gray-800 hover:text-primary-500'
                : 'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </ul>
  );
};
export default TechStack;

const stacks = [
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink
          href="https://www.typescriptlang.org/"
          className="text-primary-500 hover:border-b-2 border-primary-500"
        >
          <Accent className="cursor-pointer">TypeScript</Accent>
        </UnstyledLink>{' '}
        the best way to write Javascript
      </div>
    ),
  },
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink
          href="https://nextjs.org"
          className="text-primary-500 hover:border-b-2 border-primary-500"
        >
          <Accent className="cursor-pointer">Next.JS</Accent>
        </UnstyledLink>{' '}
        - flexible, scalable, brings Server and Client closer
      </div>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink
          href="https://tailwindcss.com/"
          className="text-primary-500 hover:border-b-2 border-primary-500"
        >
          <Accent className="cursor-pointer">Tailwind CSS</Accent>
        </UnstyledLink>{' '}
        is amazing ✨ Seamless and fast to write. Addictive.
      </div>
    ),
  },
  {
    id: 'node',
    icon: SiNodedotjs,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink
          href="https://nodejs.org/"
          className="hover:border-b-2 border-primary-500"
        >
          <Accent className="cursor-pointer">Node.js</Accent>
        </UnstyledLink>{' '}
        for backend ⚡
      </div>
    ),
  },
];
