import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import FootballSection from '../components/FootballSection';
import BasketballSection from '../components/BasketballSection';
import YouthSection from '../components/YouthSection';
import FanClubSection from '../components/FanClubSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [isArabic, setIsArabic] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Head>
        <title>{isArabic ? 'نادي الظهرة الرياضي' : 'Aldahara Sports Club'}</title>
        <meta name="description" content={isArabic ? 'نادي الظهرة الرياضي - نادي كرة قدم ليبي' : 'Aldahara Sports Club - Libyan Football Club'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isArabic={isArabic} toggleLanguage={toggleLanguage} isScrolled={isScrolled} />
      <Hero isArabic={isArabic} />
      <FootballSection isArabic={isArabic} />
      <BasketballSection isArabic={isArabic} />
      <YouthSection isArabic={isArabic} />
      <FanClubSection isArabic={isArabic} />
      <ContactSection isArabic={isArabic} />
      <Footer isArabic={isArabic} />
    </div>
  );
}