import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Todo from './pages/Todo.vue'
import Conditional from './pages/Conditional.vue'
import Form from './pages/Form.vue'
import Post from './pages/Post.vue'

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
    {
      path: '/condition',
      component: Conditional,
    },
    {
      path: '/form',
      component: Form,
    },
    {
      path: '/post',
      component: Post,
    },
  ],
})
