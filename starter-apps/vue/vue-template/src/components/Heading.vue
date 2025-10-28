<script setup>
const { tag, marginBottom, marginTop } = defineProps(['tag', 'marginBottom', 'marginTop'])
</script>
<template>
  <gcds-heading
    :margin-bottom="marginBottom"
    :margin-top="marginTop"
    :tag="tag"
  >
    <slot />
  </gcds-heading>
</template>
