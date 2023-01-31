import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface SeoProps {
  title?: string;
  description: string;
  imageUrl: string;
}

export default function Seo(props: SeoProps) {
  const { pathname } = useRouter();
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      titleTemplate={'Ruslan Useinov | Web development | '}
      defaultTitle="Ruslan Useinov | Personal blog | Web development"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: `https://ruslan-useinov.com${pathname}`,
        siteName: 'ruslan-useinov.com',
        images: [
          {
            url: props.imageUrl, //add default image
            width: 1200,
            height: 630,
            alt: props.title, //add default alt
            type: 'image/png',
          },
        ],
      }}
    />
  );
}
