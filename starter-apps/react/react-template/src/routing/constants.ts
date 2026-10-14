export const EN = 'en'
export const FR = 'fr'

export const locales = [EN, FR] as const
export type AppLocale = (typeof locales)[number]

export const defaultLocale: AppLocale = EN

// TODO: Add new route keys here when adding pages to the starter.
// Keep this list in sync with localizedSegments and app routes.
export const routeKeys = ['home', 'about', 'aboutTopic', 'reportABug'] as const
export type RouteKey = (typeof routeKeys)[number]

// TODO: Localize each route segment for every locale.
// Keep EN/FR slugs aligned so language switching can map pages reliably.
export const localizedSegments: Record<RouteKey, Record<AppLocale, string>> = {
  home: {
    en: '',
    fr: ''
  },
  about: {
    en: 'about',
    fr: 'a-propos'
  },
  aboutTopic: {
    en: 'about/topic',
    fr: 'a-propos/sujet'
  },
  reportABug: {
    en: 'report-a-bug',
    fr: 'signaler-un-bug'
  }
}
