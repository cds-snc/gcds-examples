import { defaultLocale, locales, localizedSegments, routeKeys } from './constants.js'

function stripTrailingSlash(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function getPathParts(pathname) {
  return stripTrailingSlash(pathname).split('/').filter(Boolean)
}

export function isAppLocale(value) {
  return !!value && locales.includes(value)
}

export function getLocalizedPath(routeKey, locale = defaultLocale) {
  const segment = localizedSegments[routeKey][locale]

  return segment ? `/${locale}/${segment}` : `/${locale}/`
}

function findRouteKeyBySegment(segment, locale) {
  if (!segment) {
    return 'home'
  }

  const localeMatch = routeKeys.find((key) => localizedSegments[key][locale] === segment)
  if (localeMatch) {
    return localeMatch
  }

  // TODO: If you support localized aliases or legacy URLs, extend matching rules here.
  // Keep a single route key result so locale switching always maps to one page identity.
  const anyLocaleMatch = routeKeys.find((key) =>
    locales.some((candidateLocale) => localizedSegments[key][candidateLocale] === segment)
  )

  return anyLocaleMatch ?? null
}

export function getRouteContext(pathname) {
  const parts = getPathParts(pathname)
  const locale = parts[0]

  if (!isAppLocale(locale)) {
    return {
      locale: null,
      routeKey: null
    }
  }

  const segment = parts.slice(1).join('/')

  return {
    locale,
    routeKey: findRouteKeyBySegment(segment, locale)
  }
}

export function getRouteKeyFromPath(pathname) {
  return getRouteContext(pathname).routeKey
}

export function getPathInLocale(pathname, targetLocale) {
  const { routeKey } = getRouteContext(pathname)

  if (!routeKey) {
    return getLocalizedPath('home', targetLocale)
  }

  return getLocalizedPath(routeKey, targetLocale)
}
