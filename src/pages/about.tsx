import React from 'react';
import Layout from '../components/layout/Layout';
import Image from 'next/image';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import TechStack from 'src/components/TechStack';
import Contacts from 'src/components/Contacts';
import { NextSeo } from 'next-seo';
import { ThemeContext } from 'src/context/ThemeProvider';

const AboutPage = () => {
  const isLoaded = useLoaded();
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <NextSeo openGraph={openGraph} twitter={twitter} />

      <main className={clsx(isLoaded && 'fade-in-start')}>
        <h1
          className={clsx(
            'my-4 text-primary-500"',
            theme === 'light' ? 'text-gray-800' : 'text-primary-500"'
          )}
          data-fade="1"
        >
          About
        </h1>
        <div
          className={clsx(
            'w-full h-[1px] mb-8 mt-4 rounded-lg',
            theme === 'light' ? 'bg-gray-800' : 'bg-gray-300'
          )}
          data-fade="2"
        />
        <section
          className="flex flex-col-reverse md:flex-row md:items-center md:justify-around mb-4"
          data-fade="3"
        >
          <div className="py-2 md:py-0">
            <h1 className="text-4xl font-bold">Ruslan Useinov</h1>
            <h4 className="mb-1">Front end developer</h4>
            <p className="">Creating beautiful and performant web</p>
          </div>
          <div className="w-32 h-32 relative rounded-full">
            <Image
              src={'/assets/me-sq.jpg'}
              width="110"
              height="110"
              className="rounded-full"
            />
          </div>
        </section>

        <div
          className="flex flex-col-reverse md:flex-row justify-between "
          data-fade="4"
        >
          <section className="py-1 font-normal text-lg md:flex md:flex-col md:items-start tracking-tight">
            <p className="py-2">
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
              And my practice with Javascript led me to dive deeper into web
              development and front end. I love the visual aspects of the web
              and I&apos;m motivated to learn as much as possible.
            </p>
            <p className=" py-2">
              Right now, I want to master my skills and be as fluent as possible
              with modern frameworks and then invest more time in UI to learn
              how to design interfaces quick, effective, and scalable.
            </p>
            <p className=" p-2">
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
            <h2 className="p-0 mx-0">Favorite Tech Stack</h2>
            <TechStack />
          </section>

          <section className="my-2 flex flex-col justify-center  items-center">
            <h2 className="p-0  mx-0">Contacts</h2>
            <Contacts />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;

const openGraph = {
  type: 'website',
  locale: 'en_IE',
  url: 'https://ruslan-useinov.com',
  siteName: 'ruslan-useinov.com',
  images: [
    {
      url: 'https://ruslan-useinov.com/favicon/og-about.png',
      width: 1200,
      height: 630,
      alt: 'Og Image Alt',
      type: 'image/png',
    },
  ],
};
const twitter = { cardType: 'summary_large_image' };
