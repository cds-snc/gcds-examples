<script setup>
const { id, name, label, placeholder, required, hint, errorMessage } = defineProps([
  'id',
  'name',
  'label',
  'placeholder',
  'required',
  'hint',
  'errorMessage'
])
const model = defineModel()
</script>
<template>
  <gcds-input
    v-model="model"
    :error-message="errorMessage"
    :hint="hint"
    :input-id="id"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :required="required"
  ></gcds-input>
</template>
