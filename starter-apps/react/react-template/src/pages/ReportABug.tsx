import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  GcdsButton,
  GcdsDateModified,
  GcdsErrorSummary,
  GcdsHeading,
  GcdsInput,
  GcdsText,
  GcdsTextarea
} from '@gcds-core/components-react'

import type { ReportBugFormData } from '@/types/report'
import { initialReportBugFormData } from '@/types/report'
import { buildGithubIssueUrl } from '@/utils/githubIssue'

function setField(
  previous: ReportBugFormData,
  fieldName: keyof ReportBugFormData,
  value: string
): ReportBugFormData {
  return {
    ...previous,
    [fieldName]: value
  }
}

export default function ReportABugPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ReportBugFormData>(initialReportBugFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement
    const fieldName = target.name as keyof ReportBugFormData

    if (!fieldName) {
      return
    }

    setFormData((previous) => setField(previous, fieldName, target.value))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <section>
        <GcdsHeading tag="h1">{t('reportABugPage.heading')}</GcdsHeading>
        <GcdsText>{t('reportABugPage.intro')}</GcdsText>
      </section>

      {!submitted ? (
        <form name="bugReportForm" noValidate onSubmit={handleSubmit}>
          <GcdsErrorSummary listen />

          <GcdsInput
            hint={t('reportABugPage.form.versionNumberHint')}
            inputId="version"
            label={t('reportABugPage.form.versionNumber')}
            name="version"
            onGcdsInput={handleInputChange}
            required
            validateOn="submit"
            value={formData.version}
          />
          <GcdsInput
            hint={t('reportABugPage.form.titleHint')}
            inputId="title"
            label={t('reportABugPage.form.title')}
            name="title"
            onGcdsInput={handleInputChange}
            required
            validateOn="submit"
            value={formData.title}
          />
          <GcdsTextarea
            hint={t('reportABugPage.form.currentBehaviorHint')}
            label={t('reportABugPage.form.currentBehavior')}
            name="currentBehavior"
            onGcdsInput={handleInputChange}
            textareaId="currentBehavior"
            validateOn="submit"
            value={formData.currentBehavior}
          />
          <GcdsTextarea
            hint={t('reportABugPage.form.expectedBehaviorHint')}
            label={t('reportABugPage.form.expectedBehavior')}
            name="expectedBehavior"
            onGcdsInput={handleInputChange}
            required
            textareaId="expectedBehavior"
            validateOn="submit"
            value={formData.expectedBehavior}
          />
          <GcdsTextarea
            hint={t('reportABugPage.form.systemInfoHint')}
            label={t('reportABugPage.form.systemInfo')}
            name="systemInfo"
            onGcdsInput={handleInputChange}
            required
            textareaId="systemInfo"
            validateOn="submit"
            value={formData.systemInfo}
          />
          <GcdsTextarea
            hint={t('reportABugPage.form.stepsToReproduceHint')}
            label={t('reportABugPage.form.stepsToReproduce')}
            name="stepsToReproduce"
            onGcdsInput={handleInputChange}
            required
            textareaId="stepsToReproduce"
            validateOn="submit"
            value={formData.stepsToReproduce}
          />
          <GcdsInput
            hint={t('reportABugPage.form.codeReproductionURLHint')}
            inputId="codeReproductionUrl"
            label={t('reportABugPage.form.codeReproductionURL')}
            name="codeReproductionUrl"
            onGcdsInput={handleInputChange}
            required
            type="url"
            validateOn="submit"
            value={formData.codeReproductionUrl}
          />
          <GcdsTextarea
            hint={t('reportABugPage.form.additionalInformationHint')}
            label={t('reportABugPage.form.additionalInformation')}
            name="additionalInfo"
            onGcdsInput={handleInputChange}
            textareaId="additionalInfo"
            validateOn="submit"
            value={formData.additionalInfo}
          />

          <GcdsButton type="submit">{t('reportABugPage.form.submit')}</GcdsButton>
        </form>
      ) : (
        <div>
          <GcdsHeading tag="h2">{t('reportABugPage.form.confirmation')}</GcdsHeading>
          <GcdsText>
            <strong>{t('reportABugPage.form.versionNumber')}:</strong> {formData.version}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.title')}:</strong> {formData.title}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.currentBehavior')}:</strong> {formData.currentBehavior}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.expectedBehavior')}:</strong>{' '}
            {formData.expectedBehavior}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.systemInfo')}:</strong> {formData.systemInfo}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.stepsToReproduce')}:</strong>{' '}
            {formData.stepsToReproduce}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.codeReproductionURL')}:</strong>{' '}
            {formData.codeReproductionUrl}
          </GcdsText>
          <GcdsText>
            <strong>{t('reportABugPage.form.additionalInformation')}:</strong>{' '}
            {formData.additionalInfo}
          </GcdsText>

          <section>
            <GcdsHeading tag="h2">{t('reportABugPage.openGithub')}</GcdsHeading>
            <GcdsButton href={buildGithubIssueUrl(formData)} target="_blank" type="link">
              {t('reportABugPage.openGithubButton')}
            </GcdsButton>
          </section>
        </div>
      )}

      <GcdsDateModified>2024-09-10</GcdsDateModified>
    </>
  )
}
