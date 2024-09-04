<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const { t, locale } = useI18n()
const route = useRoute()

// Watch for changes in the locale parameter and update the i18n locale
watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale) {
      locale.value = newLocale
    }
  }
)
</script>
<template>
  <div class="not-found">
    <gcds-heading class="mb-400" tag="h1">{{ t('notFoundPage.heading') }}</gcds-heading>
    <gcds-text>
      {{ t('notFoundPage.intro') }}
    </gcds-text>
  </div>
</template>
