import { describe, expect, it } from 'vitest'

import { getLocalizedPath, getPathInLocale, getRouteContext } from '@/routing/localizedRoutes'

describe('localized route helpers', () => {
  it('returns a localized path for route keys', () => {
    expect(getLocalizedPath('home', 'en')).toBe('/en/')
    expect(getLocalizedPath('reportABug', 'fr')).toBe('/fr/signaler-un-bug')
  })

  it('returns route context from pathname', () => {
    expect(getRouteContext('/en/about/topic')).toEqual({
      locale: 'en',
      routeKey: 'aboutTopic'
    })

    expect(getRouteContext('/fr/a-propos/sujet')).toEqual({
      locale: 'fr',
      routeKey: 'aboutTopic'
    })
  })

  it('switches the same route to another locale', () => {
    expect(getPathInLocale('/en/about/topic', 'fr')).toBe('/fr/a-propos/sujet')
    expect(getPathInLocale('/fr/signaler-un-bug', 'en')).toBe('/en/report-a-bug')
  })
})
