import { useTranslation } from 'react-i18next'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <GcdsHeading tag="h1">{t('notFoundPage.heading')}</GcdsHeading>
      <GcdsText>{t('notFoundPage.intro')}</GcdsText>
      <GcdsDateModified>2024-09-10</GcdsDateModified>
    </section>
  )
}
