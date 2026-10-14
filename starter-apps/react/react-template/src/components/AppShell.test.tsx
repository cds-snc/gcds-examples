import type { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import AppShell from '@/components/AppShell'

vi.mock('@gcds-core/components-react', () => {
  return {
    GcdsHeader: ({ children, langHref }: { children: ReactNode; langHref: string }) => (
      <div data-lang-href={langHref} data-testid="header">
        {children}
      </div>
    ),
    GcdsSearch: ({ slot }: { slot?: string }) => <div data-slot={slot} />,
    GcdsTopNav: ({ children }: { children: ReactNode }) => <nav>{children}</nav>,
    GcdsNavLink: ({ children, href }: { children: ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
    GcdsBreadcrumbs: ({ children }: { children: ReactNode }) => <nav>{children}</nav>,
    GcdsBreadcrumbsItem: ({ children, href }: { children: ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
    GcdsLink: ({ children, href }: { children: ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
    GcdsContainer: ({ children }: { children: ReactNode }) => <main>{children}</main>,
    GcdsFooter: () => <footer />
  }
})

describe('AppShell', () => {
  it('builds language toggle href based on current path', () => {
    render(
      <MemoryRouter initialEntries={['/en/about/topic']}>
        <Routes>
          <Route element={<AppShell locale="en" />} path="/:locale">
            <Route element={<div>about topic</div>} path="about/topic" />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByTestId('header')).toHaveAttribute('data-lang-href', '/fr/a-propos/sujet')
  })
})
