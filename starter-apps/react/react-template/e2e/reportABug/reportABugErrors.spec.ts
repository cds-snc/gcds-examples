import { expect, test } from '@playwright/test'

test('shows validation errors when required fields are missing', async ({ page }) => {
  await page.goto('/en/report-a-bug')
  await page.getByRole('button', { name: 'Submit' }).click()

  await expect(page.locator('gcds-error-message').first()).toHaveText(
    'Enter information to continue.'
  )
})
