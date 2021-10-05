import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import ModalButton from '../../components/ModalButton.vue'

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
    console.log(wrapper.html())
  })
})
