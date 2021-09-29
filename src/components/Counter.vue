<template>
  <button @click="handleClick">
    <slot>Increment</slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const count = ref(0)
    const handleClick = () => {
      count.value += 1
      emit('increment', count.value)
    }

    return { count, handleClick }
  },
})
</script>
