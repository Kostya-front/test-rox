<template>
  <div class="container container-flex home">
    <Posts/>
  </div>
</template>

<script setup lang="ts">
import Posts from "@/widgets/Posts.vue";

</script>

<style lang="scss">
  .container {
    max-width: 80%;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
    @media screen and (max-width: 1920px) {
      max-width: 1300px;
    }
    @media screen and (max-width: 1440px) {
      max-width: 1200px;
    }
    @media screen and (max-width: 1028px) {
      max-width: 100%;
    }
  }
  .container-flex {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
</style>