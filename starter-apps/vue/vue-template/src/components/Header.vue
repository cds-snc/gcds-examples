<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import AppLink from '@/components/AppLink.vue'
import { getLocalizedPath } from '@/router/index.js'
import { getOtherLocale } from '@/i18n/index.js'
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs.vue'
import { navigateTo } from '@/utils/nav.js'
import { HOME } from '@/config/constants.js'

const router = useRouter()

const { t } = useI18n()

// Get the path for the other language. Used in the language toggle button.
const getOtherLangPath = computed(() => {
  let currentPath = router.currentRoute.value.name
  currentPath === undefined && (currentPath = HOME)
  if (currentPath === undefined) {
    return
  }
  return getLocalizedPath(currentPath, getOtherLocale())
})

const isCurrentRoute = (routeName) => {
  return router.currentRoute.value.name === routeName
}

// TODO: Set the top navigation elements
const navElements = [
  {
    name: HOME,
    label: t(HOME)
  },
  {
    name: 'about',
    label: t('about')
  },
  {
    name: 'reportABug',
    label: t('reportABug')
  }
]
</script>

<template>
  <gcds-header :lang-href="getOtherLangPath" skip-to-href="#main">
    <gcds-search slot="search"></gcds-search>
    <div slot="toggle">
      <AppLink :to="getOtherLangPath">{{ t('langToggle') }}</AppLink>
    </div>
    <gcds-top-nav slot="menu" label="Top navigation">
      <!--
        Using <AppLink component="nav"> here will utilize RouterLink, but at the moment it does not get styled
        correctly due to <gcds-nav-link> looking for a direct parent <gcds-top-nav> component.

        // TODO: Add your navigational links here. You may use the navElements array to loop through the links.
      -->
      <gcds-nav-link
        slot="home"
        :href="getLocalizedPath(HOME)"
        @click.prevent="
          () => {
            navigateTo(getLocalizedPath(HOME))
          }
        "
      >
        {{ t('homeNavLink') }}
      </gcds-nav-link>
      <gcds-nav-link
        v-for="(navElement, index) in navElements"
        :key="index"
        :current="isCurrentRoute(navElement.name)"
        :href="getLocalizedPath(navElement.name)"
        @click.prevent="
          () => {
            navigateTo(getLocalizedPath(navElement.name))
          }
        "
      >
        {{ navElement.label }}
      </gcds-nav-link>
    </gcds-top-nav>

    <HeaderBreadcrumbs
      slot="breadcrumb"
      :currentRoute="router.currentRoute.value.name"
    ></HeaderBreadcrumbs>
  </gcds-header>
</template>
