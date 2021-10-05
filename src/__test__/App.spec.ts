import { mount, flushPromises } from '@vue/test-utils'
import App from '../App.vue'
import { router } from '../router'

const $store = {
  state: {
    count: 0,
  },
  commit: jest.fn(),
}

describe('Navigation.vue', () => {
  test('routing', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store,
        },
      },
    })

    expect(wrapper.html()).toContain('Hello Vue 3')

    await wrapper.find('a[href="#/todo"]').trigger('click')
    await flushPromises()

    expect(wrapper.html()).toContain('Learn Vue.js 3')
  })
})
