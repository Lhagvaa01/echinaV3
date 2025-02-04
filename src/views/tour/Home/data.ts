import hotel13 from '@/assets/images/category/hotel/nearby/13.jpg'
import hotel14 from '@/assets/images/category/hotel/nearby/14.jpg'
import hotel15 from '@/assets/images/category/hotel/nearby/15.jpg'
import hotel16 from '@/assets/images/category/hotel/nearby/16.jpg'
import hotel17 from '@/assets/images/category/hotel/nearby/17.jpg'
import hotel18 from '@/assets/images/category/hotel/nearby/18.jpg'
import hotel19 from '@/assets/images/category/hotel/nearby/19.jpg'
import hotel20 from '@/assets/images/category/hotel/nearby/20.jpg'

import tour01 from '@/assets/images/category/tour/01.jpg'
import tour02 from '@/assets/images/category/tour/02.jpg'
import tour03 from '@/assets/images/category/tour/03.jpg'
import tour04 from '@/assets/images/category/tour/04.jpg'

import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar02 from '@/assets/images/avatar/02.jpg'
import avatar03 from '@/assets/images/avatar/03.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
import type { CategoriesType, PackageType } from '@/views/tour/Home/type'

export const categories: CategoriesType[] = [
  {
    image: hotel20,
    title: 'Beach',
    placeCount: 4568
  },
  {
    image: hotel19,
    title: 'Heritage',
    placeCount: 2845
  },
  {
    image: hotel18,
    title: 'Desert',
    placeCount: 1587
  },
  {
    image: hotel17,
    title: 'Tower',
    placeCount: 986
  },
  {
    image: hotel16,
    title: 'Mountain',
    placeCount: 786
  },
  {
    image: hotel15,
    title: 'Safari',
    placeCount: 568
  },
  {
    image: hotel14,
    title: 'Temple',
    placeCount: 256
  },
  {
    image: hotel13,
    title: 'Festival',
    placeCount: 654
  }
]

export const packages: PackageType[] = [
  {
    image: tour04,
    title: 'Lombok, Indonesia',
    category: 'Adventure',
    rating: 4.3,
    duration: '6 days / 5 nights',
    price: 1385,
    link: { name: 'tour.grid' }
  },
  {
    image: tour02,
    title: 'Northern Lights Escape',
    category: 'History',
    rating: 4.5,
    duration: '8 days / 7 nights',
    price: 2569,
    link: { name: 'tour.grid' }
  },
  {
    image: tour03,
    title: 'Essential Egypt',
    category: 'Desert',
    rating: 4.2,
    duration: '9 days / 8 nights',
    price: 1885,
    link: { name: 'tour.grid' }
  },
  {
    image: tour01,
    title: 'Phi Phi Islands',
    category: 'Beach',
    rating: 4.6,
    duration: '9 days / 8 nights',
    price: 3585,
    link: { name: 'tour.grid' }
  }
]

export const discoverImages: string[] = [avatar01, avatar02, avatar03, avatar04]

export const recentSearches: string[] = [
  'Taman Sari',
  'The Grand Palace',
  'Glacier National Park',
  'Machu Picchu',
  'Prambanan Temple',
  'Batu Gong',
  'Barobadur Temple',
  'Great Barrier Reef',
  'Argentine Patagonia'
]
