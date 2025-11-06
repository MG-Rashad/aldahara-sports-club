// pages/_app.js
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>Aldahara Sports Club</title>
        <meta name="description" content="Official website for Aldahara Sports Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}