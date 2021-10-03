<template>
  <button @click="getPosts">Get posts</button>
  <ul>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { request } from '../utils/request'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default defineComponent({
  data() {
    return {
      posts: [] as Array<Post>,
    }
  },
  methods: {
    async getPosts() {
      this.posts = (await request.get('/api/posts')) as Array<Post>
    },
  },
})
</script>
