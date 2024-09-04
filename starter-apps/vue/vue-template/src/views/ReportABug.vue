<script setup>
import { useI18n } from 'vue-i18n'

import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { reportABugKey } from '@/utils/refresh.js'

const { t } = useI18n()

/*
 * TODO: Add your form elements here. You may use the formElements object to store the form element IDs.
 * The v-models uses the formStore to store the form data.
 */
const formStore = useFormStore()
const formData = ref({ ...formStore.formData })
const submitted = ref(formStore.submitted)

const formElements = {
  version: 'version',
  title: 'title',
  currentBehavior: 'currentBehavior',
  expectedBehavior: 'expectedBehavior',
  systemInfo: 'systemInfo',
  stepsToReproduce: 'stepsToReproduce',
  codeReproductionUrl: 'codeReproductionUrl',
  additionalInfo: 'additionalInfo'
}

let errors = []

const handleError = (event) => {
  if (!errors.includes(event.detail.id)) {
    errors.push(event.detail.id)
  }
}
const handleValid = (event) => {
  if (errors.includes(event.detail.id)) {
    errors = errors.filter((error) => error !== event.detail.id)
  }
}
async function handleSubmit() {
  setTimeout(() => {
    // Check if there are any errors before submitting the form
    if (errors.length === 0) {
      formStore.submitForm(formData.value)
      submitted.value = formStore.submitted
    }
  }, 50)
}

// Link to the GitHub issue form with the form data pre-filled
const githubIssueURL = () => {
  const version = encodeURIComponent(formData.value.version)
  const title = encodeURIComponent(formData.value.title)
  const currentBehavior = encodeURIComponent(formData.value.currentBehavior)
  const expectedBehavior = encodeURIComponent(formData.value.expectedBehavior)
  const systemInfo = encodeURIComponent(formData.value.systemInfo)
  const stepsToReproduce = encodeURIComponent(formData.value.stepsToReproduce)
  const codeReproductionUrl = encodeURIComponent(formData.value.codeReproductionUrl)
  const additionalInfo = encodeURIComponent(formData.value.additionalInfo)

  const url =
    `https://github.com/cds-snc/gcds-components/issues/new` +
    `?=&template=bug_report.yml` +
    `&title=${title}` +
    `&package_version=${version}` +
    `&current_behavior=${currentBehavior}` +
    `&expected_behavior=${expectedBehavior}` +
    `&sys_info=${systemInfo}` +
    `&steps_to_reproduce=${stepsToReproduce}` +
    `&code_url=${codeReproductionUrl}` +
    `&more_info=${additionalInfo}`

  return url
}
</script>
<template>
  <div>
    <section>
      <gcds-heading class="mb-400" tag="h1">{{ t('reportABugPage.heading') }}</gcds-heading>
      <gcds-text>{{ t('reportABugPage.intro') }}</gcds-text>
    </section>
    <form
      v-if="!submitted"
      :key="reportABugKey"
      name="bugReportForm"
      @gcdsError="handleError"
      @gcdsValid="handleValid"
      @submit.prevent="handleSubmit"
    >
      <gcds-input
        v-model="formData.version"
        :input-id="formElements.version"
        :label="t('reportABugPage.form.versionNumber')"
        :name="formElements.version"
        required
      ></gcds-input>
      <gcds-input
        v-model="formData.title"
        :input-id="formElements.title"
        :label="t('reportABugPage.form.title')"
        :name="formElements.title"
        :placeholder="t('reportABugPage.form.titlePlaceholder')"
        required
      ></gcds-input>
      <gcds-textarea
        v-model="formData.currentBehavior"
        :label="t('reportABugPage.form.currentBehavior')"
        :name="formElements.currentBehavior"
        :textarea-id="formElements.currentBehavior"
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.expectedBehavior"
        :label="t('reportABugPage.form.expectedBehavior')"
        :name="formElements.expectedBehavior"
        :textarea-id="formElements.expectedBehavior"
        required
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.systemInfo"
        :label="t('reportABugPage.form.systemInfo')"
        :name="formElements.systemInfo"
        :textarea-id="formElements.systemInfo"
        required
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.stepsToReproduce"
        :label="t('reportABugPage.form.stepsToReproduce')"
        :name="formElements.stepsToReproduce"
        :textarea-id="formElements.stepsToReproduce"
        required
      ></gcds-textarea>
      <gcds-input
        v-model="formData.codeReproductionUrl"
        :input-id="formElements.codeReproductionUrl"
        :label="t('reportABugPage.form.codeReproductionURL')"
        :name="formElements.codeReproductionUrl"
        required
        type="url"
      ></gcds-input>
      <gcds-textarea
        v-model="formData.additionalInfo"
        :label="t('reportABugPage.form.additionalInformation')"
        :name="formElements.additionalInfo"
        :textarea-id="formElements.additionalInfo"
      ></gcds-textarea>
      <gcds-button type="submit">{{ t('reportABugPage.form.submit') }}</gcds-button>
    </form>

    <div v-if="submitted">
      <h2>{{ t('reportABugPage.form.confirmation') }}</h2>
      <p>
        <strong>{{ t('reportABugPage.form.versionNumber') }}:</strong> {{ formData.version }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.title') }}:</strong> {{ formData.title }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.currentBehavior') }}:</strong>
        {{ formData.currentBehavior }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.expectedBehavior') }}:</strong>
        {{ formData.expectedBehavior }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.systemInfo') }}:</strong> {{ formData.systemInfo }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.stepsToReproduce') }}:</strong>
        {{ formData.stepsToReproduce }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.codeReproductionURL') }}:</strong>
        {{ formData.codeReproductionUrl }}
      </p>
      <p>
        <strong>{{ t('reportABugPage.form.additionalInformation') }}:</strong>
        {{ formData.additionalInfo }}
      </p>
      <section>
        <gcds-heading tag="h2">{{ t('reportABugPage.openGithub') }}</gcds-heading>
        <gcds-button :href="githubIssueURL()" target="_blank" type="link">{{
          t('reportABugPage.openGithubButton')
        }}</gcds-button>
      </section>
    </div>
  </div>
</template>
