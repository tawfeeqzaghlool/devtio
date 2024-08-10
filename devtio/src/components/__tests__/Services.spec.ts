import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ServicesSection from '../ServicesSection.vue'

// Mock data to simulate the props and data inside the component
const mockServices = [
  'Web Development',
  'Mobile Development',
  'Smart Devices Development',
  'IoT Development',
  'UI/UX Design',
  'IT Consultation',
]

const mockImages = {
  'Web Development': '/images/web-development.webp',
  'Mobile Development': '/images/mobile-development.webp',
  'Smart Devices Development': '/images/smart-device.webp',
  'IoT Development': '/images/iot-development.webp',
  'UI/UX Design': '/images/ui-ux-design.webp',
  'IT Consultation': '/images/it-consultation.webp',
}

describe('ServicesSection.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ServicesSection);
    expect(wrapper.find('.section-title').text()).toBe('Our Services');
    expect(wrapper.findAll('.service-card')).toHaveLength(mockServices.length);
  });

  it('displays service images correctly', () => {
    const wrapper = mount(ServicesSection);
    mockServices.forEach(service => {
      const img = wrapper.find(`img[src="${mockImages[service as keyof typeof mockImages]}"]`);
      expect(img.exists()).toBe(true);
    });
  });   

  it('toggles service card flip on click', async () => {
    const wrapper = mount(ServicesSection) as VueWrapper<{ flippedIndex: number | null }>; // Type assertion
    const serviceCards = wrapper.findAll('.service-card');
    
    await serviceCards[0].trigger('click');
    expect(wrapper.vm.flippedIndex).toBe(0); // Access directly without .value
    
    await serviceCards[0].trigger('click');
    expect(wrapper.vm.flippedIndex).toBe(null); // Access directly without .value
  });
});