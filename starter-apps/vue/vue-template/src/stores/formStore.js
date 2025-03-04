import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      gender: '',
      version: '',
      title: '',
      currentBehavior: '',
      expectedBehavior: '',
      systemInfo: '',
      stepsToReproduce: '',
      codeReproductionUrl: '',
      additionalInfo: ''
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
