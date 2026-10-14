import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('home page has no critical or serious accessibility issues', async ({ page }) => {
  await page.goto('/en/')

  const results = await new AxeBuilder({ page }).analyze()
  const impactfulViolations = results.violations.filter((violation) =>
    ['critical', 'serious'].includes(violation.impact ?? '')
  )

  expect(impactfulViolations).toEqual([])
})

test('report a bug page has no critical or serious accessibility issues', async ({ page }) => {
  await page.goto('/en/report-a-bug')

  const results = await new AxeBuilder({ page }).analyze()
  const impactfulViolations = results.violations.filter((violation) =>
    ['critical', 'serious'].includes(violation.impact ?? '')
  )

  expect(impactfulViolations).toEqual([])
})
