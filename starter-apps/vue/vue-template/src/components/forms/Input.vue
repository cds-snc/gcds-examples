<script setup>
const { id, name, label, placeholder, required } = defineProps([
  'id',
  'name',
  'label',
  'placeholder',
  'required'
])
const model = defineModel()
</script>
<template>
  <gcds-input
    v-model="model"
    :input-id="id"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :required="required"
  ></gcds-input>
</template>
