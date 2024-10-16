<script setup>
const { id, name, label, required, hint, errorMessage } = defineProps([
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
  <gcds-textarea
    v-model="model"
    :error-message="errorMessage"
    :hint="hint"
    :label="label"
    :name="name"
    :required="required"
    :textarea-id="id"
  ></gcds-textarea>
</template>
