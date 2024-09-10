<script setup>
const { id, name, label, required } = defineProps([
  'id',
  'name',
  'label',
  'placeholder',
  'required'
])
const model = defineModel()
</script>
<template>
  <gcds-textarea
    v-model="model"
    :label="label"
    :name="name"
    :required="required"
    :textarea-id="id"
  ></gcds-textarea>
</template>
