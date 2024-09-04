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

test('shows about1 page breadcrumbs', async ({ page }) => {
  await page.goto('/en/about/about1')

  await expect(
    page.locator('gcds-breadcrumbs').locator('router-link gcds-breadcrumbs-item')
  ).toHaveText([en.home, en.about, en.about1])

  await page.click('text=Français')

  await expect(
    page.locator('gcds-breadcrumbs').locator('router-link gcds-breadcrumbs-item')
  ).toHaveText([fr.home, fr.about, fr.about1])
})

test('visit bug report page', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await expect(page.locator('gcds-heading')).toHaveText(en.reportABugPage.heading)
  await expect(page.locator('gcds-text').first()).toHaveText(en.reportABugPage.intro)
})

test('report bug form', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.fill('text=Title + input', 'title')
  await page.fill('text=Current Behavior + input', 'current behavior')
  await page.fill('text=Expected Behavior + input', 'expected behavior')
  await page.fill('text=Steps to Reproduce + input', 'steps to reproduce')
  await page.fill('text=Code Reproduction URL + input', 'code reproduction url')
  await page.fill('text=System Info + input', 'system info')
  await page.fill('text=Additional Information + input', 'additional information')
  await page.click('text=Submit')
  await expect(page.locator('gcds-heading')).toHaveText(en.reportABugPage.heading)
  await expect(page.locator('gcds-text').first()).toHaveText(en.reportABugPage.form.confirmation)
})

test('report bug form missing fields', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.click('text=Submit')
  await expect(page.locator('gcds-error-message').first()).toHaveText(
    'Enter information to continue.'
  )
})
