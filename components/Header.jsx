// components/Header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Header = ({ isScrolled }) => {
  const { isArabic, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
    { id: 'football', label: isArabic ? 'كرة القدم' : 'Football' },
    { id: 'basketball', label: isArabic ? 'كرة السلة' : 'Basketball' },
    { id: 'youth', label: isArabic ? 'الشباب' : 'Youth' },
    { id: 'fanclub', label: isArabic ? ' المشجعين' : 'Fans' },
    { id: 'contact', label: isArabic ? 'اتصل بنا' : 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* FIX: Header has the highest z-index to ensure the menu button is always clickable */}
      <motion.header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Club Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h1 className={`text-white font-bold text-xl ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'نادي الظهرة' : 'Aldahara SC'}
              </h1>
            </div>

            {/* Desktop Navigation - CENTERED */}
            <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className={`flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white font-medium transition-colors duration-300 hover:text-red-500 ${
                        activeSection === item.id ? 'text-red-500' : ''
                      } ${isArabic ? 'font-arabic' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side items: Socials, Lang Switcher, Mobile Menu */}
            <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              {/* Social Media Icons */}
              <div className={`hidden lg:flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                {/* ... Social Icons ... */}
              </div>

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700"
              >
                {isArabic ? 'EN' : 'AR'}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white lg:hidden focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* FIX: Mobile Menu Overlay with a lower z-index */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-95 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)} // Close menu on overlay click
          >
            <div className="container px-4 py-4 mx-auto" onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col space-y-4 text-center">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white font-medium text-xl transition-colors duration-300 hover:text-red-500 ${
                        activeSection === item.id ? 'text-red-500' : ''
                      } ${isArabic ? 'font-arabic' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;