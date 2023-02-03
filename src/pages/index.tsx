import Layout from '../components/layout/Layout';
import clsx from 'clsx';
import Button from 'src/components/Button';
import UnstyledLink from '../components/UnstyledLink';

import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import useLoaded from 'src/hooks/useLoaded';
import { useTheme } from 'src/context/ThemeProvider';
import Seo from 'src/components/Seo';

export default function HomePage() {
  const isLoaded = useLoaded();
  return (
    <>
      <Seo
        title="Online Portfolio"
        description="An online portfolio and blog by Ruslan Useinov"
        imageUrl={'/assets/banners/pw_banner.png'}
      />

      <Layout>
        <main
          className={clsx(
            'mx-auto',
            'max-w-screen-lg',
            'flex flex-col justify-center',
            'w-full h-full',
            isLoaded && 'fade-in-start'
          )}
        >
          <MainHero />
        </main>
      </Layout>
    </>
  );
}

function MainHero() {
  const { theme } = useTheme();
  return (
    <section
      className="p-2 lg:p-0 relative h-[95vh] flex flex-col justify-center"
      data-fade="1"
    >
      <h1 className="text-4xl md:text-5xl tracking-tight font-extrabold">
        Front End Developer
      </h1>
      <p className="text-xl md:text-xl my-3 cursor-default" data-fade="2">
        Building beautiful and performant web with delightful user
        experiences
      </p>

      {/* <div
        className={clsx(
          'w-full h-[2px] my-4  rounded-lg',
          theme === 'light' ? 'bg-gray-700' : 'bg-gray-200'
        )}
        data-fade="3"
      /> */}

      <div className="inline-flex gap-3" data-fade="4">
        <Link href="/blog">
          <Button className="text-lg">Read Blog</Button>
        </Link>
        <Link href="/about">
          <Button className="text-lg">About</Button>
        </Link>
      </div>

      <PersonalLinks />

      <div data-fade="6">
        <Polkadots className="hidden md:block md:absolute -bottom-36 right-0 -z-10 w-2/5" />
      </div>
    </section>
  );
}

function PersonalLinks() {
  const { theme } = useTheme();

  return (
    <ul className="flex flex-wrap w-full gap-5 my-4 z-10" data-fade="5">
      {linkList.map(({ text, path, Icon }) => (
        <li key={text} className="list-none">
          <UnstyledLink
            href={path}
            className={clsx(
              'inline-flex items-center gap-1 ',
              theme === 'light'
                ? 'text-gray-900 hover:text-gray-800'
                : 'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors',
              'cursor-alias',
              'drop-shadow hover:drop-shadow-xl'
            )}
          >
            <Icon className="text-2xl" />
            <span className="text-xl">{text}</span>
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}

const Polkadots = ({ className }: { className?: string }) => {
  return (
    <svg className={clsx(className)}>
      <defs>
        <pattern
          id="myPattern"
          x="28"
          y="25"
          width="25"
          height="25"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="8"
            cy="8"
            r="5"
            style={{
              stroke: 'none',
              fill: '#2563eb',
              filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
            }}
          />
        </pattern>
      </defs>

      <rect width="400" height="200" style={{ fill: 'url(#myPattern)' }} />
    </svg>
  );
};

const linkList = [
  {
    path: 'https://ruslan-useinov.com/content/useinov_resume.pdf',
    text: 'Resume',
    Icon: IoNewspaperSharp,
  },
  {
    path: 'https://www.linkedin.com/in/ruslan-useinov-330b5a23a',
    text: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    path: 'https://github.com/useinov12',
    text: 'Github',
    Icon: SiGithub,
  },
];
