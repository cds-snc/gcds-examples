import { expect, test } from '@playwright/test'
import { en } from '@/i18n/en.js'
import { fr } from '@/i18n/fr.js'

test('visit bug report page', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await expect(page.locator('gcds-heading').first()).toHaveText(en.reportABugPage.heading)
  await expect(page.locator('gcds-text').first()).toHaveText(en.reportABugPage.intro)
})

test('switches to french', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.click('text=Français')
  await expect(page.locator('gcds-heading').first()).toHaveText(fr.reportABugPage.heading)
})
