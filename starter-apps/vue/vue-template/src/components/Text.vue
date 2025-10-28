<script setup>
const props = defineProps([
  'characterLimit',
  'display',
  'marginBottom',
  'marginTop',
  'size',
  'textRole'
])
</script>
<template>
  <gcds-text
    :character-limit="props.characterLimit"
    :display="display"
    :margin-bottom="props.marginBottom"
    :margin-top="props.marginTop"
    :size="props.size"
    :text-role="props.textRole"
  >
    <slot />
  </gcds-text>
</template>
