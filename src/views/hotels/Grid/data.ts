import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel11 from '@/assets/images/category/hotel/4by3/11.jpg'
import type { HotelType } from '@/views/hotels/Grid/type'

export const hotels: HotelType[] = [
  {
    id: 1,
    name: 'Hotel Baljees Regency',
    sale: '30% Off',
    images: [hotel9, hotel2, hotel3, hotel1],
    rating: 4.5,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 750,
    link: { name: 'hotels.details' }
  },
  {
    id: 2,
    name: 'Courtyard by Marriott New York',
    images: [hotel10],
    rating: 4,
    features: ['Air Conditioning ', 'Wifi', 'Pool', 'Kitchen'],
    price: 1200,
    link: { name: 'hotels.details' }
  },
  {
    id: 3,
    name: 'Club Quarters Hotel',
    images: [hotel11],
    rating: 4.8,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 980,
    link: { name: 'hotels.details' }
  },
  {
    id: 4,
    name: 'Beverly Hills Marriott',
    images: [hotel7],
    rating: 4.8,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 1400,
    link: { name: 'hotels.details' }
  },
  {
    id: 5,
    name: 'Courtyard by Marriott New York',
    images: [hotel2],
    rating: 4.5,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 680,
    link: { name: 'hotels.details' }
  },
  {
    id: 6,
    name: 'Park Plaza Lodge Hotel',
    images: [hotel5],
    rating: 4.4,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 740,
    link: { name: 'hotels.details' }
  },
  {
    id: 7,
    name: 'Royal Beach Resort',
    images: [hotel4],
    rating: 4,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 570,
    link: { name: 'hotels.details' }
  },
  {
    id: 8,
    name: 'Pride moon Village Resort & Spa',
    images: [hotel3],
    rating: 3.8,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 896,
    link: { name: 'hotels.details' }
  },
  {
    id: 9,
    name: 'Carina Beach Resort',
    images: [hotel1],
    rating: 4,
    features: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 475,
    link: { name: 'hotels.details' }
  }
]
