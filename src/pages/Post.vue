<template>
  <button :disabled="loading" @click="getPosts">Get posts</button>
  <p v-if="loading" role="alert">Loading your posts…</p>
  <ul v-else>
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
      loading: false,
    }
  },
  methods: {
    async getPosts() {
      this.loading = true
      this.posts = (await request.get('/api/posts')) as Array<Post>
      this.loading = false
    },
  },
})
</script>
