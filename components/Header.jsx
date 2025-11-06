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
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-red-600"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-red-600"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-red-600"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </motion.a>
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

      {/* Mobile Navigation with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // FIX: Added z-index and positioning to make it a full-screen overlay
            className="fixed inset-0 z-50 flex flex-col justify-end bg-black bg-opacity-95 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 mx-auto">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white font-medium text-start transition-colors duration-300 hover:text-red-500 ${
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
    </motion.header>
  );
};

export default Header;