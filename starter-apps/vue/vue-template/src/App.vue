<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { footerKey, headerKey } from '@/utils/refresh.js'
import Container from '@/components/Container.vue'
import DateModified from '@/components/DateModified.vue'
</script>

<template>
  <Header :key="headerKey"></Header>
  <Container>
    <RouterView />
    <DateModified date="2024-09-10"></DateModified>
  </Container>
  <Footer :key="footerKey" />
</template>

<style scoped></style>
