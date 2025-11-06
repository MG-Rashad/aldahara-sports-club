// pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
// --- FIX IS HERE: Import both LanguageProvider AND useLanguage ---
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
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
        <title>Football Club</title>
        <meta name="description" content="Official website for our football club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Wrap the app with the provider
export default function AppWithProvider(props) {
  return (
    <LanguageProvider>
      <MyApp {...props} />
    </LanguageProvider>
  );
}