// pages/_app.js
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import Head from 'next/head';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// This component consumes the context
function AppContent({ Component, pageProps }) {
  const { dir } = useLanguage();

  // Set the dir attribute on the html element
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <>
      <Head>
        {/* Set the lang attribute on the html tag for accessibility and SEO */}
        <html lang={dir === 'rtl' ? 'ar' : 'en'} />
        <title>Aldahara Sports Club</title>
        <meta name="description" content="Official website for Aldahara Sports Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// This component provides the context to the rest of the app
export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}