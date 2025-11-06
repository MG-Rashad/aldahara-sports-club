// components/Hero.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden h-screen max-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/football.jpg"
          alt="Aldahara Sports Club Team"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'نادي الظهرة الرياضي' : 'Aldahara Sports Club'}
          </h1>
          <p className={`text-lg text-white mb-6 md:text-xl ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'شرف، فخر، تاريخ' : 'Honor, Pride, History'}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 font-bold text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700 md:py-3 md:px-8"
            onClick={() => document.getElementById('football').scrollIntoView({ behavior: 'smooth' })}
          >
            {isArabic ? 'اكتشف المزيد' : 'Discover More'}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute text-white transform -translate-x-1/2 bottom-8 start-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;