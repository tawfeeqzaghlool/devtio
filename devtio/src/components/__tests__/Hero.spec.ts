import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

describe('HeroSection.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('h1').text()).toBe('Empower Your Business with Cutting-Edge Solutions')
    expect(wrapper.find('p').text()).toBe('Innovating Tomorrow\'s Digital Landscape')
  })
})
