import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Todo from './pages/Todo.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todo',
      component: Todo,
    },
  ],
})
