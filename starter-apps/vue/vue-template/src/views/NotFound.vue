<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="not-found">
    <gcds-heading class="mb-400" tag="h1">{{ t('notFoundPage.heading') }}</gcds-heading>
    <gcds-text>
      {{ t('notFoundPage.intro') }}
    </gcds-text>
  </div>
</template>
