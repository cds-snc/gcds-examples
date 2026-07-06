import { useTranslation } from 'react-i18next'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

import { DATE_MODIFIED } from '@/constants'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <section>
        <GcdsHeading tag="h1">{t('notFoundPage.heading')}</GcdsHeading>
        <GcdsText>{t('notFoundPage.intro')}</GcdsText>
      </section>
      <GcdsDateModified>{DATE_MODIFIED}</GcdsDateModified>
    </>
  )
}
