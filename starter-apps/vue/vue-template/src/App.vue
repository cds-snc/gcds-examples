<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <main id="main" class="container-xl mx-auto xl:px-0 sm:px-500 px-300">
    <RouterView />
  </main>
  <Footer />

</template>

<style scoped>
</style>
