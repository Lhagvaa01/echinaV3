import type { BSIconType, FAIconType, IconType, LinkType } from '@/types'

export type HotelCategoryType = {
  name: string
  icon: FAIconType | BSIconType
}

export type HotelFeatureType = {
  name: string
  icon: IconType
  variant: string
}

export type HotelServiceType = {
  name: string
  icon: IconType
}

export type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
  link?: LinkType
}

export type OfferType = {
  image: string
  title: string
  description?: string
  validity: string
  link?: LinkType
}

export type ServiceType = {
  tag?: string
  image: string
  title: string
  description?: string
  link?: LinkType
}
