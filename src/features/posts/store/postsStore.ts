import {defineStore} from "pinia";
import {IPost} from "@/features/posts/types";
import {instance} from "@/shared/axios";
import {ref} from "vue";
import {IUser} from "@/features/users/types";
import {AxiosError} from "axios";


export const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([])
  const countPosts = ref(0)
  const limit = ref(9)
  const start = ref(0)

  async function getPosts() {
    try {
      await editCountPosts('posts')
      const {data} = await instance.get('posts', {params: {_start:0, _limit: limit.value}})
      posts.value = data
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  async function getPostsPage(page: number) {
    const params = {
      _start: (page - 1) * limit.value,
      _limit: limit.value,
    }

    try {
      const {data} = await instance.get('posts', {params})
      posts.value = data
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  async function getPostsByUserId(userId: number) {
    try {
      const {data} = await instance.get('posts', {params: {userId}})
      posts.value = data
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  async function getPostsByAuthorName(firstLetters: string) {
    try {
      const {data} = await instance.get('users')

      const filteredUsers = data.filter((user: IUser) =>
        user.name.toLowerCase().startsWith(firstLetters.toLowerCase())
      );

      if (filteredUsers.length === 0) {
        posts.value = []
        return;
      }

      const userIds = filteredUsers.map((user: IUser) => user.id);

      posts.value = await instance.get(`posts?userId=${userIds.join('&userId=')}`, {params: {_limit: limit.value}}).then(res => res.data)
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  async function getMorePosts() {
    try {
      increaseStart()
      const {data} = await instance.get(`posts`, {params: {_start: start.value, _limit:limit.value}})
      posts.value = posts.value.concat(data)
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  function increaseStart() {
    start.value += limit.value
  }

  async function editCountPosts(url: string) {
    const {data} = await instance.get(url)
    countPosts.value = Math.ceil(data.length / limit.value)
  }


  return {
    posts,
    countPosts,
    getPosts,
    getMorePosts,
    getPostsPage,
    getPostsByUserId,
    getPostsByAuthorName
  }
})