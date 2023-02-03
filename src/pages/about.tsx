import Layout from '../components/layout/Layout';
import Image from 'next/image';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import TechStack from 'src/components/TechStack';
import Contacts from 'src/components/Contacts';
import Seo from 'src/components/Seo';

export default function AboutPage() {
  const isLoaded = useLoaded();
  return (
    <>
      <Seo
        description={'A few words about myself'}
        imageUrl={'/assets/banners/about_banner.png'}
      />
      <Layout>
        <main
          className={clsx(
            'mx-auto',
            'max-w-screen-lg',
            isLoaded && 'fade-in-start',
            'md:max-w-screen-sm',
            'py-5',
            'flex-col gap-5'
          )}
        >
          <div data-fade="3">
            <AboutMeCard />
            <Contacts />
            <AboutMeText />
          </div>
        </main>
      </Layout>
    </>
  );
}

function AboutMeCard() {
  return (
    <section
      className={clsx(
        'flex flex-col-reverse ',
        'md:gap-10 w-full py-5',
        'md:flex-row md:items-center md:justify-start '
      )}
    >
      <div>
        <h3 className="text-3xl font-bolder font-poppins text-semibold">
          Ruslan Useinov
        </h3>
        <h4 className="font-poppins font-semibold">Front end developer</h4>
        <p className="font-poppins font-medium">
          Creating beautiful and performant web
        </p>
      </div>
      <div className="w-32 h-32">
        <Image
          src={'/assets/me-sq.jpg'}
          width="100"
          height="101"
          className="rounded-full"
          objectFit="cover"
          alt="me"
        />
      </div>
    </section>
  );
}

function AboutMeText() {
  return (
    <div className="flex flex-col-reverse md:flex-row  justify-start">
      <section
        className={clsx(
          'tracking-tight  md:text-justify',
          'md:flex md:flex-col md:items-start',
          'font-medium'
        )}
      >
        <p className="pt-5 ">Hey, I&apos;m Ruslan.</p>
        <p className="py-2">
          I started learning web development in 2021. I have always been
          interested in work of the web technologies, but I never considered
          myself a tech person enough to figure things out. Until I actually
          started reading and practicing with Javascript.
        </p>

        <p className="py-2">
          And my practice with Javascript led me to dive deeper into web
          development and front end. I love the visual aspects of the web and
          I&apos;m motivated to learn as much as possible.
        </p>
        <p className=" py-2">
          Right now, I want to master my skills and be as fluent as possible
          with modern frameworks and concepts and then invest more time in UI to
          learn how to design interfaces quick, effective, and scalable.
        </p>
        <p className="py-2">
          Here I will be writing some notes and showcasing what I do. I believe
          that documenting is the best way to learn things, and I can share my
          knowledge along the way.
        </p>
      </section>
    </div>
  );
}

function TechAndContacts() {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center my-4',
        'sm:flex-row sm:justify-between',
        'w-full'
      )}
    >
      <section className=" my-2 flex flex-col gap-1 justify-center  items-center">
        <h3 className="p-0 mx-0">Favorite Tech Stack</h3>
        <TechStack />
      </section>

      {/* <section className="my-2 flex flex-col gap-1 justify-center  items-center">
        <h3 className="p-0  mx-0">Contacts</h3>
        <Contacts />
      </section> */}
    </div>
  );
}
