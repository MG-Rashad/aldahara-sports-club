// contexts/LanguageContext.js
import { createContext, useState, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy access
export const useLanguage = () => {
  return useContext(LanguageContext);
};