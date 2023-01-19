// src/pages/_app.tsx
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.css';
import '../styles/prism.css';
import 'react-tippy/dist/tippy.css';
import '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import ThemeProvider from 'src/context/ThemeProvider';
import PreloadProvider from 'src/context/PreloadProvider';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PreloadProvider>
      <ThemeProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </PreloadProvider>
  );
};

export default MyApp;
