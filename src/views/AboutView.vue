<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GetPosts/>
  </div>
</template>
<script>
import GetPosts from "@/features/posts/GetPosts";
export default {
  components: {GetPosts}
}
</script>