<template>
  <div>
    <button @click="increment">Store Count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StoreCounter',
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
  },
})
</script>
