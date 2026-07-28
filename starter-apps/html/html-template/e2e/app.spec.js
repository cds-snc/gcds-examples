import { expect, test } from '@playwright/test'

async function clickLanguageToggle(page, expectedLangHref) {
  await expect(page.locator('gcds-header')).toHaveAttribute('lang-href', expectedLangHref)

  const toggleLink = page.locator(`gcds-header a[href="${expectedLangHref}"]`).first()
  await expect(toggleLink).toBeVisible()
  await toggleLink.click()
}

test('visits the app root url', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('gcds-heading').first()).toHaveText('Home')
  await expect(page.locator('gcds-text').first()).toHaveText(
    'Welcome to the HTML Starter that leverages GC Design System components!'
  )
})

test('switches to french', async ({ page }) => {
  await page.goto('/')
  await clickLanguageToggle(page, '/fr/')

  await expect(page.locator('gcds-heading').first()).toHaveText('Accueil')
})

test('switches to english', async ({ page }) => {
  await page.goto('/fr/')
  await clickLanguageToggle(page, '/en/')

  await expect(page.locator('gcds-heading').first()).toHaveText('Home')
})
