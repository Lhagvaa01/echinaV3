import type { LinkType } from '@/types'

export type TestimonialType = {
  title: string
  description: string
  image: string
  link?: LinkType
}

export type RoomSlideType = {
  name: string
  description: string
  sqfoot: string
  sqm: string
  image: string
  feature: string[]
}

export type MonthlyOfferType = {
  title: string
  image: string
}

export type TestimonialAuthor = {
  name: string
  avatar: string
}

export type TestimonialReviewType = {
  author: TestimonialAuthor
  review: string
  rating: number
}
