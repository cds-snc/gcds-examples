<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <gcds-container
      id="main-content"
      main-container
      size="xl"
      centered
      tag="main"
  >
<!--  <div id="main" class="container-xl mx-auto xl:px-0 sm:px-500 px-300">-->
    <RouterView />
  </gcds-container>
  <Footer />

</template>

<style scoped>
</style>
