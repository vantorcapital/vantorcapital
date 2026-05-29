import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from './translations';

const STORAGE_KEY = 'vantor_lang';
const EXPIRES_KEY = 'vantor_lang_expires';
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

interface LanguageContextValue {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  resetLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readStoredLanguage(): Language | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const expires = localStorage.getItem(EXPIRES_KEY);
    if (!stored || !expires) return null;
    if (Date.now() > parseInt(expires, 10)) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(EXPIRES_KEY);
      return null;
    }
    if (stored === 'en' || stored === 'es') return stored;
    return null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(() => readStoredLanguage());

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(EXPIRES_KEY, String(Date.now() + NINETY_DAYS_MS));
    } catch { /* ignore */ }
    setLanguageState(lang);
    document.documentElement.lang = lang;
  };

  const resetLanguage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(EXPIRES_KEY);
    } catch {}
    setLanguageState(null);
  };

  useEffect(() => {
    if (language) document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language ?? 'en'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider');
  return ctx;
}
