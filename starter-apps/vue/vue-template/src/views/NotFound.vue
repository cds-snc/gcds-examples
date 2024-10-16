<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import DateModified from '@/components/DateModified.vue'

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
    <Heading tag="h1">{{ t('notFoundPage.heading') }}</Heading>
    <Text>
      {{ t('notFoundPage.intro') }}
    </Text>
    <DateModified date="2024-09-10"></DateModified>
  </div>
</template>
