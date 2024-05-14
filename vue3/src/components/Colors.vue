<script setup>
    const selectedColor = defineModel()

    const colors = {
        red: { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
        blue: { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
        yellow: { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
        green: { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
    };
    
</script>

<template>
    <div>
        <label for="colorhtml">Select a color (HTML):</label>
        <select id="colorhtml" v-model="selectedColor">
            <option value="red">red | rouge</option>
            <option value="blue">blue | bleu</option>
            <option value="yellow">yellow | jaune</option>
            <option value="green">green | vert</option>
        </select>
        <div>
        <label for="color">Select a color:</label>
        <select v-model="selectedColor" id="color">
            <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
        </select>
        </div>
        <gcds-select
            select-id="color-selector"
            label="Select a color (v-model)"
            v-model="selectedColor">
            <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
        </gcds-select>
        <!--  Some differences visually when selected is not set on any of the options. We can replicate this by setting the default-value to a space -->
        <gcds-select
            select-id="color-selector"
            label="Select a color (v-model w/default value)"
            default-value=" "
            v-model="selectedColor">
            <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
        </gcds-select>
        <p>You selected: {{ selectedColor }} </p>
    </div>
</template>

