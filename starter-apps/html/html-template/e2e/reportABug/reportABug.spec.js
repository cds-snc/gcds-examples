import { expect, test } from '@playwright/test'

test('visits report bug page', async ({ page }) => {
  await page.goto('/en/report-a-bug')

  await expect(page.locator('gcds-heading').first()).toHaveText('Report a Bug')
  await expect(page.locator('gcds-text').first()).toHaveText(
    'Create a report to help us improve GC Design System.'
  )
})

test('switches report bug page to french', async ({ page }) => {
  await page.goto('/en/report-a-bug')

  await expect(page.locator('gcds-header')).toHaveAttribute('lang-href', '/fr/signaler-un-bug')
  await page.locator('gcds-header a[href="/fr/signaler-un-bug"]').first().click()

  await expect(page).toHaveURL(/\/fr\/signaler-un-bug\/?$/)
  await expect(page.locator('gcds-heading').first()).toHaveText('Signaler un bogue')
})
