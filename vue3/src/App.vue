<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import ColorsVue from './components/Colors.vue';

import { ref, defineModel } from 'vue';

const hairColors = ref([
  { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
  { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
  { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
  { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
]);

const selectedColor = defineModel('selectedColor');
</script>

<template>
  <ColorsVue />
  <Header />
  <HelloWorld msg="Hello, World!" />

  <hr />

  <div>Selected colour: {{ selectedColor }}</div>

  <hr />
  <h3>Using native select elements</h3>

  <div>
    <label>Native select (events)</label>
    <select
      @change="selectedColor = $event.target.value"
      :value="selectedColor"
    >
      <option
        v-for="color in hairColors"
        :key="color.id"
        :text="color.descriptionEnglish"
        :value="color.id"
      ></option>
    </select>
  </div>
  <div>
    <label>Native select (v-model)</label>
    <select v-model="selectedColor">
      <option
        v-for="color in hairColors"
        :key="color.id"
        :text="color.descriptionEnglish"
        :value="color.id"
      ></option>
    </select>
  </div>

  <hr />
  <h3>Using GCDS</h3>
  <div>
    <gcds-select
      select-id="color-selector"
      label="Select a colour (events)"
      @change="
        console.log($event.target);
        selectedColor = $event.target.value;
      "
      :value="selectedColor"
    >
      <option v-for="color in hairColors" :value="color.id" :key="color.id">
        {{ color.descriptionEnglish }}
      </option>
    </gcds-select>
  </div>

  <div>
    <gcds-select
      select-id="color-selector"
      label="Select a colour (v-model)"
      v-model="selectedColor"
    >
      <option v-for="color in hairColors" :value="color.id" :key="color.id">
        {{ color.descriptionEnglish }}
      </option>
    </gcds-select>
  </div>
</template>

<style scoped></style>
