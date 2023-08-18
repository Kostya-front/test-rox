import {defineStore} from "pinia";


export const useCounterStore = defineStore('counter', () => {
  const counter = 0

  return {
    counter
  }
})