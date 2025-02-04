import type { LinkType } from '@/types'

export type CategoriesType = {
  image: string
  title: string
  placeCount: number
}

export type PackageType = {
  image: string
  title: string
  category: string
  rating: number
  duration: string
  price: number
  link?: LinkType
}
