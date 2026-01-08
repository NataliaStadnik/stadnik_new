import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Russian from "./locales/ru/translation.json";
import English from "./locales/en/translation.json";
import Deutsch from "./locales/de/translation.json";
import { Language } from "./types";

await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.RU,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      [Language.RU]: {
        translation: {
          ...Russian,
        },
      },
      [Language.EN]: {
        translation: {
          ...English,
        },
      },
      [Language.DE]: {
        translation: {
          ...Deutsch,
        },
      },
    },
  });

export default i18n;
