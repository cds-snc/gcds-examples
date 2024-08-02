<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div>
    <gcds-heading tag="h1">{{ msg }}</gcds-heading>
    <gcds-text>This is an example code which includes both Vue and also GCDS.</gcds-text>
    <gcds-text>Fork it to use it.</gcds-text>
  </div>
</template>

<style scoped></style>
