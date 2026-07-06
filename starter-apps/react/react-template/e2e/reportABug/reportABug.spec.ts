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

  await expect(page.locator('gcds-header')).toHaveAttribute('lang-href', '/fr/signaler-un-bug')
  await page.locator('gcds-header a[href="/fr/signaler-un-bug"]').first().click()

  await expect(page).toHaveURL(/\/fr\/signaler-un-bug\/?$/)
  await expect(page.locator('gcds-heading').first()).toHaveText(
    resources.fr.translation.reportABugPage.heading
  )
})
