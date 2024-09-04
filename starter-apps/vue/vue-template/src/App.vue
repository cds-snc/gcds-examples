<template>
  <Header :key="headerKey"></Header>
  <gcds-container id="main-content" centered main-container size="xl" tag="main">
    <RouterView />
    <gcds-date-modified>2024-09-03</gcds-date-modified>
  </gcds-container>
  <Footer :key="footerKey" />
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { footerKey, headerKey } from '@/utils/refresh.js'
</script>
