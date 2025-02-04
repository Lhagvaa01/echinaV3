import type { LinkType } from '@/types'

export type NotificationType = {
  title: string
  content?: string
  time: string
  link?: LinkType
}

export type HotelType = {
  id: number
  name: string
  sale?: string
  images: string[]
  rating: number
  features: string[]
  price: number
  link?: LinkType
}
