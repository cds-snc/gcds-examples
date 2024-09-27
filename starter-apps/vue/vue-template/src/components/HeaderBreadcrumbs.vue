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

// TODO: Here is an example of a quick way to get breadcrumbs for each route. You may want to change this to be more dynamic.
// In this example, only about/aboutTopic has a parent other than home.
const breadcrumbOptions = {
  'about/topic': [
    {
      label: t('about'),
      to: getLocalizedPath('about')
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
    <!-- Home breadcrumb. In this configuration, it only shows up when the current route is something other than "Home" -->
    <AppLink
      v-if="props.currentRoute != 'home'"
      :to="getLocalizedPath(HOME)"
      component="breadcrumb"
      >{{ t(HOME) }}</AppLink
    >
    <AppLink
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
      :to="crumb.to"
      component="breadcrumb"
      >{{ crumb.label }}
    </AppLink>
  </gcds-breadcrumbs>
</template>
