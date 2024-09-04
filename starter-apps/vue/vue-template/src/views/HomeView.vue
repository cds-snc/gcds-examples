<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div>
    <section>
      <gcds-heading class="mb-400" tag="h1">{{ t('homePage.heading') }}</gcds-heading>
      <gcds-text>
        {{ t('homePage.paragraph') }}
      </gcds-text>
      <gcds-text>
        {{ t('homePage.paragraph2') }}
      </gcds-text>
      <gcds-text>
        {{ t('homePage.paragraph3') }}
      </gcds-text>
    </section>
  </div>
</template>
