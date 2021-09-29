<template>
  <div>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </div>
  <div>
    <img
      id="admin-img"
      v-show="admin"
      src="../assets/admin.jpg"
      style="width: 200px; height: 200px"
    />
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      admin: false,
    }
  },
}
</script>
