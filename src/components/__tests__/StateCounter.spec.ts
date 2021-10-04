import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import StateCounter from '../StoreCounter.vue'

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

describe('StateCounter.vue', () => {
  test('test vuex', async () => {
    const store = createVuexStore()
    const wrapper = mount(StateCounter, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.html()).toContain('Store Count: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Store Count: 1')
  })

  test('vuex using a mock store', async () => {
    const $store = {
      state: {
        count: 25,
      },
      commit: jest.fn(),
    }

    const wrapper = mount(StateCounter, {
      global: {
        mocks: {
          $store,
        },
      },
    })

    expect(wrapper.html()).toContain('Store Count: 25')
    await wrapper.find('button').trigger('click')
    expect($store.commit).toHaveBeenCalled()
  })

  test('increment mutation without passing a value', () => {
    const store = createVuexStore({ count: 10 })
    store.commit('increment')
    expect(store.state.count).toBe(11)
  })

  test('increment mutation with a value', () => {
    const store = createVuexStore({ count: 10 })
    store.commit('increment', 15)
    expect(store.state.count).toBe(25)
  })
})
