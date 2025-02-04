import type { FAIconType, LinkType } from '@/types'

export type NotificationType = {
  title: string
  content?: string
  time: string
}

export type OfferType = {
  image: string
  title: string
  description: string
  link?: LinkType
}

export type FeaturedHotelType = {
  location: string
  image: string
  name: string
  price: number
  ratings: number
  link?: LinkType
}

export type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
  link?: LinkType
}

export type ServiceType = {
  icon: FAIconType
  title: string
  description: string
  link?: LinkType
}
