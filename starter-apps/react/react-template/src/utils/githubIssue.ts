import type { ReportBugFormData } from '@/types/report'

export function buildGithubIssueUrl(formData: ReportBugFormData): string {
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

  return `https://github.com/cds-snc/gcds-components/issues/new?${params.toString()}`
}
