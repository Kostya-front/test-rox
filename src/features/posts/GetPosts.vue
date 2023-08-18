<template>
  <div class="posts">
    <Post
        v-for="post of postsStore.posts"
        v-if="postsStore.posts.length > 0"
        :post="post"
        :key="post.id"
    />
    <p class="text" v-else>There is no post</p>
  </div>
</template>

<script setup lang="ts">
import Post from "@/entities/post/ui/Post.vue";
import {usePostsStore} from "@/features/posts/store/postsStore";
import {onBeforeMount} from "vue";

const postsStore = usePostsStore()

onBeforeMount(() => {
  postsStore.getPosts()
})
</script>

<style lang="scss" scoped>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 585px) {
      grid-template-columns: 1fr;
    }
  }
</style>