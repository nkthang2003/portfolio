import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, personalInfo } from '../data/portfolioData';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to English as explicitly requested by user
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      return saved === 'vi' ? 'vi' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch (e) {
      // ignore
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, content: currentContent, personalInfo }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

