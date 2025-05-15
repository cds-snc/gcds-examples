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
import DateModified from '@/components/DateModified.vue'
import ErrorSummary from '@/components/forms/ErrorSummary.vue'
import Checkboxes from '@/components/forms/Checkboxes.vue'
import Radios from '@/components/forms/Radios.vue'

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
  additionalInfo: 'additionalInfo',
  check: 'check',
  radios: 'radios'
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

const checkBoxOptions = [
  { "label": "Check 1", "id": "check1", "value": "check1", "hint": "Description or example to make the option clearer."},
  { "label": "Check 2", "id": "check2", "value": "check2", "hint": "Description or example to make the option clearer."}
]
const radiosOptions = [
  { "label": "Yes", "id": "radio1", "value": "yes", "hint": "Description or example to make the option clearer."},
  { "label": "No", "id": "radio2", "value": "no", "hint": "Description or example to make the option clearer."}
]
</script>
<template>
  <div>
    <section>
      <Heading tag="h1">{{ t('reportABugPage.heading') }}</Heading>
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
      <ErrorSummary listen />

      <gcds-fieldset
        legend="New form components"
        legend-size="h2"
        hint="These are not useful to the form"
      >
        <Checkboxes
          :id="formElements.check"
          :name="formElements.check"
          :options="checkBoxOptions"
          legend="Select one of the checkboxes"
          validate-on="submit"
          v-model="formData.check"
          required
        ></Checkboxes>
        <Radios
          :id="formElements.radios"
          :name="formElements.radios"
          :options="radiosOptions"
          legend="Select one of the radio buttons"
          validate-on="submit"
          v-model="formData.radios"
          required
        ></Radios>
      </gcds-fieldset>
      <Input
        :id="formElements.version"
        v-model="formData.version"
        :hint="t('reportABugPage.form.versionNumberHint')"
        :label="t('reportABugPage.form.versionNumber')"
        :name="formElements.version"
        required
        validate-on="submit"
      ></Input>
      <Input
        :id="formElements.title"
        v-model="formData.title"
        :hint="t('reportABugPage.form.titleHint')"
        :label="t('reportABugPage.form.title')"
        :name="formElements.title"
        :placeholder="t('reportABugPage.form.titlePlaceholder')"
        required
        validate-on="submit"
      ></Input>
      <TextArea
        :id="formElements.currentBehavior"
        v-model="formData.currentBehavior"
        :hint="t('reportABugPage.form.currentBehaviorHint')"
        :label="t('reportABugPage.form.currentBehavior')"
        :name="formElements.currentBehavior"
        validate-on="submit"
      ></TextArea>
      <TextArea
        :id="formElements.expectedBehavior"
        v-model="formData.expectedBehavior"
        :hint="t('reportABugPage.form.expectedBehaviorHint')"
        :label="t('reportABugPage.form.expectedBehavior')"
        :name="formElements.expectedBehavior"
        required
        validate-on="submit"
      ></TextArea>
      <TextArea
        :id="formElements.systemInfo"
        v-model="formData.systemInfo"
        :hint="t('reportABugPage.form.systemInfoHint')"
        :label="t('reportABugPage.form.systemInfo')"
        :name="formElements.systemInfo"
        required
        validate-on="submit"
      ></TextArea>
      <TextArea
        :id="formElements.stepsToReproduce"
        v-model="formData.stepsToReproduce"
        :hint="t('reportABugPage.form.stepsToReproduceHint')"
        :label="t('reportABugPage.form.stepsToReproduce')"
        :name="formElements.stepsToReproduce"
        required
        validate-on="submit"
      ></TextArea>
      <Input
        :id="formElements.codeReproductionUrl"
        v-model="formData.codeReproductionUrl"
        :hint="t('reportABugPage.form.codeReproductionURLHint')"
        :label="t('reportABugPage.form.codeReproductionURL')"
        :name="formElements.codeReproductionUrl"
        required
        type="url"
        validate-on="submit"
      ></Input>
      <TextArea
        :id="formElements.additionalInfo"
        v-model="formData.additionalInfo"
        :hint="t('reportABugPage.form.additionalInformationHint')"
        :label="t('reportABugPage.form.additionalInformation')"
        :name="formElements.additionalInfo"
        validate-on="submit"
      ></TextArea>
      <Button type="submit">{{ t('reportABugPage.form.submit') }}</Button>
    </form>

    <div v-if="submitted">
      <Heading tag="h2">{{ t('reportABugPage.form.confirmation') }}</Heading>
      <Text>
        <strong>{{ t('reportABugPage.form.versionNumber') }}:</strong> {{ formData.version }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.title') }}:</strong> {{ formData.title }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.currentBehavior') }}:</strong>
        {{ formData.currentBehavior }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.expectedBehavior') }}:</strong>
        {{ formData.expectedBehavior }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.systemInfo') }}:</strong> {{ formData.systemInfo }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.stepsToReproduce') }}:</strong>
        {{ formData.stepsToReproduce }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.codeReproductionURL') }}:</strong>
        {{ formData.codeReproductionUrl }}
      </Text>
      <Text>
        <strong>{{ t('reportABugPage.form.additionalInformation') }}:</strong>
        {{ formData.additionalInfo }}
      </Text>
      <section>
        <Heading tag="h2">{{ t('reportABugPage.openGithub') }}</Heading>
        <Button :href="githubIssueURL()" target="_blank" type="link">{{
          t('reportABugPage.openGithubButton')
        }}</Button>
      </section>
    </div>
    <DateModified date="2024-09-10"></DateModified>
  </div>
</template>
