import { defineStore } from 'pinia'
import router from '@/router'
import { useSessionStorage } from '@vueuse/core'
import type { UserType } from '@/types/auth'

export const useAuthStore = defineStore('auth_store', () => {
  const user = useSessionStorage<string | null>('BOOKING_VUE_USER', null)

  const saveSession = (newUser: UserType) => {
    user.value = JSON.stringify(newUser)
  }

  const removeSession = () => {
    user.value = null
    router.push('/sign-in')
  }

  const isAuthenticated = () => user.value != null

  return {
    user,
    saveSession,
    removeSession,
    isAuthenticated
  }
})
