import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { defaultLocale, type AppLocale } from '@/routing/constants'
import { localeMeta, resources } from '@/i18n/resources'

export function setDocumentAttributesFor(locale: AppLocale): void {
  const htmlElement = document.querySelector('html')

  if (!htmlElement) {
    return
  }

  htmlElement.setAttribute('lang', locale)
  htmlElement.setAttribute('dir', localeMeta[locale].dir)
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false
    }
  })
}

export default i18n
