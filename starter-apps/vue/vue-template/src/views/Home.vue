<script setup>
import { useI18n } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import DateModified from '@/components/DateModified.vue'

const { t } = useI18n()
</script>
<template>
  <section>
    <Heading tag="h1">{{ t('homePage.heading') }}</Heading>
    <Text>{{ t('homePage.paragraph') }}</Text>
    <Text>{{ t('homePage.paragraph2') }}</Text>
    <Text>{{ t('homePage.paragraph3') }}</Text>
  </section>
  <DateModified date="2024-09-10"></DateModified>
</template>
