<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="version">Version Number:</label>
        <input type="text" id="version" v-model="formData.version" required />
      </div>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="formData.title" required />
      </div>
      <div>
        <label for="currentBehavior">Current Behavior:</label>
        <textarea id="currentBehavior" v-model="formData.currentBehavior" required></textarea>
      </div>
      <div>
        <label for="expectedBehavior">Expected Behavior:</label>
        <textarea id="expectedBehavior" v-model="formData.expectedBehavior" required></textarea>
      </div>
      <div>
        <label for="systemInfo">System Info:</label>
        <textarea id="systemInfo" v-model="formData.systemInfo" required></textarea>
      </div>
      <div>
        <label for="stepsToReproduce">Steps to Reproduce:</label>
        <textarea id="stepsToReproduce" v-model="formData.stepsToReproduce" required></textarea>
      </div>
      <div>
        <label for="codeReproductionUrl">Code Reproduction URL:</label>
        <input type="url" id="codeReproductionUrl" v-model="formData.codeReproductionUrl" required />
      </div>
      <div>
        <label for="additionalInfo">Additional Information:</label>
        <textarea id="additionalInfo" v-model="formData.additionalInfo"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

    <div v-if="submitted">
      <h2>Confirmation</h2>
      <p><strong>Version Number:</strong> {{ formData.version }}</p>
      <p><strong>Title:</strong> {{ formData.title }}</p>
      <p><strong>Current Behavior:</strong> {{ formData.currentBehavior }}</p>
      <p><strong>Expected Behavior:</strong> {{ formData.expectedBehavior }}</p>
      <p><strong>System Info:</strong> {{ formData.systemInfo }}</p>
      <p><strong>Steps to Reproduce:</strong> {{ formData.stepsToReproduce }}</p>
      <p><strong>Code Reproduction URL:</strong> {{ formData.codeReproductionUrl }}</p>
      <p><strong>Additional Information:</strong> {{ formData.additionalInfo }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();
const formData = ref({ ...formStore.formData });
const submitted = ref(formStore.submitted);

function handleSubmit() {
  formStore.submitForm(formData.value);
  submitted.value = formStore.submitted;
}
</script>