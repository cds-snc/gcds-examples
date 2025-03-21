<script setup>
 const { id, name, options, required, hint, legend, validateOn, validator } = defineProps([
   'id',
   'name',
   'options',
   'required',
   'hint',
   'legend',
   'validateOn',
   'validator'
 ])
 const model = defineModel()
 </script>
 <template>
   <gcds-checkboxes
     v-model="model"
     :options="options"
     :hint="hint"
     :id="id"
     :name="name"
     :legend="legend"
     :required="required"
     :validate-on="validateOn"
     :validator="validator"
   ></gcds-checkboxes>
 </template>