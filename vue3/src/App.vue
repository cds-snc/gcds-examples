<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import ColorsVue from './components/Colors.vue';

import { ref, defineModel } from 'vue';

const hairColors = ref([
  { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
  { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
  { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
  { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
]);

const selectedColor = defineModel('selectedColor');
</script>

<template>
  <div>
    <Header />
    <HelloWorld msg="Hello, World!" />
    <ColorsVue />
  </div>
</template>

<style scoped></style>
