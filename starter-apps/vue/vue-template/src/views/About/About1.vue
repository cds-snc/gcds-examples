<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="about">
    <gcds-heading class="mb-400" tag="h1">{{ t('aboutPage.about1.heading') }}</gcds-heading>
    <gcds-text>
      {{ t('aboutPage.about1.intro') }}
    </gcds-text>
  </div>
</template>

<style scoped></style>
