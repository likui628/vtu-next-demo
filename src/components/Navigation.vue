<template>
  <div class="navbar">
    <router-link class="link" to="/">Hello</router-link>
    <router-link class="link" to="/todo">Todo</router-link>
    <router-link class="link" to="/condition">Conditional</router-link>
    <router-link class="link" to="/form">Form</router-link>
  </div>
</template>

<style>
.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #eaecef;
}
.link {
  padding: 1.5rem;
  font-size: 1.5rem;
  text-decoration: none;
}
</style>
