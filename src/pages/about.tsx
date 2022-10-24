import React from 'react';
import Layout from '../components/layout/Layout';
import Image from 'next/image';
import me from '../../public/assets/me-sq.png';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import TechStack from 'src/components/TechStack';
import Contacts from 'src/components/Contacts';
import Seo from 'src/components/Seo';

const AboutPage = () => {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo/>
      <main className={clsx(isLoaded && 'fade-in-start')}>
        <h1 className="mb-8 mt-4 font-mono text-primary-500" data-fade="1">
          About
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
          <div
            className={clsx(
              'w-[100px] h-[100px] md:w-[200px] md:h-[200px] relative rounded-full',
              'border-4 border-gray-50'
            )}
          >
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
          <section className="py-1 font-normal text-lg md:flex md:flex-col md:items-center">
            <p className="py-1  md:w-3/4">
              Hi! I&apos;m Ruslan. I started learning web development in 2021.
            </p>
            <p className="py-2 md:w-3/4">
              I have always been interested in how the Internet works, but I
              never considered myself a tech person enough to figure things out.
              Until I actually started reading and practicing with Javascript!
            </p>
            <p className="py-2 md:w-3/4">
              At the time I start realizing that I want to have a career, but I
              didn&apos;t have any idea in what field.
            </p>
            <p className="py-2 md:w-3/4">
              And my practice with Javascript led me to dive deeper into web
              development and front end. I love the visual aspects of the web
              and I&apos;m motivated to learn as much as possible.
            </p>
            <p className=" py-2 md:w-3/4">
              Right now I want to master my skills and be as fluent as possible
              with modern frameworks and then invest more time in UI to learn
              how to design interfaces quick, effective, and scalable.
            </p>
            <p className=" py-3 w-3/4">
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
