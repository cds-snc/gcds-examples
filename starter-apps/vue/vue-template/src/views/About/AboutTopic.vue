<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import DateModified from '@/components/DateModified.vue'

const { t } = useI18n()
</script>
<template>
  <div class="about">
    <Heading tag="h1">{{ t('aboutPage.aboutTopic.heading') }}</Heading>
    <Text>
      {{ t('aboutPage.aboutTopic.intro') }}
    </Text>
    <DateModified date="2024-09-10"></DateModified>
  </div>
</template>

<style scoped></style>
