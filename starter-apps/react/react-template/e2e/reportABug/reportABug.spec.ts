import { expect, test } from '@playwright/test'

import { resources } from '../../src/i18n/resources'

test('visits report bug page', async ({ page }) => {
  await page.goto('/en/report-a-bug')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.en.translation.reportABugPage.heading
  )
  await expect(page.locator('gcds-text').first()).toHaveText(
    resources.en.translation.reportABugPage.intro
  )
})

test('switches report bug page to french', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.click('text=Français')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.fr.translation.reportABugPage.heading
  )
})
