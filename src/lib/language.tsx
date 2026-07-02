"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "hi";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === "en" ? "hi" : "en")) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Small helper: pick the right string for the current language */
export function t(lang: Lang, en: string, hi: string) {
  return lang === "en" ? en : hi;
}
