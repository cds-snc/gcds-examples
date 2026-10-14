import { expect, test } from '@playwright/test'

import { resources } from '../../src/i18n/resources'

test('submits the report bug form', async ({ page }) => {
  await page.goto('/en/report-a-bug')

  await page.getByLabel('GC Design System Components Package and Version').fill('1.0.0')
  await page.getByLabel('Title').fill('title')
  await page.getByLabel('Current Behavior').fill('current behavior')
  await page.getByLabel('Expected Behavior').fill('expected behavior')
  await page.getByLabel('Steps to Reproduce').fill('steps to reproduce')
  await page.getByLabel('Code Reproduction URL').fill('https://example.com/repro')
  await page.getByLabel('System Info').fill('system info')
  await page.getByLabel('Additional Information').fill('additional information')
  await page.getByRole('button', { name: 'Submit' }).click()

  await expect(page.locator('gcds-heading').nth(0)).toHaveText(
    resources.en.translation.reportABugPage.heading
  )
  await expect(page.locator('gcds-heading').nth(1)).toHaveText(
    resources.en.translation.reportABugPage.form.confirmation
  )
})
