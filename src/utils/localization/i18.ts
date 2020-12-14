import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/index.json';

type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
};

const translationsJson = {
  en: {
    translation: en,
  },
};

export type TranslationResource = typeof en;

export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToObjectType<TranslationResource> = {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */

const convertLanguageJsonToObject = (obj: any, dict: any, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = currentLookupKey;
    }
  });
};

export default i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(
    {
      resources: translationsJson,
      fallbackLng: 'en',
      debug:
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false,
      },
    },
    () => {
      convertLanguageJsonToObject(en, translations);
    },
  );
