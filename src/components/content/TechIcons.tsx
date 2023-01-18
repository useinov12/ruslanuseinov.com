import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
  SiJest,
} from 'react-icons/si';
import Image from 'next/image';

import Tooltip from '../Tooltip';
import { useTheme } from 'src/context/ThemeProvider';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & ComponentPropsWithoutRef<'ul'>;

const TechIcons = ({ className, techs }: TechIconsProps) => {
  const { theme } = useTheme();
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li
              className={clsx(
                'transition-colors',
                theme === 'light'
                  ? 'text-gray-800 hover:text-primary-500'
                  : 'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300'
              )}
            >
              {current.name === 'ContentLayer' ? (
                <Image
                  src={'/assets/contentlayerimg.png'}
                  height={35}
                  width={35}
                />
              ) : (
                <current.icon />
              )}
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
};

export default TechIcons;

const techList = {
  contentlayer: {
    icon: '',
    name: 'ContentLayer',
  },
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  css: {
    icon: SiCss3,
    name: 'CSS3',
  },
  jest: {
    icon: SiJest,
    name: 'Jest',
  },
};
