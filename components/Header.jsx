import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = ({ isArabic, toggleLanguage, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
    { id: 'football', label: isArabic ? 'كرة القدم' : 'Football' },
    { id: 'basketball', label: isArabic ? 'كرة السلة' : 'Basketball' },
    { id: 'youth', label: isArabic ? 'الشباب' : 'Youth' },
    { id: 'fanclub', label: isArabic ? 'نادي المشجعين' : 'Fan Club' },
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
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Club Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className={`text-white font-bold text-xl ${isArabic ? 'font-arabic-club' : ''}`}>
              {isArabic ? 'نادي الظهرة' : 'Aldahara SC'}
            </h1>
          </div>

          {/* Desktop Navigation - CENTERED */}
          <nav className="items-center justify-center flex-1 hidden lg:flex">
            <ul className="flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white font-medium transition-colors duration-300 hover:text-red-500 ${
                      activeSection === item.id ? 'text-red-500' : ''
                    } ${isArabic ? 'font-arabic-nav' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-white transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700"
            >
              {isArabic ? 'EN' : 'AR'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white lg:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="bg-black lg:hidden bg-opacity-95"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container px-4 py-4 mx-auto">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white font-medium text-left transition-colors duration-300 hover:text-red-500 ${
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
    </motion.header>
  );
};

export default Header;