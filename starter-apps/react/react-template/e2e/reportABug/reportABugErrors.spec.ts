import { expect, test } from '@playwright/test'

test('shows validation errors when required fields are missing', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.click('text=Submit')

  await expect(page.locator('gcds-error-message').first()).toHaveText(
    'Enter information to continue.'
  )
})
