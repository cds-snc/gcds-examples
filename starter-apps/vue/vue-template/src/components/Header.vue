<template>
    <gcds-header
      skip-to-href="#main"
    >
      <gcds-breadcrumbs slot="breadcrumb">
        <gcds-breadcrumbs-item href="/" @click.prevent="navigateTo('/')">{{ t('home') }}</gcds-breadcrumbs-item>
        <gcds-breadcrumbs-item href="/about" @click.prevent="navigateTo('/about')">{{ t('about') }}</gcds-breadcrumbs-item>
      </gcds-breadcrumbs>
      <gcds-search slot="search"></gcds-search>
      <div slot="toggle">
        <gcds-link :href="langPath" @click.prevent="changeLanguage(newLang)">{{ t(LOCALES[current].name) }}</gcds-link>
      </div>
    </gcds-header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { navigateTo } from "@/utils/nav.js";
import { LOCALES } from "@/config/constants.js";

const { t, locale } = useI18n();

const current = locale.value;
const newLang = current === 'en' ? 'fr' : 'fr';
const changeLanguage = (lang) => {
  locale.value = lang;
}
</script>