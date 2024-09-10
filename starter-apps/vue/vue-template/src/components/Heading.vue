<script setup>
const { tag } = defineProps(['tag'])
</script>
<template>
  <gcds-heading :tag="tag"><slot></slot></gcds-heading>
</template>
