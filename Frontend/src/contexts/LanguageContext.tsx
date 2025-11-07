// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'es';
interface LangContext {
  lang: Lang;
  toggleLang: () => void;
}
const Context = createContext<LangContext | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'));
  return <Context.Provider value={{ lang, toggleLang }}>{children}</Context.Provider>;
};

export function useLanguage() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('`useLanguage` must be used inside a LanguageProvider');
  return ctx;
}
