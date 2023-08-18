import {defineStore} from "pinia";
import {ref} from "vue";
import {IUser} from "@/features/users/types";
import {instance} from "@/shared/axios";
import {AxiosError} from "axios/index";


export const useUsersStore = defineStore('users', () => {
  const users = ref<IUser[]>([])

  async function getUsers() {
    try {
      const {data} = await instance.get('users')
      users.value = data
    } catch (e: AxiosError | any) {
      alert(e.message)
    }
  }

  return {
    users,
    getUsers
  }
})