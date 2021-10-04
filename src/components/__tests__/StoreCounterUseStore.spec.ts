import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import StoreCounterUseStore from '../StoreCounterUseStore.vue'
import { key } from '../../store'

const createVuexStore = (initialState?: object) => {
  return createStore({
    state() {
      return {
        count: 0,
        ...initialState,
      }
    },
    mutations: {
      increment(state: any, value: number = 1) {
        state.count += value
      },
    },
  })
}

describe('StoreCounterUseStore.vue', () => {
  test('test useStore with an Injection key', async () => {
    const store = createVuexStore()
    const wrapper = mount(StoreCounterUseStore, {
      global: {
        plugins: [[store, key]],
      },
    })

    expect(wrapper.html()).toContain('Store Count: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Store Count: 1')
  })
})
