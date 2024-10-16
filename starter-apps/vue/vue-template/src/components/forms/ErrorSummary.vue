<script setup>
const { errorLinks, heading, listen } = defineProps(['errorLinks', 'heading', 'listen'])
</script>
<template>
  <gcds-error-summary
    :error-links="errorLinks"
    :heading="heading"
    :listen="listen"
  ></gcds-error-summary>
</template>
