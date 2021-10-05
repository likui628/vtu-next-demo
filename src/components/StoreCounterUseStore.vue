<template>
  <div>
    <button @click="increment">Store Count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'StoreCounterUseStore',
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit('increment')
    }
    return { count, increment }
  },
})
</script>
