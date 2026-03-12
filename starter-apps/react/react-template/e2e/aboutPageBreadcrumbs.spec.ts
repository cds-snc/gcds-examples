import { expect, test } from '@playwright/test'

import { resources } from '../src/i18n/resources'

test('shows localized breadcrumbs for about topic route', async ({ page }) => {
  await page.goto('/en/about/topic')

  const enBreadcrumbs = await page
    .locator('gcds-breadcrumbs gcds-breadcrumbs-item')
    .allTextContents()
  expect(enBreadcrumbs).toEqual(
    expect.arrayContaining([resources.en.translation.home, resources.en.translation.about])
  )

  await page.goto('/fr/a-propos/sujet')

  const frBreadcrumbs = await page
    .locator('gcds-breadcrumbs gcds-breadcrumbs-item')
    .allTextContents()
  expect(frBreadcrumbs).toEqual(
    expect.arrayContaining([resources.fr.translation.home, resources.fr.translation.about])
  )
})
