import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import AppShell from '@/components/AppShell'
import i18n, { setDocumentAttributesFor } from '@/i18n'
import { defaultLocale } from '@/routing/constants'
import { isAppLocale } from '@/routing/localizedRoutes'

export default function LocaleRoute() {
  const { locale } = useParams()
  const hasValidLocale = isAppLocale(locale)

  useEffect(() => {
    if (!hasValidLocale) {
      return
    }

    void i18n.changeLanguage(locale)
    setDocumentAttributesFor(locale)
  }, [hasValidLocale, locale])

  if (!hasValidLocale) {
    return <Navigate replace to={`/${defaultLocale}/`} />
  }

  return <AppShell key={locale} locale={locale} />
}
