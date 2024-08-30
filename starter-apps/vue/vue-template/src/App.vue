<template>
  <Header :key="headerKey"></Header>
  <gcds-container
      id="main-content"
      main-container
      size="xl"
      centered
      tag="main"
  >
    <RouterView />
  </gcds-container>
  <Footer :key="footerKey"/>

</template>

<style scoped>
</style>

<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import {headerKey, footerKey} from "@/utils/refresh.js";
</script>