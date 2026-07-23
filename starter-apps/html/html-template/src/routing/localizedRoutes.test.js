import { describe, expect, test } from 'vitest'

import { getLocalizedPath, getPathInLocale, getRouteContext } from './localizedRoutes.js'

describe('localized route helpers', () => {
  test('builds localized paths', () => {
    expect(getLocalizedPath('home', 'en')).toBe('/en/')
    expect(getLocalizedPath('aboutTopic', 'fr')).toBe('/fr/a-propos/sujet')
  })

  test('detects route context for localized URLs', () => {
    expect(getRouteContext('/en/about/topic')).toEqual({
      locale: 'en',
      routeKey: 'aboutTopic'
    })
    expect(getRouteContext('/fr/signaler-un-bug')).toEqual({
      locale: 'fr',
      routeKey: 'reportABug'
    })
  })

  test('maps the current route into the target locale', () => {
    expect(getPathInLocale('/en/report-a-bug', 'fr')).toBe('/fr/signaler-un-bug')
    expect(getPathInLocale('/fr/a-propos/sujet', 'en')).toBe('/en/about/topic')
  })
})
