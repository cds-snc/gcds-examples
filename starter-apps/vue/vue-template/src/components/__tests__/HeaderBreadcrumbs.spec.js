import { describe, expect, it, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import HeaderBreadcrumbs from '../HeaderBreadcrumbs.vue'
import i18n from '@/i18n/index.js'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      currentRoute: {
        value: { name: 'home' }
      }
    })),
    useLink: vi.fn(() => ({ navigate: vi.fn() }))
  }
})
const mountOptions = {
  global: {
    plugins: [i18n.i18n]
  }
}
describe('HeaderBreadcrumbs', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(HeaderBreadcrumbs, mountOptions)
    expect(wrapper.exists()).toBe(true)
  })

  // TODO: These are currently hard-coded and should be changed
  it('displays the correct breadcrumb items', () => {
    const wrapper = mount(HeaderBreadcrumbs, {
      props: {
        currentRoute: 'about/topic'
      },
      ...mountOptions
    })
    const items = wrapper.findAll('gcds-breadcrumbs-item')

    expect(items.length).toBe(2)
    expect(items[0].text()).toBe('Home')
    expect(items[1].text()).toBe('About')
  })
})
