import type { LinkType } from '@/types'

export type HotelType = {
  id: number
  name: string
  address: string
  sale?: string
  images: string[]
  rating: number
  features: string[]
  price: number
  schemes?: string[]
  link?: LinkType
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}
