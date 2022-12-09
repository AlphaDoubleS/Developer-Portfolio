import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/translation.json';
import nl from '../locales/nl/translation.json';
import de from '../locales/de/translation.json';

const resources = {
  en: {
    translation: en,
  },
  nl: {
    translation: nl,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
