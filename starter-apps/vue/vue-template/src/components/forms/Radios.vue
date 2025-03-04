<script setup>
const { id, name, options, required, hint, errorMessage, legend, validateOn, validator } = defineProps([
  'id',
  'name',
  'options',
  'required',
  'hint',
  'errorMessage',
  'legend',
  'validateOn',
  'validator'
])
const model = defineModel()
</script>
<template>
  <gcds-radios
    v-model="model"
    :error-message="errorMessage"
    :options="options"
    :hint="hint"
    :id="id"
    :name="name"
    :legend="legend"
    :required="required"
    :validate-on="validateOn"
    :validator="validator"
  ></gcds-radios>
</template>
