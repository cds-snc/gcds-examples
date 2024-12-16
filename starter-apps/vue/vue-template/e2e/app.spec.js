import { expect, test } from '@playwright/test'
import { en } from '../src/i18n/en.js'
import { fr } from '../src/i18n/fr.js'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('gcds-heading')).toHaveText(en.homePage.heading)

  await expect(page.locator('gcds-text').first()).toHaveText(en.homePage.paragraph)
})

test('switches to french', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Français')
  await expect(page.locator('gcds-heading')).toHaveText(fr.homePage.heading)
})

test('switches to english', async ({ page }) => {
  await page.goto('/fr')
  await page.click('text=English')
  await expect(page.locator('gcds-heading')).toHaveText(en.homePage.heading)
})
