import { defineStore } from 'pinia'

export const useTravelerStore = defineStore('travelerStore', {
  state: () => ({
    travelers: [] as Traveler[],
    phoneNumber: '',
    email: ''
  }),
  actions: {
    setTravelers(data: Traveler[]) {
      this.travelers = data
    },
    setContactInfo(phone: string, email: string) {
      this.phoneNumber = phone
      this.email = email
    },
    reset() {
      this.travelers = []
      this.phoneNumber = ''
      this.email = ''
    }
  },
  persist: {
  storage: sessionStorage, // эсвэл localStorage
}
})

// ✅ Type тодорхойлолт
interface Traveler {
  id: number
  ageType: string
  birthDay: {
    day: string
    month: string
    year: string
  }
  birthISO: string
  document: string
  gender: string
  name: string
  surname: string
  DocumentExDate: {
    day: string
    month: string
    year: string
  }
}
