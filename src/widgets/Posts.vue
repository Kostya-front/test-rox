<template>
  <div class="form">
    <GetPostsByAuthorName/>

    <GetPostsByUserId/>
  </div>

  <GetPosts/>

  <GetPostsPage/>

  <GetMorePosts/>

</template>

<script setup lang="ts">
import GetPosts from "@/features/posts/GetPosts";
import GetPostsPage from "@/features/posts/GetPostsPage.vue";
import GetPostsByUserId from "@/features/posts/GetPostsByUserId.vue";
import GetPostsByAuthorName from "@/features/posts/GetPostsByText.vue";
import GetMorePosts from "@/features/posts/GetMorePosts.vue";
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>