<template>
  <button @click="modalOpen = true">Open Modal</button>
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! (My parent is "body")
        <button @click="modalOpen = false">Close</button>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ModalButton',
  setup() {
    const modalOpen = ref(false)

    return {
      modalOpen,
    }
  },
})
</script>
<style scoped>
.modal {
  position: absolute;
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  background-color: #fff;
  border: solid 5px #eee;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
}
</style>
