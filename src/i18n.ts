import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    fallbackLng: "en",
    debug: import.meta.env.DEV,
  });

i18n.on("languageChanged", (lng) => (document.documentElement.lang = lng));

export default i18n;
