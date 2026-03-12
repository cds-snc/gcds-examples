import { useTranslation } from 'react-i18next'
import { GcdsDateModified, GcdsHeading, GcdsText } from '@gcds-core/components-react'

export default function AboutTopicPage() {
  const { t } = useTranslation()

  return (
    <>
      <GcdsHeading tag="h1">{t('aboutPage.aboutTopic.heading')}</GcdsHeading>
      <GcdsText>{t('aboutPage.aboutTopic.intro')}</GcdsText>
      <GcdsDateModified>2024-09-10</GcdsDateModified>
    </>
  )
}
