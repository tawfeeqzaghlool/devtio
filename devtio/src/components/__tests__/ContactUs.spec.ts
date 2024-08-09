import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactUs from '@/components/ContactUs.vue';
import { mount } from '@vue/test-utils';

// Mock emailjs-com
vi.mock('@emailjs/browser', async (importOriginal) => {
  const actual = await importOriginal() as { send: Function };
  return {
    ...actual,
    send: vi.fn().mockResolvedValue({}),
  };
});

describe('ContactUs.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component with the correct content', () => {
    const wrapper = mount(ContactUs);

    expect(wrapper.text()).toContain('Contact Us');
    expect(wrapper.find('input#name').exists()).toBe(true);
    expect(wrapper.find('input#email').exists()).toBe(true);
    expect(wrapper.find('input#subject').exists()).toBe(true);
    expect(wrapper.find('textarea#message').exists()).toBe(true);
  });

  it('should show validation errors when the form is submitted with empty fields', async () => {
    const wrapper = mount(ContactUs);

    await wrapper.find('form').trigger('submit.prevent');

    // Wait for the DOM to update
    await wrapper.vm.$nextTick();

    const errorMessages = wrapper.findAll('.form-group.has-error .error-message');
    expect(errorMessages.map(el => el.text())).toEqual([
      'Name is required.',
      'Email is required.',
      'Subject is required.',
      'Message is required.',
    ]);
  });
    
});
