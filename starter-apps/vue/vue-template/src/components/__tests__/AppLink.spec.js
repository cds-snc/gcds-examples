import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppLink from '../AppLink.vue'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useLink: vi.fn(() => ({ navigate: vi.fn() }))
  }
})

describe('AppLink', () => {
  it('renders gcds-link by default', () => {
    const wrapper = shallowMount(AppLink, {
      props: { to: '/test' }
    })
    expect(wrapper.find('gcds-link').exists()).toBe(true)
  })

  it('renders gcds-nav-link when component prop is nav', () => {
    const wrapper = shallowMount(AppLink, {
      props: { to: '/test', component: 'nav' }
    })
    expect(wrapper.find('gcds-nav-link').exists()).toBe(true)
  })

  it('renders gcds-breadcrumbs-item when component prop is breadcrumb', () => {
    const wrapper = shallowMount(AppLink, {
      props: { to: '/test', component: 'breadcrumb' }
    })
    expect(wrapper.find('gcds-breadcrumbs-item').exists()).toBe(true)
  })
})
