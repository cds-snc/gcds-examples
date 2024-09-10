<script setup>
const { id, type, href, target, role, name, disabled, size, rel } = defineProps([
  'id',
  'type',
  'href',
  'target',
  'role',
  'name',
  'disabled',
  'size',
  'rel'
])
</script>
<template>
  <gcds-button
    :button-id="id"
    :button-role="role"
    :disabled="disabled"
    :href="href"
    :name="name"
    :rel="rel"
    :size="size"
    :target="target"
    :type="type"
    ><slot></slot
  ></gcds-button>
</template>
