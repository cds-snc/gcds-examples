import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

import AppLink from '@/components/AppLink'
import { defaultLocale } from '@/routing/constants'
import { getLocalizedPath, isAppLocale } from '@/routing/localizedRoutes'

export default function AboutPage() {
  const { t } = useTranslation()
  const { locale: localeParam } = useParams()
  const locale = isAppLocale(localeParam) ? localeParam : defaultLocale

  return (
    <>
      <section>
          <GcdsHeading tag="h1">{t('aboutPage.heading')}</GcdsHeading>
      <GcdsText>{t('aboutPage.intro')}</GcdsText>
        <AppLink to={getLocalizedPath('aboutTopic', locale)}>
          {t('aboutPage.aboutTopic.heading')}
        </AppLink>
      </section>
      <GcdsDateModified>2024-09-10</GcdsDateModified>
    </>
  )
}
