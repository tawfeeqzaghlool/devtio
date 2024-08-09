import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MainView from '@/views/MainView.vue';

describe('MainView.vue', () => {
  it('should render all child components', () => {
    const wrapper = mount(MainView);

    expect(wrapper.findComponent({ name: 'HeroSection' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'ServicesSection' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'AboutUs' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'HowWeWork' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'ContactUs' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'FooterSection' }).exists()).toBe(true);
  });

});
