import React from 'react';
import Layout from '../components/layout/Layout';
import Accent from 'src/components/Accent';
import Image from 'next/image';
import me from '../../public/assets/me-sq.png';
import clsx from 'clsx';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGmail,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';
import useLoaded from 'src/hooks/useLoaded';

const AboutPage = () => {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <main className={clsx(isLoaded && 'fade-in-start')}>
        <h1 className="mb-8 mt-4" data-fade="1">
          <Accent>About</Accent>
        </h1>
        <div
          className="w-full h-[1px] mb-8 mt-8 bg-gray-300 rounded-lg"
          data-fade="2"
        />
        <section
          className="flex flex-col-reverse md:flex-row md:items-center md:justify-around mb-4"
          data-fade="3"
        >
          <div className="py-2 md:py-0">
            <h1 className="text-4xl font-bold">Ruslan Useinov</h1>
            <h4 className="mb-1">Front end developer</h4>
            <p className="text-gray-300">
              Creating beautiful and performant web
            </p>
          </div>
          <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] relative rounded-full">
            <Image
              src={me}
              layout={'fill'}
              objectFit={'contain'}
              className="rounded-full"
            />
          </div>
        </section>

        <div
          className="flex flex-col-reverse md:flex-row justify-between "
          data-fade="4"
        >
          <section className="py-1 font-semibold text-lg">
            <p className="py-1">
              Hi! I&apos;m Ruslan. I started learning web development in 2021.
            </p>
            <p className="py-2">
              I have always been interested in how the Internet works, but I
              never considered myself a tech person enough to figure things out.
              Until I actually started reading and practicing with Javascript!
            </p>
            <p className="py-2">
              At the time I start realizing that I want to have a career, but I
              didn&apos;t have any idea in what field.
            </p>
            <p className="py-2">
              And my practice with Javascript leads me to dive deeper into web
              development and particularly in the front end. I love the visual
              aspects of the web and I am motivated to learn as much as
              possible.
            </p>
            <p className=" py-2">
              Right now I want to master my skills and be as fluent as possible
              with modern frameworks and then invest more time in UX to learn
              how to design intuitive UI quickly, effectively, and scalable.
            </p>
            <p className=" py-3">
              Here I will be writing some notes and showcasing what I do. I
              believe that documenting is the best way to learn things, and I
              can share my knowledge along the way.
            </p>
          </section>
        </div>

        <div
          className={clsx(
            'flex flex-col justify-center my-4',
            'sm:flex-row sm:justify-around'
          )}
          data-fade="5"
        >
          <section className=" my-2 flex flex-col justify-center  items-center">
            <h2>Favorite Tech Stack</h2>
            <ul className="inline-flex gap-2">
              {techStack.map((Icon, i) => (
                <li className="list-none py-2" key={i}>
                  <Icon
                    className={clsx(
                      'h-8 w-8 md:h-10 md:w-10',
                      'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300',
                      'transition-colors'
                    )}
                  />
                </li>
              ))}
            </ul>
          </section>

          <section className="my-2 flex flex-col justify-center  items-center">
            <h2>Contacts</h2>
            <ul className="inline-flex gap-2">
              {contacts.map((Icon, i) => (
                <li className="list-none py-2" key={i}>
                  <Icon
                    className={clsx(
                      'h-8 w-8 md:h-10 md:w-10',
                      'text-gray-300 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300',
                      'transition-colors'
                    )}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;

const techStack = [
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
];
const contacts = [SiGmail, SiGithub, SiLinkedin];

const stack = [
  {
    Icon: SiNextdotjs,
  },
  {
    Icon: SiNodedotjs,
  },
  {
    Icon: SiReact,
  },
  {
    Icon: SiTailwindcss,
  },
  {
    Icon: SiTypescript,
  },
];
