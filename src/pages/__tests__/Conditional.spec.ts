import { mount } from '@vue/test-utils'
import Conditional from '../Conditional.vue'

describe('Conditional.vue', () => {
  test('renders a profile link', () => {
    const wrapper = mount(Conditional)

    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
  })

  test('does not render an admin link', () => {
    const wrapper = mount(Conditional)

    expect(wrapper.find('#admin').exists()).toBe(false)
    expect(wrapper.get('#admin-img').isVisible()).toBe(false)
  })

  test('renders an admin link', () => {
    const wrapper = mount(Conditional, {
      data() {
        return {
          admin: true,
        }
      },
    })
    expect(wrapper.get('#admin-img').isVisible()).toBe(true)
    expect(wrapper.get('#admin').text()).toEqual('Admin')
  })
})
