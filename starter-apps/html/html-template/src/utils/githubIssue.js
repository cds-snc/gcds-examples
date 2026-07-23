const GITHUB_ISSUE_URL = 'https://github.com/cds-snc/gcds-components/issues/new'

export const initialReportBugFormData = {
  version: '',
  title: '',
  currentBehavior: '',
  expectedBehavior: '',
  systemInfo: '',
  stepsToReproduce: '',
  codeReproductionUrl: '',
  additionalInfo: ''
}

export function buildGithubIssueUrl(formData) {
  const params = new URLSearchParams({
    template: 'bug_report.yml',
    title: formData.title,
    package_version: formData.version,
    current_behavior: formData.currentBehavior,
    expected_behavior: formData.expectedBehavior,
    sys_info: formData.systemInfo,
    steps_to_reproduce: formData.stepsToReproduce,
    code_url: formData.codeReproductionUrl,
    more_info: formData.additionalInfo
  })

  return `${GITHUB_ISSUE_URL}?${params.toString()}`
}
