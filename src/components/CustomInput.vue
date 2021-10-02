<template>
  <label>
    {{ label }}
    <input type="text" :value="modelValue" @input="onInput" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: ['modelValue', 'label'],
  methods: {
    onInput(event: Event): void {
      this.$emit('update:modelValue', (<HTMLInputElement>event.target).value)
    },
  },
})
</script>
