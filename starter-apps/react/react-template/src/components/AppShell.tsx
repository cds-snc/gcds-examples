import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  GcdsBreadcrumbs,
  GcdsContainer,
  GcdsFooter,
  GcdsHeader,
  GcdsNavLink,
  GcdsSearch,
  GcdsTopNav
} from '@gcds-core/components-react'

import AppLink from '@/components/AppLink'
import { EN, FR, type AppLocale, type RouteKey } from '@/routing/constants'
import { getLocalizedPath, getPathInLocale, getRouteKeyFromPath } from '@/routing/localizedRoutes'

type AppShellProps = {
  locale: AppLocale
}

function getOtherLocale(locale: AppLocale): AppLocale {
  return locale === EN ? FR : EN
}

export default function AppShell({ locale }: AppShellProps) {
  const { t } = useTranslation()
  const location = useLocation()

  const currentRouteKey = getRouteKeyFromPath(location.pathname) ?? 'home'
  const otherLangPath = getPathInLocale(location.pathname, getOtherLocale(locale))

  const navElements: Array<{ routeKey: RouteKey; label: string }> = [
    {
      routeKey: 'about',
      label: t('about')
    },
    {
      routeKey: 'reportABug',
      label: t('reportABug')
    }
  ]

  return (
    <>
      <GcdsHeader langHref={otherLangPath} skipToHref="#main-content">
        <GcdsSearch slot="search" />

        <GcdsTopNav alignment="end" label={t('topNavLabel')} slot="menu">
          <GcdsNavLink
            current={currentRouteKey === 'home'}
            href={getLocalizedPath('home', locale)}
            slot="home"
          >
            {t('homeNavLink')}
          </GcdsNavLink>
          {navElements.map((navElement) => (
            <AppLink
              current={currentRouteKey === navElement.routeKey}
              key={navElement.routeKey}
              to={getLocalizedPath(navElement.routeKey, locale)}
              variant="nav"
            >
              {navElement.label}
            </AppLink>
          ))}
        </GcdsTopNav>

        <GcdsBreadcrumbs slot="breadcrumb">
          {currentRouteKey !== 'home' ? (
            <AppLink to={getLocalizedPath('home', locale)} variant="breadcrumb">
              {t('home')}
            </AppLink>
          ) : null}
          {currentRouteKey === 'aboutTopic' ? (
            <AppLink to={getLocalizedPath('about', locale)} variant="breadcrumb">
              {t('about')}
            </AppLink>
          ) : null}
        </GcdsBreadcrumbs>
      </GcdsHeader>

      <GcdsContainer id="main-content" layout="page" size="xl" tag="main">
        <Outlet />
      </GcdsContainer>

      <GcdsFooter display="full" />
    </>
  )
}
