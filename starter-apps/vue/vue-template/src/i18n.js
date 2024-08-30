import { createI18n } from 'vue-i18n';
import { nextTick } from 'vue';

const messages = {
    'en': {
        home: 'Home',
        about: 'About',
        french: 'French',
        english: 'English',
        langToggle: 'Français',
        reportABug: 'Report a Bug',
        routes: {
            home: 'home',
            about: 'about',
            reportABug: 'report-a-bug'
        }
    },
    'fr': {
        home: 'Accueil',
        about: 'À propos',
        french: 'Français',
        english: 'Anglais',
        langToggle: 'English',
        reportABug: 'Signaler un bug',
        routes: {
            home: 'accueil',
            about: 'a-propos',
            reportABug: 'signaler-un-bug'
        }
    }
};

export const defaultLocale = 'en';

export const supportedLocales = {
    'en': { name: 'English', dir: 'ltr'},
    'fr': { name: 'Français', dir: 'ltr'}
}
let _i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages,
    legacy: false
});

function setLocale(newLocale) {
    _i18n.global.locale.value = newLocale
    setDocumentAttributesFor(newLocale)
}

async function loadMessagesFor(locale) {
    // const messages = await import(
    //     /* webpackChunkName: "locale-[request]" */ `../translations/${locale}.json`
    //     )

    _i18n.global.setLocaleMessage(locale, messages[locale])

    return nextTick()
}

function setDocumentAttributesFor(locale) {
    const htmlElement = document.querySelector('html')

    htmlElement.setAttribute('lang', locale)
    console.log('setting what?', locale)
    htmlElement.setAttribute('dir', supportedLocales[locale].dir)
}

// export default _i18n;

export function getOtherLocale(locale) {
    return locale === 'en' ? 'fr' : 'en'
}

export default {
    get i18n() {
        return _i18n
    },
    setLocale,
    loadMessagesFor
}