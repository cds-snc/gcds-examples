
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
    it('renders breadcrumbs properly', () => {
        const wrapper = mount(Header)
        expect(wrapper.find('gcds-breadcrumbs-item[href="/"]').exists()).toBe(true)
        expect(wrapper.find('gcds-breadcrumbs-item[href="/about"]').exists()).toBe(true)
    })
})
