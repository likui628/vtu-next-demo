<template>
  <div class="todo-list">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input class="new-todo" data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

export default defineComponent({
  name: 'Todo',
  setup() {
    const todos = reactive<TodoItem[]>([
      { id: 1, text: 'Learn Vue.js 3', completed: false },
    ])
    const newTodo = ref('')

    const createTodo = function () {
      todos.push({
        id: 2,
        text: newTodo.value,
        completed: false,
      })
      newTodo.value = ''
    }

    return {
      todos,
      newTodo,
      createTodo,
    }
  },
})
</script>

<style scoped>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.todo {
  position: relative;
  font-size: 24px;
  margin: 10px;
  line-height: 1.4em;
}

.new-todo {
  position: relative;
  margin: 0;
  width: 50%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
