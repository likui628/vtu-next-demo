import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter.vue', () => {
  test('emits an event when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('increment')
  })

  test('emits an event with count when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('increment')).toEqual([[1]])

    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('increment')).toEqual([[1], [2]])
  })
})
