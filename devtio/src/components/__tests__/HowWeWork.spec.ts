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
      { icon: '🗣️', heading: '1. Discover', description: 'We start with a conversation, understanding your ideas, challenges, and vision.' },
      { icon: '🗺️', heading: '2. Plan', description: 'We turn those ideas into a detailed roadmap, with clear steps and goals.' },
      { icon: '🔨', heading: '3. Develop', description: 'Our team brings your project to life with transparency, updates, and a commitment to quality.' },
      { icon: '🚀', heading: '4. Deliver', description: 'We deliver a solution that exceeds expectations and provide ongoing support.' }
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
