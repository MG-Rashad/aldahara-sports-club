// pages/index.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

// --- CHANGE 1: Import the useLanguage hook ---
import { useLanguage } from '../contexts/LanguageContext';

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
  // --- CHANGE 2: Use the global language hook and remove local state ---
  const { isArabic } = useLanguage();
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

  return (
    // --- CHANGE 3: This div now correctly uses the global isArabic state ---
    <div className={`min-h-screen bg-white ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Head>
        <title>{isArabic ? 'نادي الظهرة الرياضي' : 'Aldahara Sports Club'}</title>
        <meta name="description" content={isArabic ? 'نادي الظهرة الرياضي - نادي كرة قدم ليبي' : 'Aldahara Sports Club - Libyan Football Club'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- CHANGE 4: Remove isArabic and toggleLanguage from all components --- */}
      <Header isScrolled={isScrolled} />
      <Hero />
      <FootballSection />
      <BasketballSection />
      <YouthSection />
      <FanClubSection />
      <ContactSection />
      <Footer />
    </div>
  );
}