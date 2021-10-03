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
})
