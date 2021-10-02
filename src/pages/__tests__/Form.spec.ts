import { mount } from '@vue/test-utils'
import Form from '../Form.vue'
import CustomInput from '../../components/CustomInput.vue'

describe('Form.vue', () => {
  test('mount', async () => {
    const wrapper = mount(Form)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.findComponent(CustomInput).setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type="radio"][value="monthly"]').setValue()

    await wrapper.find('form').trigger('submit.prevent')

    expect((<Array<object>>wrapper.emitted('submit')?.[0])?.[0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: 'monthly',
    })
  })
})
