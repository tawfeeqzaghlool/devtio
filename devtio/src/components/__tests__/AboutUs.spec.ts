import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutUs from '../AboutUs.vue'

describe('AboutUs.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(AboutUs)
    
    // Check the section title
    expect(wrapper.find('.section-title').text()).toBe('About Us')
    
    // Check that about cards are rendered
    expect(wrapper.findAll('.about-card')).toHaveLength(4)
  })

  it('displays correct content in each about card', () => {
    const wrapper = mount(AboutUs)
    
    const aboutCards = wrapper.findAll('.about-card')
    const expectedContent = [
      {
        title: 'Our Story',
        description: 'Born from a shared frustration with slow, unreliable software, DevTio began as a vision to revolutionize digital experiences. What started as late-night coding sessions between friends has grown into a dynamic startup dedicated to crafting software that’s fast, reliable, and a joy to use. Our journey is fueled by a passion for technology and a commitment to pushing boundaries, making the digital world a better place, one line of code at a time.'
      },
      {
        title: 'Our Culture',
        description: 'At DevTio, we believe that creativity and innovation are sparked by collaboration. Our culture is one where every voice matters, ideas flow freely, and teamwork leads to breakthroughs. We’ve cultivated an environment where curiosity is encouraged, challenges are met with enthusiasm, and learning never stops. Together, we celebrate our successes and learn from our failures, all while having fun along the way.'
      },
      {
        title: 'Our Values',
        description: 'Our values are the foundation of everything we do. We are committed to excellence, innovation, and integrity. Quality is non-negotiable; we go above and beyond to ensure our software exceeds expectations. We value our clients as partners, working closely to deliver solutions that truly meet their needs. We also believe in continuous improvement, always seeking new ways to enhance our work and deliver even greater value.'
      },
      {
        title: 'Social Responsibility',
        description: 'DevTio is more than just a software company; we’re committed to making a positive impact. We embrace remote work to reduce our carbon footprint and support a healthier work-life balance. We’re passionate about giving back, from supporting local initiatives to adopting sustainable practices. Social responsibility isn’t just a buzzword for us—it’s a core part of who we are and how we operate, ensuring we contribute to a better future.'
      }
    ]

    aboutCards.forEach((card, index) => {
      const title = card.find('.about-title').text()
      const description = card.find('.about-description').exists() ? card.find('.about-description').text() : ''

      expect(title).toBe(expectedContent[index].title)
      // Initially, description should not be visible
      expect(description).toBe('')
    })
  })

  it('toggles content visibility on click', async () => {
    const wrapper = mount(AboutUs)
    
    const aboutCards = wrapper.findAll('.about-card')
    
    // Initially, no card should be expanded
    aboutCards.forEach(card => {
      expect(card.classes()).not.toContain('is-expanded')
    })

    // Click the first card to expand it
    await aboutCards[0].trigger('click')
    expect(aboutCards[0].classes()).toContain('is-expanded')
    expect(aboutCards[0].find('.about-description').text()).toBe(
      'Born from a shared frustration with slow, unreliable software, DevTio began as a vision to revolutionize digital experiences. What started as late-night coding sessions between friends has grown into a dynamic startup dedicated to crafting software that’s fast, reliable, and a joy to use. Our journey is fueled by a passion for technology and a commitment to pushing boundaries, making the digital world a better place, one line of code at a time.'
    )

    // Click the same card to collapse it
    await aboutCards[0].trigger('click')
    expect(aboutCards[0].classes()).not.toContain('is-expanded')
    expect(aboutCards[0].find('.about-description').exists()).toBe(false) // Check if description is no longer present
  })
})
