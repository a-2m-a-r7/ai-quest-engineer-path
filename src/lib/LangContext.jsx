import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "./i18n.js";

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("aiquest-lang") || "en";
    } catch {
      return "en";
    }
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      try {
        localStorage.setItem("aiquest-lang", next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback(
    (key, ...args) => {
      const dict = translations[lang];
      const val = dict[key];
      if (typeof val === "function") return val(...args);
      return val ?? key;
    },
    [lang],
  );

  // Return full topic data object for a given topicId (stage content, etc.)
  const td = useCallback(
    (topicId) => {
      const dict = translations[lang];
      return dict?.topics?.[topicId] ?? {};
    },
    [lang],
  );

  return (
    <LangContext.Provider
      value={{ lang, toggleLang, t, td, isRTL: lang === "ar" }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
