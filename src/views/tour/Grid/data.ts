import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { faPlane, faPersonSkating, faHotel } from '@fortawesome/free-solid-svg-icons'

import tour04 from '@/assets/images/category/tour/4by3/04.jpg'
import tour05 from '@/assets/images/category/tour/4by3/05.jpg'
import tour06 from '@/assets/images/category/tour/4by3/06.jpg'
import tour07 from '@/assets/images/category/tour/4by3/07.jpg'
import tour08 from '@/assets/images/category/tour/4by3/08.jpg'
import tour09 from '@/assets/images/category/tour/4by3/09.jpg'

import type { LinkType } from '@/types'

export type PlaceType = {
  image: string
  title: string
  duration: string
  sale?: string
  category: string
  price: number
  features: {
    icon: IconDefinition
    text: string
    color: string
  }[]
  link?: LinkType
}

export const places: PlaceType[] = [
  {
    image: tour04,
    title: 'Beautiful Bali with Malaysia',
    duration: '6 days / 5 nights',
    sale: '30% Off',
    category: 'Adventure',
    price: 1500,
    features: [
      { icon: faPlane, text: '1 Flight', color: 'orange' },
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  },
  {
    image: tour05,
    title: 'Meeru Island Resort (Without Flight)',
    duration: '6 days / 5 nights',
    category: 'Honeymoon',
    price: 800,
    features: [
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  },
  {
    image: tour06,
    title: 'Sun Siyam Iru Veli Vacation',
    duration: '5 days / 4 nights',
    category: 'Beach',
    price: 725,
    features: [
      { icon: faPlane, text: '1 Flight', color: 'orange' },
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  },
  {
    image: tour07,
    title: 'Lux South Ari Atoll Vacation',
    duration: '4 days / 3 nights',
    category: 'Nature',
    price: 400,
    features: [
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  },
  {
    image: tour08,
    title: 'Romantic Seaside - Bentota & Colombo Taj Special',
    duration: '5 days / 4 nights',
    category: 'Adventure',
    price: 845,
    features: [
      { icon: faPlane, text: '1 Flight', color: 'orange' },
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  },
  {
    image: tour09,
    title: 'Colombo Vacay - Exotic Beaches of Bali',
    duration: '6 days / 7 nights',
    category: 'Heritage',
    price: 1250,
    features: [
      { icon: faPlane, text: '1 Flight', color: 'orange' },
      { icon: faHotel, text: '1 Hotel', color: 'info' },
      { icon: faPersonSkating, text: '2 Activities', color: 'danger' }
    ],
    link: { name: 'tour.detail' }
  }
]
