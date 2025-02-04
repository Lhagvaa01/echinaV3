import type { LinkType } from '@/types'

export type CabListType = {
  id: number
  name: string
  image: string
  keyFeatures: string[]
  rating: number
  sale: string
  price: number
  salePrice: number
  features: string[]
  notes: string[]
  link?: LinkType
}
