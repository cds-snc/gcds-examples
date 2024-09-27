<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'
import { getLocalizedPath } from '@/router'
import { useI18n } from 'vue-i18n'
import Text from '@/components/Text.vue'
import Heading from '@/components/Heading.vue'
import DateModified from '@/components/DateModified.vue'

const { t } = useI18n()
</script>
<template>
  <div class="about">
    <Heading tag="h1">{{ t('aboutPage.heading') }}</Heading>
    <Text>
      {{ t('aboutPage.intro') }}
    </Text>
    <section>
      <AppLink :to="getLocalizedPath('about/topic')">{{
        t('aboutPage.aboutTopic.heading')
      }}</AppLink>
    </section>
    <DateModified date="2024-09-10"></DateModified>
  </div>
</template>

<style scoped></style>
