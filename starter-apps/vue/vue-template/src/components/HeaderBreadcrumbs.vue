<script setup>
import { getLocalizedPath } from '@/router/index.js'
import { useI18n } from 'vue-i18n'
import AppLink from '@/components/AppLink.vue'

import { computed } from 'vue'
import { HOME } from '@/config/constants.js'

const { t } = useI18n()

const props = defineProps({
  currentRoute: String
})

// TODO: Easy way to get breadcrumbs for each route. You may change this to be more dynamic.
const breadcrumbOptions = {
  about: [
    {
      label: t('about'),
      to: getLocalizedPath('about')
    }
  ],
  'about/about1': [
    {
      label: t('about'),
      to: getLocalizedPath('about')
    },
    {
      label: t('aboutPage.about1.heading'),
      to: getLocalizedPath('about/about1')
    }
  ],
  reportABug: [
    {
      label: t('reportABug'),
      to: getLocalizedPath('reportABug')
    }
  ]
}

const breadcrumbs = computed(() => {
  let crumbs = breadcrumbOptions[props.currentRoute]
  return crumbs
})
</script>
<template>
  <gcds-breadcrumbs slot="breadcrumb">
    <AppLink :to="getLocalizedPath(HOME)" component="breadcrumb">{{ t(HOME) }}</AppLink>
    <AppLink
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
      :to="crumb.to"
      component="breadcrumb"
      >{{ crumb.label }}
    </AppLink>
  </gcds-breadcrumbs>
</template>
