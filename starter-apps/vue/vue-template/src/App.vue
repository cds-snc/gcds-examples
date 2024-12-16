<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { footerKey, headerKey } from '@/utils/refresh.js'
import Container from '@/components/Container.vue'
</script>

<template>
  <Header :key="headerKey"></Header>
  <Container>
    <RouterView />
  </Container>
  <Footer :key="footerKey" />
</template>

<style scoped></style>
