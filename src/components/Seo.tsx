import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Ruslan Useinov',
  siteName: 'ruslan-useinov.com',
  description:
    'An online portfolio and blog by Ruslan Useinov. Showcase of my projects, and some of my notes about website development.',
  url: 'https://ruslan-useinov.com',
  image: '/public/favicon/og.png',
  type: 'website',
  robots: 'follow, index',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  isBlog?: boolean;
  banner?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();

  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;


  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      {/* <meta property="og:image" content={`${meta.url}/favicon/og.png`} /> */}
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={`/favicon/og.png`} />

      {/* Favicons */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
