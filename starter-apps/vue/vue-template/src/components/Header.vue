<template>
  <gcds-header
      skip-to-href="#main"
  >
    <gcds-search :key="componentKey" slot="search"></gcds-search>
    <div slot="toggle">
      <gcds-link :href="getOtherLangPath()" @click.prevent="changeLanguage()">
        {{ t('langToggle') }} - {{ getOtherLocale(locale) }}
      </gcds-link>

    </div>
    <gcds-top-nav
        label="Top navigation"
        alignment="right"
        slot="menu"
    >
      <gcds-nav-link href="/" slot="home">Vue 3 App</gcds-nav-link>
      <gcds-nav-link href="/">{{ t('home') }}</gcds-nav-link>
      <gcds-nav-link :href="t('routes.about')">{{ t('about') }}</gcds-nav-link>
      <gcds-nav-link :href="t('routes.reportABug')">{{ t('reportABug')}}</gcds-nav-link>
    </gcds-top-nav>

    <gcds-breadcrumbs slot="breadcrumb">
      <gcds-breadcrumbs-item href="/" @click.prevent="navigateTo('/')">{{ t('home') }}</gcds-breadcrumbs-item>
      <gcds-breadcrumbs-item href="/about" @click.prevent="navigateTo('/about')">{{
          t('about')
        }}
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>
  </gcds-header>
</template>

<script setup>
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router'
import {navigateTo} from "@/utils/nav.js";
import {getOtherLocale} from "@/i18n.js";
import {ref} from 'vue';
import {getLocalizedPath} from "@/router/index.js";

const {t, locale} = useI18n();
const router = useRouter();

const componentKey = ref(0);

const forceRefresh = () => {
  componentKey.value += 1;
}

// const otherLang = computed(() => locale.value === defaultLocale ? 'fr-CA' : 'en-CA');

const getCurrentPath = () => {
  return router.currentRoute.value.name;
}

const getOtherLangPath = () => {
  return getLocalizedPath(getCurrentPath(), getOtherLocale(locale.value));
}



const changeLanguage = () => {
  // let lang = getOtherLocale(locale)
  router.push(getOtherLangPath());

  forceRefresh()
}
</script>