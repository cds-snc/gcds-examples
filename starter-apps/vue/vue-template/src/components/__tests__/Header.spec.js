import { describe, expect, it, vi } from 'vitest'
import i18n from '@/i18n/index.js'
import Header from '../Header.vue'
import { shallowMount } from '@vue/test-utils'
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs.vue'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRouter: () => ({
      currentRoute: {
        value: { name: 'about1' }
      }
    }),
    RouterLink: {
      template: '<a><slot></slot></a>'
    },
    createRouter: vi.fn(() => ({
      beforeEach: vi.fn()
    }))
  }
})

const mountOptions = {
  global: {
    plugins: [i18n.i18n]
  }
}

describe('Header', () => {
  it('has breadcrumbs', () => {
    const wrapper = shallowMount(Header, mountOptions)
    const headerBreadcrumbs = wrapper.findComponent(HeaderBreadcrumbs)
    expect(headerBreadcrumbs.exists()).toBe(true)
  })

  it('has navlinks', () => {
    const wrapper = shallowMount(Header, mountOptions)
    expect(wrapper.find('gcds-nav-link[href="/en/"]').exists()).toBe(true)

    const headerBreadcrumbs = wrapper.findComponent(HeaderBreadcrumbs)
    expect(headerBreadcrumbs.exists()).toBe(true)
  })

  it('has a language switcher', () => {
    const wrapper = shallowMount(Header, mountOptions)
    expect(wrapper.find('div[slot=toggle]').exists()).toBe(true)
  })
})
