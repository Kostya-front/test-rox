<template>
  <v-text-field
      placeholder="Find by author`s name"
      @update:modelValue="(value) => postsStore.getPostsByAuthorName(value)"
  >
  </v-text-field>
</template>

<script setup lang="ts">
import {usePostsStore} from "@/features/posts/store/postsStore";

const postsStore = usePostsStore()
</script>

<style lang="scss" scoped>
</style>