import hotelNearby1 from '@/assets/images/category/hotel/nearby/01.jpg'
import hotelNearby2 from '@/assets/images/category/hotel/nearby/02.jpg'
import hotelNearby3 from '@/assets/images/category/hotel/nearby/03.jpg'
import hotelNearby4 from '@/assets/images/category/hotel/nearby/04.jpg'
import hotelNearby5 from '@/assets/images/category/hotel/nearby/05.jpg'
import hotelNearby6 from '@/assets/images/category/hotel/nearby/06.jpg'
import hotelNearby7 from '@/assets/images/category/hotel/nearby/07.jpg'
import hotelNearby8 from '@/assets/images/category/hotel/nearby/08.jpg'
import hotelNearby9 from '@/assets/images/category/hotel/nearby/09.jpg'
import hotelNearby10 from '@/assets/images/category/hotel/nearby/10.jpg'
import hotelNearby11 from '@/assets/images/category/hotel/nearby/11.jpg'

import hotel1 from '@/assets/images/category/hotel/01.jpg'
import hotel2 from '@/assets/images/category/hotel/02.jpg'
import hotel3 from '@/assets/images/category/hotel/03.jpg'
import hotel4 from '@/assets/images/category/hotel/04.jpg'

import offer1 from '@/assets/images/offer/01.jpg'
import offer4 from '@/assets/images/offer/04.jpg'
import offer3 from '@/assets/images/offer/03.jpg'
import offer2 from '@/assets/images/offer/02.jpg'

import { faHandHoldingDollar, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import type {
  FeaturedHotelType,
  NearbyPlaceType,
  NotificationType,
  OfferType,
  ServiceType
} from '@/views/hotels/Home/type'

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024'
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024'
  }
]

export const offerData: OfferType[] = [
  {
    image: offer1,
    title: 'Daily 50 Lucky Winners get a Free Stay',
    description: 'Valid till: 15 Nov',
    link: { name: 'offer-detail' }
  },
  {
    image: offer4,
    title: 'Up to 60% OFF',
    description: 'On Hotel Bookings Online',
    link: { name: 'offer-detail' }
  },
  {
    image: offer3,
    title: 'Book & Enjoy',
    description: '20% Off on the best available room rate',
    link: { name: 'offer-detail' }
  },
  {
    image: offer2,
    title: 'Hot Summer Nights',
    description: 'Up to 3 nights free!',
    link: { name: 'offer-detail' }
  }
]

export const featuredHotelsData: FeaturedHotelType[] = [
  {
    location: 'New York',
    image: hotel1,
    name: 'Baga Comfort',
    price: 455,
    ratings: 4.5,
    link: { name: 'hotels.details' }
  },
  {
    location: 'California',
    image: hotel2,
    name: 'New Apollo Hotel',
    price: 585,
    ratings: 4.8,
    link: { name: 'hotels.details' }
  },
  {
    location: 'Los Angeles',
    image: hotel3,
    name: 'New Age Hotel',
    price: 385,
    ratings: 4.6,
    link: { name: 'hotels.details' }
  },
  {
    location: 'Chicago',
    image: hotel4,
    name: 'Helios Beach Resort',
    price: 665,
    ratings: 4.8,
    link: { name: 'hotels.details' }
  }
]

export const nearbyPlacesData: NearbyPlaceType[] = [
  {
    image: hotelNearby1,
    name: 'San Francisco',
    travelTime: '13 mins'
  },
  {
    image: hotelNearby2,
    name: 'Los Angeles',
    travelTime: '25 mins'
  },
  {
    image: hotelNearby3,
    name: 'Miami',
    travelTime: '45 mins'
  },
  {
    image: hotelNearby4,
    name: 'Sanjosh',
    travelTime: '55 mins'
  },
  {
    image: hotelNearby5,
    name: 'New York',
    travelTime: '1 hour'
  },
  {
    image: hotelNearby6,
    name: 'North Justen',
    travelTime: '2 hours'
  },
  {
    image: hotelNearby7,
    name: 'Rio',
    travelTime: '20 mins'
  },
  {
    image: hotelNearby8,
    name: 'Las Vegas',
    travelTime: '3 hours'
  },
  {
    image: hotelNearby9,
    name: 'Texas',
    travelTime: '55 mins'
  },
  {
    image: hotelNearby10,
    name: 'Chicago',
    travelTime: '13 mins'
  },
  {
    image: hotelNearby11,
    name: 'New Keagan',
    travelTime: '35 mins'
  },
  {
    image: hotelNearby1,
    name: 'Oslo',
    travelTime: '1 hour 13 mins'
  }
]

export const serviceData: ServiceType[] = [
  {
    icon: faHandHoldingHeart,
    title: '24x7 Help',
    description: 'If we fall short of your expectation in any way, let us know'
  },
  {
    icon: faHandHoldingDollar,
    title: 'Payment Trust',
    description: 'All refunds come with no questions asked guarantee'
  }
]
