<script setup>
const { tag, marginBottom, marginTop } = defineProps(['tag'])
</script>
<template>
  <gcds-heading :margin-bottom="marginBottom" :margin-top="marginTop" :tag="tag"
    ><slot></slot
  ></gcds-heading>
</template>
