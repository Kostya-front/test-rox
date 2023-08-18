<template>
  <div>
    <slot/>
  </div>
</template>

<script setup lang="ts">

import {useUsersStore} from "@/features/users/store/usersStore";
import {onBeforeMount} from "vue";

const userStore = useUsersStore()

onBeforeMount(() => {
  userStore.getUsers()
})
</script>

<style scoped>

</style>