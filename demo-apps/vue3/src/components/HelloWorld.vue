<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <section>
    <gcds-heading tag="h1">{{ msg }}</gcds-heading>
    <gcds-text>
      This is an example code which includes both Vue and also GCDS.
    </gcds-text>
    <gcds-text>Fork it to use it.</gcds-text>
  </section>
</template>

<style scoped></style>
