<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'
import { getLocalizedPath } from '@/router'
import { useI18n } from 'vue-i18n'
import Text from '@/components/Text.vue'
import Heading from '@/components/Heading.vue'

const { t } = useI18n()
</script>
<template>
  <div class="about">
    <Heading class="mb-400" tag="h1">{{ t('aboutPage.heading') }}</Heading>
    <Text>
      {{ t('aboutPage.intro') }}
    </Text>
    <section>
      <AppLink :to="getLocalizedPath('about/about1')">{{ t('aboutPage.about1.heading') }}</AppLink>
    </section>
    <section>
      <AppLink :to="getLocalizedPath('about/about2')">{{ t('aboutPage.about2.heading') }}</AppLink>
    </section>
  </div>
</template>

<style scoped></style>
