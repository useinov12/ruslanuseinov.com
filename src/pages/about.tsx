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
        <h4 className="font-poppins font-semibold">Software developer</h4>
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
          I started learning web development in 2021. Despite feeling
          intimidated at first, I quickly realized that with a little bit of
          reading and hands-on practice with Javascript, HTML, and CSS, I could
          actually build simple websites and understand the inner workings of
          the web.
        </p>

        <p className="py-2">
          My practice with Javascript sparked my interest in delving deeper into
          the realm of web development and front-end design. I love the visual
          aspects of the web and I am constantly seeking opportunities to
          improve and stay up-to-date with the latest advancements in the
          industry.
        </p>
        <p className=" py-2">
          At present, I am focused on mastering my technical skills and becoming
          proficient in modern frameworks and concepts. Once I have achieved a
          high level of proficiency, I plan to delve deeper into UI design to
          learn how to create interfaces that are not only aesthetically
          pleasing but also quick, effective, and scalable.
        </p>
        <p className="py-2">
          I will be keeping track of my learning journey by documenting my notes
          and showcasing my work. I firmly believe that writing things down and
          reflecting on my progress is an effective way to solidify my
          understanding and retain new information. Additionally, by sharing my
          knowledge and experiences, I hope to inspire others and contribute to
          the broader web development community.
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
