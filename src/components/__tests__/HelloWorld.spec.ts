import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })

  test('teleport modal', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'message',
      },
      global: {
        stubs: {
          StoreCounter: true,
          Counter: true,
        },
      },
    })
    expect(document.body.outerHTML).not.toContain("I'm a teleported modal!")
    await wrapper.get('button').trigger('click')
    expect(document.body.outerHTML).toContain("I'm a teleported modal!")
  })
})
