<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'

const { t } = useI18n()
</script>
<template>
  <div class="about">
    <Heading class="mb-400" tag="h1">{{ t('aboutPage.about1.heading') }}</Heading>
    <Text>
      {{ t('aboutPage.about1.intro') }}
    </Text>
  </div>
</template>

<style scoped></style>
