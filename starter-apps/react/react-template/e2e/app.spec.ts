import { expect, test } from '@playwright/test'

import { resources } from '../src/i18n/resources'

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
  await page.click('text=Français')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.fr.translation.homePage.heading
  )
})

test('switches to english', async ({ page }) => {
  await page.goto('/fr/')
  await page.click('text=English')

  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.en.translation.homePage.heading
  )
})
