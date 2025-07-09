import { mount } from '@vue/test-utils';
import Booking from '../components/Booking.vue';
import { describe, it, expect, vi } from 'vitest';

describe('Booking.vue', () => {
  it('renders form inputs', () => {
    const wrapper = mount(Booking);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="date"]').exists()).toBe(true);
    expect(wrapper.find('input[type="time"]').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('submits booking and navigates', async () => {
    const push = vi.fn();
    const wrapper = mount(Booking, {
      global: {
        mocks: {
          $router: { push }
        }
      }
    });

    await wrapper.find('input[type="text"]').setValue('Andi');
    await wrapper.find('input[type="date"]').setValue('2025-07-07');
    await wrapper.find('input[type="time"]').setValue('10:00');
    await wrapper.find('select').setValue('Cukur');
    
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    );

    await wrapper.find('form').trigger('submit.prevent');
    expect(fetch).toHaveBeenCalled();
  });
});
