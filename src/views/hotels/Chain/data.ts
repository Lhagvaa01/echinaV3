// import { type IconType } from 'react-icons'
import {
  BIconCashCoin,
  BIconCreditCard2Back,
  BIconTags,
  BIconWallet,
  BIconWifi
} from 'bootstrap-icons-vue'
import {
  faBolt,
  faCity,
  faDumbbell,
  faEllipsis,
  faGolfBallTee,
  faGopuram,
  faMountainSun,
  faPersonShelter,
  faPersonSwimming,
  faSpa,
  faUmbrellaBeach,
  faUtensils,
  faWifi
} from '@fortawesome/free-solid-svg-icons'

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

import offer6 from '@/assets/images/offer/06.jpg'
import offer7 from '@/assets/images/offer/07.jpg'
import offer8 from '@/assets/images/offer/08.jpg'
import offer5 from '@/assets/images/offer/05.jpg'

import type {
  HotelCategoryType,
  HotelFeatureType,
  HotelServiceType,
  NearbyPlaceType,
  OfferType,
  ServiceType
} from '@/views/hotels/Chain/type'
import flight2 from '@/assets/images/category/flight/02.jpg'
import flight1 from '@/assets/images/category/flight/01.jpg'
import flight3 from '@/assets/images/category/flight/03.jpg'

export const hotelDestinations: string[] = [
  'New York',
  'California',
  'New Jersey',
  'Canada',
  'Las vegas',
  'London',
  'Singapore',
  'Malaysia',
  'manhattan'
]

export const hotelTypes: string[] = ['All', 'Hotels', 'Villas', 'Palace', 'Resorts', 'Restaurants']

export const hotelCategories: HotelCategoryType[] = [
  {
    name: 'Beach',
    icon: faUmbrellaBeach
  },
  {
    name: 'City',
    icon: faCity
  },
  {
    name: 'Spa',
    icon: faSpa
  },
  {
    name: 'Wildlife',
    icon: faMountainSun
  },
  {
    name: 'Golf',
    icon: faGolfBallTee
  },
  {
    name: 'Heritage',
    icon: faGopuram
  }
]

export const hotelFacilities: string[] = [
  'Banquet',
  ' Conference and meeting',
  'Fitness room',
  'Health club',
  'Sauna and steam bath',
  'Luggage storage',
  'Summer terrace',
  'Non-smoking rooms'
]

export const hotelFeatures: HotelFeatureType[] = [
  {
    name: ' Best Rate Guaranteed',
    icon: BIconCashCoin,
    variant: 'text-info'
  },
  {
    name: 'Payment at Hotel',
    icon: BIconCreditCard2Back,
    variant: 'text-warning'
  },
  {
    name: 'Exclusive Members Rewards',
    icon: BIconWallet,
    variant: 'text-success'
  },
  {
    name: 'WIFI Access',
    icon: BIconWifi,
    variant: 'text-danger'
  },
  {
    name: 'No Hidden Charges',
    icon: BIconTags,
    variant: 'text-orange'
  }
]

export const hotelServices: HotelServiceType[] = [
  {
    name: 'Free Wifi',
    icon: faWifi
  },
  {
    name: 'Swimming Pool',
    icon: faPersonSwimming
  },
  {
    name: 'Private Workshop',
    icon: faPersonShelter
  },
  {
    name: 'Breakfast',
    icon: faUtensils
  },
  {
    name: 'Free Electricity',
    icon: faBolt
  },
  {
    name: 'Gym Space',
    icon: faDumbbell
  },
  {
    name: 'Spa',
    icon: faSpa
  },
  {
    name: 'Other Services',
    icon: faEllipsis
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

export const offerData: OfferType[] = [
  {
    image: offer6,
    title: 'Spa Package Offer',
    validity: 'Dec 2022'
  },
  {
    image: offer7,
    title: 'Elevate Your Stay',
    validity: 'Feb 2022'
  },
  {
    image: offer8,
    title: 'Pass Holder Package',
    validity: 'Feb 2022'
  },
  {
    image: offer5,
    title: '2023 Golf Tournament Package',
    validity: 'Jan 2022'
  }
]

export const serviceData: ServiceType[] = [
  {
    image: flight2,
    tag: 'Honeymoon Sweets',
    title: 'Maldives Sunshine Hotel'
  },
  {
    image: flight1,
    tag: 'Royal Stay',
    title: 'Booking Grad Palace Japan'
  },
  {
    image: flight3,
    tag: 'Adventure Stay',
    title: 'Golf & Spa Resort in New York'
  }
]
