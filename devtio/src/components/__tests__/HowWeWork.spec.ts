import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HowWeWork from '../HowWeWork.vue'

describe('HowWeWork.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HowWeWork)
    
    // Check the section title
    expect(wrapper.find('.section-title').text()).toBe('How We Work')
    
    // Check that step cards are rendered
    expect(wrapper.findAll('.step-card')).toHaveLength(4)
  })

  it('displays correct content in each step card', () => {
    const wrapper = mount(HowWeWork)
    
    const stepCards = wrapper.findAll('.step-card')
    const expectedSteps = [
      { icon: '🗣️', heading: '1. Discover', description: 'We kick things off with a deep dive into your ideas, challenges, and goals. It\'s all about getting to know you and your vision inside out!' },
      { icon: '🗺️', heading: '2. Plan', description: 'Next, we craft a detailed blueprint of your project. We map out every step and milestone, ensuring we\'re all set for a smooth journey ahead.' },
      { icon: '🔨', heading: '3. Develop', description: 'Our team swings into action, turning plans into reality. Expect regular updates, transparent communication, and a relentless pursuit of quality.' },
      { icon: '🚀', heading: '4. Deliver', description: 'Finally, we deliver a solution that not only meets but surpasses your expectations. Plus, we’re here for ongoing support to keep things running smoothly.' }
    ]
    
    stepCards.forEach((card, index) => {
      const icon = card.find('.icon').text()
      const heading = card.find('h2').text()
      const description = card.find('p').text()

      expect(icon).toBe(expectedSteps[index].icon)
      expect(heading).toBe(expectedSteps[index].heading)
      expect(description).toBe(expectedSteps[index].description)
    })
  })

})
