export type ReportBugFormData = {
  version: string
  title: string
  currentBehavior: string
  expectedBehavior: string
  systemInfo: string
  stepsToReproduce: string
  codeReproductionUrl: string
  additionalInfo: string
}

export const initialReportBugFormData: ReportBugFormData = {
  version: '',
  title: '',
  currentBehavior: '',
  expectedBehavior: '',
  systemInfo: '',
  stepsToReproduce: '',
  codeReproductionUrl: '',
  additionalInfo: ''
}
