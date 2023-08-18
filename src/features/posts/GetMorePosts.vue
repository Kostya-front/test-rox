<template>
  <v-btn @click.native="getMore">get more</v-btn>
</template>

<script setup lang="ts">

import {usePostsStore} from "@/features/posts/store/postsStore";

const postsStore = usePostsStore()

function getMore() {
  postsStore.getMorePosts()
}
</script>

<style lang="scss" scoped>
  .v-btn {
    display: none;
    @media screen and (max-width: 767px){
      display: block;
    }
  }
</style>