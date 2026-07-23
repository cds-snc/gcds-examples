import { expect, test } from '@playwright/test'

import { resources } from '../src/i18n/resources.js'

async function expectBreadcrumbLinks(page, homeHref, aboutHref) {
  await expect(page.locator(`gcds-breadcrumbs a[href="${homeHref}"]`)).toHaveCount(1)
  await expect(page.locator(`gcds-breadcrumbs a[href="${aboutHref}"]`)).toHaveCount(1)
}

async function getNormalizedBreadcrumbs(page) {
  const breadcrumbs = page.locator('gcds-breadcrumbs gcds-breadcrumbs-item')
  await expect(breadcrumbs.first()).toBeVisible()

  const texts = await breadcrumbs.allTextContents()
  return texts.map((text) => text.trim()).filter(Boolean)
}

test('shows localized breadcrumbs for about topic route', async ({ page }) => {
  await page.goto('/en/about/topic')

  await expectBreadcrumbLinks(page, '/en/', '/en/about')
  const enBreadcrumbs = await getNormalizedBreadcrumbs(page)
  expect(enBreadcrumbs).toEqual(
    expect.arrayContaining([resources.en.translation.home, resources.en.translation.about])
  )

  await expect(page.locator('gcds-header')).toHaveAttribute('lang-href', '/fr/a-propos/sujet')
  await page.locator('gcds-header a[href="/fr/a-propos/sujet"]').first().click()

  await expect(page).toHaveURL(/\/fr\/a-propos\/sujet\/?$/)
  await expectBreadcrumbLinks(page, '/fr/', '/fr/a-propos')
  const frBreadcrumbs = await getNormalizedBreadcrumbs(page)
  expect(frBreadcrumbs).toEqual(
    expect.arrayContaining([resources.fr.translation.home, resources.fr.translation.about])
  )
})
