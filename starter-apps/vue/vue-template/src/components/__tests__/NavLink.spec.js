import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NavLink from '../NavLink.vue'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useLink: vi.fn(() => ({ navigate: vi.fn(), href: '/test' }))
  }
})

describe('NavLink', () => {
  it('renders gcds-nav-link with correct href', () => {
    const wrapper = shallowMount(NavLink, {
      props: { to: '/test' }
    })
    expect(wrapper.find('gcds-nav-link').attributes('href')).toBe('/test')
  })

  it('applies inactiveClass when route does not match', () => {
    const wrapper = shallowMount(NavLink, {
      props: { to: '/test', inactiveClass: 'inactive' },
      global: {
        mocks: {
          $route: { path: '/different' }
        }
      }
    })
    expect(wrapper.find('gcds-nav-link').classes()).toContain('inactive')
  })

  it('sets external attribute correctly', () => {
    const wrapper = shallowMount(NavLink, {
      props: { to: '/test', isExternal: true }
    })
    expect(wrapper.find('gcds-nav-link').attributes('external')).toBe('true')
  })
})
