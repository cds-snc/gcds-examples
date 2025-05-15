import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      version: '',
      title: '',
      currentBehavior: '',
      expectedBehavior: '',
      systemInfo: '',
      stepsToReproduce: '',
      codeReproductionUrl: '',
      additionalInfo: '',
      check: [],
      radios: ""
    },
    submitted: false
  }),
  actions: {
    submitForm(data) {
      this.formData = data
      this.submitted = true
    }
  }
})
