<template>
  <v-card
    :title="post.title"
    :subtitle="authorName"
    :text="post.body"
    :border="true"
  />
</template>

<script setup lang="ts">
import {IPost} from "@/features/posts/types";
import {computed} from "vue";
import {useUsersStore} from "@/features/users/store/usersStore";

interface IProps {
  post: IPost
}
const props = defineProps<IProps>()

const usersStore = useUsersStore()
const authorName = computed(() => {
  const user = usersStore.users.find(user => user.id === props.post.userId)
  if(user) return user.name
})
</script>

<style scoped>

</style>