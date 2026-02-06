import { expect, test } from '@playwright/test'
import { en } from '@/i18n/en.js'

test('report bug form', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.getByLabel('GC Design System Components Package and Version').fill('1.0.0')
  await page.getByLabel('Title').fill('title')
  await page.getByLabel('Current Behavior').fill('current behavior')
  await page.getByLabel('Expected Behavior').fill('expected behavior')
  await page.getByLabel('Steps to Reproduce').fill('steps to reproduce')
  await page.getByLabel('Code Reproduction URL').fill('http://code-reproduction-url.com')
  await page.getByLabel('System Info').fill('system info')
  await page.getByLabel('Additional Information').fill('additional information')
  await page.click('text=Submit')
  await expect(page.locator('gcds-heading').locator('nth=0')).toHaveText(en.reportABugPage.heading)
  await expect(page.locator('gcds-heading').locator('nth=1')).toHaveText(
    en.reportABugPage.form.confirmation
  )
})
