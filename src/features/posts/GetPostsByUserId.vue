<template>
  <v-select
      v-model="selectedItem"
      label="Select"
      item-title="name"
      item-value="id"
      @update:modelValue="postsStore.getPostsByUserId"
      :items="usersStore.users"
  >
  </v-select>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {IUser} from "@/features/users/types";
import {useUsersStore} from "@/features/users/store/usersStore";
import {usePostsStore} from "@/features/posts/store/postsStore";
interface IProps {
  users: IUser[]
}
const props = defineProps<IProps>()
const value = ref('')
const selectedItem = ref(null)

const usersStore = useUsersStore()
const postsStore = usePostsStore()

onMounted(() => {
  usersStore.getUsers()
})
</script>

<style lang="scss" scoped>
  .v-select {
    @media screen and (max-width: 767px){
      display: none;
    }
  }
</style>