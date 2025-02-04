import vehicle1 from '@/assets/images/category/cab/sedan.svg'
import vehicle2 from '@/assets/images/category/cab/lux.svg'
import vehicle3 from '@/assets/images/category/cab/suv.svg'
import vehicle4 from '@/assets/images/category/cab/suv-2.svg'

import type { CabListType } from '@/views/cab/List/type'

export const cabsLists: CabListType[] = [
  {
    id: 1,
    name: 'Camry, Accord',
    keyFeatures: ['SEDAN', 'AC', '4 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 250,
    sale: '4% Off',
    salePrice: 210,
    image: vehicle1,
    link: { name: 'cabs.detail' }
  },
  {
    id: 2,
    name: 'Audi, BMW',
    keyFeatures: ['LUX', 'AC', '4 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 550,
    sale: '2% Off',
    salePrice: 500,
    image: vehicle2,
    link: { name: 'cabs.detail' }
  },
  {
    id: 3,
    name: 'Ertiga, Xylo',
    keyFeatures: ['SUV', 'AC', '6 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 400,
    sale: '10% Off',
    salePrice: 350,
    image: vehicle3,
    link: { name: 'cabs.detail' }
  },
  {
    id: 4,
    name: 'Suv, Innova Crysta',
    keyFeatures: ['SUV', 'AC', '4 Seats'],
    rating: 4.3,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 650,
    sale: '15% Off',
    salePrice: 480,
    image: vehicle4,
    link: { name: 'cabs.detail' }
  }
]
