import i18n, { changeLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Russ from './Russ.json';
import Eng from './Eng.json';
import China from './China.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: Russ },
      en: { translation: Eng },
      ch: { translation: China },
    },
    detection: {
      order: ['localStorage', 'cookies'],
      caches: ['localStorage', 'cookies'],
    },
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  });

// eslint-disable-next-line import/prefer-default-export
export const changeLang = (lang:string) => {
  console.log(lang);
  i18n.changeLanguage(lang).then((r) => r);
};
