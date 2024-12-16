import { expect, test } from '@playwright/test'
import { en } from '@/i18n/en.js'
import { fr } from '@/i18n/fr.js'

test('shows aboutTopic page breadcrumbs', async ({ page }) => {
  await page.goto('/en/about/topic')

  await expect(
    page.locator('gcds-breadcrumbs').locator('router-link gcds-breadcrumbs-item')
  ).toHaveText([en.home, en.about])

  await page.click('text=Français')

  await expect(
    page.locator('gcds-breadcrumbs').locator('router-link gcds-breadcrumbs-item')
  ).toHaveText([fr.home, fr.about])
})
