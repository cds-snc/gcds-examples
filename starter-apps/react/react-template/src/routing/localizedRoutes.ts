import {
  defaultLocale,
  locales,
  localizedSegments,
  routeKeys,
  type AppLocale,
  type RouteKey
} from './constants'

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function getPathParts(pathname: string): string[] {
  return stripTrailingSlash(pathname).split('/').filter(Boolean)
}

export function isAppLocale(value: string | undefined): value is AppLocale {
  return !!value && locales.includes(value as AppLocale)
}

export function getLocalizedPath(routeKey: RouteKey, locale: AppLocale = defaultLocale): string {
  const segment = localizedSegments[routeKey][locale]

  return segment ? `/${locale}/${segment}` : `/${locale}/`
}

function findRouteKeyBySegment(segment: string, locale: AppLocale): RouteKey | null {
  if (!segment) {
    return 'home'
  }

  const localeMatch = routeKeys.find((key) => localizedSegments[key][locale] === segment)
  if (localeMatch) {
    return localeMatch
  }

  const anyLocaleMatch = routeKeys.find((key) =>
    locales.some((candidateLocale) => localizedSegments[key][candidateLocale] === segment)
  )

  return anyLocaleMatch ?? null
}

export function getRouteContext(pathname: string): {
  locale: AppLocale | null
  routeKey: RouteKey | null
} {
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

export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  return getRouteContext(pathname).routeKey
}

export function getPathInLocale(pathname: string, targetLocale: AppLocale): string {
  const { routeKey } = getRouteContext(pathname)

  if (!routeKey) {
    return getLocalizedPath('home', targetLocale)
  }

  return getLocalizedPath(routeKey, targetLocale)
}
