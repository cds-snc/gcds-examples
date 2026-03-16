import { useTranslation } from 'react-i18next'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <section>
        <GcdsHeading tag="h1">{t('homePage.heading')}</GcdsHeading>
        <GcdsText>{t('homePage.paragraph')}</GcdsText>
        <GcdsText>{t('homePage.paragraph2')}</GcdsText>
        <GcdsText>{t('homePage.paragraph3')}</GcdsText>
      </section>
      <GcdsDateModified>2024-09-10</GcdsDateModified>
    </>
  )
}
