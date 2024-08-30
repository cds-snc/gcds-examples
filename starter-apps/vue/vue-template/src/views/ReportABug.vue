<script setup>
import { useI18n } from 'vue-i18n'

import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { reportABugKey } from '@/utils/refresh.js'

const { t } = useI18n()

const formStore = useFormStore()
const formData = ref({ ...formStore.formData })
const submitted = ref(formStore.submitted)

function handleSubmit() {
  formStore.submitForm(formData.value)
  submitted.value = formStore.submitted
}
</script>
<template>
  <div>
    <section>
      <gcds-heading class="mb-400" tag="h1">{{ t('reportABugPage.heading') }}</gcds-heading>
      <gcds-text>{{ t('reportABugPage.intro') }}</gcds-text>
    </section>
    <form v-if="!submitted" :key="reportABugKey" @submit.prevent="handleSubmit">
      <gcds-input
        v-model="formData.version"
        :label="t('reportABugPage.form.versionNumber')"
        required
      ></gcds-input>
      <gcds-input
        v-model="formData.title"
        :label="t('reportABugPage.form.title')"
        :placeholder="t('reportABugPage.form.titlePlaceholder')"
        required
      ></gcds-input>
      <gcds-textarea
        v-model="formData.currentBehavior"
        :label="t('reportABugPage.form.currentBehavior')"
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.expectedBehavior"
        :label="t('reportABugPage.form.expectedBehavior')"
        required
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.systemInfo"
        :label="t('reportABugPage.form.systemInfo')"
        required
      ></gcds-textarea>
      <gcds-textarea
        v-model="formData.stepsToReproduce"
        :label="t('reportABugPage.form.stepsToReproduce')"
        required
      ></gcds-textarea>
      <gcds-input
        v-model="formData.codeReproductionUrl"
        :label="t('reportABugPage.form.codeReproductionURL')"
        required
        type="url"
      ></gcds-input>
      <gcds-textarea
        v-model="formData.additionalInfo"
        :label="t('reportABugPage.form.additionalInformation')"
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
    </div>
  </div>
</template>
