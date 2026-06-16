import { useTranslation } from 'react-i18next'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

import { DATE_MODIFIED } from '@/constants'

export default function AboutTopicPage() {
  const { t } = useTranslation()

  return (
    <>
      <section>
        <GcdsHeading tag="h1">{t('aboutPage.aboutTopic.heading')}</GcdsHeading>
        <GcdsText>{t('aboutPage.aboutTopic.intro')}</GcdsText>
      </section>
      <GcdsDateModified>{DATE_MODIFIED}</GcdsDateModified>
    </>
  )
}
