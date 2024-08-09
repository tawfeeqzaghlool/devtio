import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FooterSection from '@/components/FooterSection.vue';

describe('Footer.vue', () => {
  it('should render the footer with correct content', () => {
    const wrapper = mount(FooterSection);
    expect(wrapper.text()).toContain('© 2024 Dev Tio. We value creativity and innovation.');
  });
});
