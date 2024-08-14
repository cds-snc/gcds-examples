import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        french: 'French',
        english: 'English'
    },
    fr: {
        home: 'Accueil',
        about: 'À propos',
        french: 'Français',
        english: 'Anglais'
    }
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'fr',
    messages,
    legacy: false
});

export default i18n;