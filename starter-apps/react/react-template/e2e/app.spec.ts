import { expect, test, type Page } from '@playwright/test'

import { resources } from '../src/i18n/resources'

async function clickLanguageToggle(page: Page, expectedLangHref: string): Promise<void> {
  await expect(page.locator('gcds-header')).toHaveAttribute('lang-href', expectedLangHref)

  const toggleLink = page.locator(`gcds-header a[href="${expectedLangHref}"]`).first()
  await expect(toggleLink).toBeVisible()
  await toggleLink.click()
}

test('visits the app root url', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.en.translation.homePage.heading
  )
  await expect(page.locator('gcds-text').first()).toHaveText(
    resources.en.translation.homePage.paragraph
  )
})

test('switches to french', async ({ page }) => {
  await page.goto('/')
  await clickLanguageToggle(page, '/fr/')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.fr.translation.homePage.heading
  )
})

test('switches to english', async ({ page }) => {
  await page.goto('/fr/')
  await clickLanguageToggle(page, '/en/')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.en.translation.homePage.heading
  )
})
