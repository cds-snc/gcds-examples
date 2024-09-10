<script setup>
import { useI18n } from 'vue-i18n'

import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { reportABugKey } from '@/utils/refresh.js'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import Input from '@/components/forms/Input.vue'
import TextArea from '@/components/forms/TextArea.vue'
import Button from '@/components/forms/Button.vue'

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
      <Heading class="mb-400" tag="h1">{{ t('reportABugPage.heading') }}</Heading>
      <Text>{{ t('reportABugPage.intro') }}</Text>
    </section>
    <form
      v-if="!submitted"
      :key="reportABugKey"
      name="bugReportForm"
      @gcdsError="handleError"
      @gcdsValid="handleValid"
      @submit.prevent="handleSubmit"
    >
      <Input
        :id="formElements.version"
        v-model="formData.version"
        :label="t('reportABugPage.form.versionNumber')"
        :name="formElements.version"
        required
      ></Input>
      <Input
        :id="formElements.title"
        v-model="formData.title"
        :label="t('reportABugPage.form.title')"
        :name="formElements.title"
        :placeholder="t('reportABugPage.form.titlePlaceholder')"
        required
      ></Input>
      <TextArea
        :id="formElements.currentBehavior"
        v-model="formData.currentBehavior"
        :label="t('reportABugPage.form.currentBehavior')"
        :name="formElements.currentBehavior"
      ></TextArea>
      <TextArea
        :id="formElements.expectedBehavior"
        v-model="formData.expectedBehavior"
        :label="t('reportABugPage.form.expectedBehavior')"
        :name="formElements.expectedBehavior"
        required
      ></TextArea>
      <TextArea
        :id="formElements.systemInfo"
        v-model="formData.systemInfo"
        :label="t('reportABugPage.form.systemInfo')"
        :name="formElements.systemInfo"
        required
      ></TextArea>
      <TextArea
        :id="formElements.stepsToReproduce"
        v-model="formData.stepsToReproduce"
        :label="t('reportABugPage.form.stepsToReproduce')"
        :name="formElements.stepsToReproduce"
        required
      ></TextArea>
      <Input
        :id="formElements.codeReproductionUrl"
        v-model="formData.codeReproductionUrl"
        :label="t('reportABugPage.form.codeReproductionURL')"
        :name="formElements.codeReproductionUrl"
        required
        type="url"
      ></Input>
      <TextArea
        :id="formElements.additionalInfo"
        v-model="formData.additionalInfo"
        :label="t('reportABugPage.form.additionalInformation')"
        :name="formElements.additionalInfo"
      ></TextArea>
      <Button type="submit">{{ t('reportABugPage.form.submit') }}</Button>
    </form>

    <div v-if="submitted">
      <Heading tag="h2">{{ t('reportABugPage.form.confirmation') }}</Heading>
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
        <Heading tag="h2">{{ t('reportABugPage.openGithub') }}</Heading>
        <Button :href="githubIssueURL()" target="_blank" type="link">{{
          t('reportABugPage.openGithubButton')
        }}</Button>
      </section>
    </div>
  </div>
</template>
