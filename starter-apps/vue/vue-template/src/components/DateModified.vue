<script setup>
const props = defineProps(['date'])
</script>
<template>
  <gcds-date-modified>{{ props.date }}</gcds-date-modified>
</template>
