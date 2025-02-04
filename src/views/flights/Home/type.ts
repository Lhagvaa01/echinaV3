import type { LinkType } from '@/types'

export type OffersType = {
  image: string
  off: string
  flightType: string
  variant: string
  couponCode: string
  link?: LinkType
}

export type DestinationType = {
  name: string
  rating: number
  flightInterval: string
  information?: string
  image: string
  link?: LinkType
}

export type BlogType = {
  title: string
  author: string
  image: string
  link?: LinkType
}
