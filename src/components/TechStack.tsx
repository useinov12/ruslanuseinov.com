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

const TechStack = () => {
  return (
    <ul className="flex space-x-2 md:space-x-4 my-2">
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-10 w-10 md:h-12 md:w-12',
              'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300',
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
        <UnstyledLink href="https://www.typescriptlang.org/">
          TypeScript
        </UnstyledLink>{' '}
        is the best way to write Javascript!
      </div>
    ),
  },
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink href="https://nextjs.org"> Next.js</UnstyledLink> -
        flexible, scalable, fullstack.
      </div>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <div className="font-bold text-lg">
        <UnstyledLink href="https://tailwindcss.com/">
          Tailwind CSS
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
        <UnstyledLink href="https://nodejs.org/">Node.js</UnstyledLink>, for
        backend ⚡
      </div>
    ),
  },
];
