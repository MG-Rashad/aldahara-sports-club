// contexts/LanguageContext.js
import { createContext, useState, useContext, useMemo, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const value = useMemo(() => {
    const isArabic = lang === 'ar';
    const dir = isArabic ? 'rtl' : 'ltr';

    return { lang, isArabic, dir, toggleLanguage };
  }, [lang]);

  // --- THIS IS THE FIX ---
  // Apply the dir attribute to the document element whenever the language changes
  useEffect(() => {
    document.documentElement.dir = value.dir;
    document.documentElement.lang = value.lang;
  }, [value.dir, value.lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};