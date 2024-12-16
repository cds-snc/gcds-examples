import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'
import { EN, FR } from '../config/constants.js'
import { en } from './en.js'
import { fr } from './fr.js'

const messages = {
  en,
  fr
}

// TODO: Change this to your preferred default locale
export const defaultLocale = EN

export const supportedLocales = {
  [EN]: { name: 'English', dir: 'ltr' },
  [FR]: { name: 'Français', dir: 'ltr' }
}
// TODO: Change this to your preferred configuration
let _i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
  legacy: false
})

function setLocale(newLocale) {
  _i18n.global.locale.value = newLocale
  setDocumentAttributesFor(newLocale)
}

async function loadMessagesFor(locale) {
  _i18n.global.setLocaleMessage(locale, messages[locale])
  return nextTick()
}

// Set the document attributes for the locale
function setDocumentAttributesFor(locale) {
  const htmlElement = document.querySelector('html')

  htmlElement.setAttribute('lang', locale)
  htmlElement.setAttribute('dir', supportedLocales[locale].dir)
}

// Helper function to get the other locale
export function getOtherLocale() {
  let otherLocale = _i18n.global.locale.value === EN ? FR : EN
  return otherLocale
}

export default {
  get i18n() {
    return _i18n
  },
  setLocale,
  loadMessagesFor
}
