import { describe, expect, test } from 'vitest'

import { buildGithubIssueUrl } from './githubIssue.js'

describe('buildGithubIssueUrl', () => {
  test('builds a prefilled gcds-components bug URL', () => {
    const url = new URL(
      buildGithubIssueUrl({
        version: '@gcds-core/components@1.3.1',
        title: 'bug: sample',
        currentBehavior: 'current',
        expectedBehavior: 'expected',
        systemInfo: 'system',
        stepsToReproduce: 'steps',
        codeReproductionUrl: 'https://example.com/repro',
        additionalInfo: 'more'
      })
    )

    expect(url.origin + url.pathname).toBe('https://github.com/cds-snc/gcds-components/issues/new')
    expect(url.searchParams.get('template')).toBe('bug_report.yml')
    expect(url.searchParams.get('package_version')).toBe('@gcds-core/components@1.3.1')
    expect(url.searchParams.get('code_url')).toBe('https://example.com/repro')
  })
})
