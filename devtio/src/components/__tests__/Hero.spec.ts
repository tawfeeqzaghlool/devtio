import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

describe('Hero.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('h1').text()).toBe('Transform Your Business with Innovative Software')
    expect(wrapper.find('p').text()).toBe('We craft digital experiences that inspire and grow your brand.')
  })

  it('contains the CTA button', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('button.cta-button').exists()).toBe(true)
  })
})
