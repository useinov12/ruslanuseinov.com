import Layout from '../components/layout/PageLayout';
import Image from 'next/image';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import TechStack from 'src/components/TechStack';
import Contacts from 'src/components/Contacts';
import { useTheme } from 'src/context/ThemeProvider';
import Seo from 'src/components/Seo';
import { useRouter } from 'next/router';

const AboutPage = () => {
  const { pathname } = useRouter();
  const isLoaded = useLoaded();
  const { theme } = useTheme();
  return (
    <Layout>
      <Seo
        url={pathname}
        description={'A few words about myself'}
        imageUrl={'/assets/banners/about_banner.png'}
      />

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
          <div className="w-36 h-36 relative rounded-full">
            <Image
              src={'/assets/me-sq.jpg'}
              width="135"
              height="140"
              className="rounded-full"
            />
          </div>
        </section>

        <div
          className="flex flex-col-reverse md:flex-row justify-between "
          data-fade="4"
        >
          <section className="py-1 font-normal text-lg md:flex md:flex-col md:items-start tracking-tight">
            <p className="py-2">Hi! I&apos;m Ruslan</p>
            <p className="py-2">
              I started learning web development in 2021. I have always been
              interested in how the Internet works, but I never considered
              myself a tech person enough to figure things out. Until I actually
              started reading and practicing with Javascript!
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
