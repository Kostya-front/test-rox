<template>
  <v-pagination
      v-model="page"
      :length="postsStore.countPosts"
      @update:modelValue="postsStore.getPostsPage"
      rounded="circle"
  ></v-pagination>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {usePostsStore} from "@/features/posts/store/postsStore";

const postsStore = usePostsStore();
const page = ref(1);

</script>

<style lang="scss" scoped>
  .v-pagination {
    width: 100%;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
</style>