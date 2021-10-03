import { nextTick } from '@vue/runtime-core'
import { mount, flushPromises } from '@vue/test-utils'
import Post from '../Post.vue'

jest.mock('../../utils/request')

describe('Post.vue', () => {
  test('loads posts on button click', async () => {
    const wrapper = mount(Post)

    await wrapper.get('button').trigger('click')
    await flushPromises()

    const posts = wrapper.findAll('[data-test="post"]')

    expect(posts).toHaveLength(2)
    expect(posts[0].text()).toContain('title1')
    expect(posts[1].text()).toContain('title2')
  })

  test('displays loading state on button click', async () => {
    const wrapper = mount(Post)
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')

    wrapper.get('button').trigger('click')
    await nextTick()
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
    expect(wrapper.get('button').attributes()).toHaveProperty('disabled')

    await flushPromises()

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
  })
})
