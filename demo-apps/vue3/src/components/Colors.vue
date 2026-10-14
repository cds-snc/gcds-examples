<script setup>
const selectedColor = defineModel()

const colors = {
  red: { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
  blue: { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
  yellow: { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
  green: { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
};

const formatLabel = (color) => `${color.descriptionEnglish} | ${color.descriptionFrench}`;
</script>

<template>
  <section>
    <label for="colorhtml">Select a color (HTML):</label>
    <select id="colorhtml" v-model="selectedColor">
      <option value="red">red | rouge</option>
      <option value="blue">blue | bleu</option>
      <option value="yellow">yellow | jaune</option>
      <option value="green">green | vert</option>
    </select>
    <div>
      <label for="color">Select a color:</label>
      <select id="color" v-model="selectedColor">
        <option v-for="(color, index) in colors" :key="color.id" :value="index">
          {{ formatLabel(color) }}
        </option>
      </select>
    </div>
    <gcds-select
      select-id="color-selector"
      label="Select a color (v-model)"
      v-model="selectedColor"
    >
      <option v-for="(color, index) in colors" :key="color.id" :value="index">
        {{ formatLabel(color) }}
      </option>
    </gcds-select>
    <!--  Some differences visually when selected is not set on any of the options. We can replicate this by setting the default-value -->
    <gcds-select
      select-id="color-selector-with-default"
      label="Select a color (v-model w/default value)"
      default-value="No color selected"
      v-model="selectedColor"
    >
      <option v-for="(color, index) in colors" :key="color.id" :value="index">
        {{ formatLabel(color) }}
      </option>
    </gcds-select>
    <gcds-text>You selected: {{ selectedColor }} </gcds-text>
  </section>
</template>
