import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: require('./locales/en/translation.json')
    },
    uk: {
        translation: require('./locales/uk/translation.json')
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'uk',
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
