<template>
  <form @submit.prevent="submit" class="form">
    <custom-input label="email:" v-model="form.email" />
    <label>
      description:
      <textarea v-model="form.description" />
    </label>

    <label>
      city:
      <select v-model="form.city">
        <option value="new-york">New York</option>
        <option value="moscow">Moscow</option>
      </select>
    </label>

    <label>
      subscribe:
      <input type="checkbox" v-model="form.subscribe" />
    </label>
    <label>
      interval:
      <input type="radio" value="weekly" v-model="form.interval" />
      <input type="radio" value="monthly" v-model="form.interval" />
    </label>

    <button type="submit" style="width: 50px">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomInput from '../components/CustomInput.vue'

export default defineComponent({
  name: 'Form',
  components: {
    'custom-input': CustomInput,
  },
  data() {
    return {
      form: {
        email: '',
        description: '',
        city: '',
        subscribe: false,
        interval: '',
      },
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
    },
  },
})
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 10px 200px 10px;
  align-items: center;
}
</style>
