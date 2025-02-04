import client7 from '@/assets/images/client/07.svg'
import client8 from '@/assets/images/client/08.svg'
import client9 from '@/assets/images/client/09.svg'

import flight1 from '@/assets/images/category/flight/01.jpg'
import flight2 from '@/assets/images/category/flight/02.jpg'
import flight3 from '@/assets/images/category/flight/03.jpg'
import flight4 from '@/assets/images/category/flight/04.jpg'

import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'

import type { BlogType, DestinationType, OffersType } from '@/views/flights/Home/type'

export const spacialOffers: OffersType[] = [
  {
    image: client7,
    off: '$899',
    flightType: 'On Domestic Flights',
    variant: 'success',
    couponCode: '8B99OFF'
  },
  {
    image: client8,
    off: '13%',
    flightType: 'On Domestic Flights',
    variant: 'danger',
    couponCode: '13PO7FF'
  },
  {
    image: client9,
    off: '$2,400',
    flightType: 'On International Flights',
    variant: 'info',
    couponCode: 'LOG165F'
  }
]

export const popularDestinations: DestinationType[] = [
  {
    name: 'Thailand',
    rating: 4.3,
    flightInterval: 'The next flight is on 26th Dec',
    information: 'COVID-19 test required Vaccinated travelers can visit',
    image: flight1,
    link: { name: 'flights.list' }
  },
  {
    name: 'Hong Kong',
    rating: 4.6,
    flightInterval: 'Daily 1 flight',
    image: flight3,
    link: { name: 'flights.list' }
  },
  {
    name: 'Maldives',
    rating: 4.3,
    flightInterval: '2 flights every week',
    information: 'Vaccinated travelers can visit. Masks required',
    image: flight2,
    link: { name: 'flights.list' }
  },
  {
    name: 'Switzerland',
    rating: 4.3,
    flightInterval: 'Filling fast, next available flight on 2nd Oct',
    image: flight4,
    link: { name: 'flights.list' }
  }
]

export const blogs: BlogType[] = [
  {
    title: 'Story of water world adventure',
    author: 'Jacqueline Miller',
    image: blog2,
    link: { name: 'pages.blog.detail' }
  },
  {
    title: 'How Hotel Technology Can Help Small Hotel Businesses',
    author: 'Frances Guerrero',
    image: blog3,
    link: { name: 'pages.blog.detail' }
  },
  {
    title: 'Hotel Service - Become a Guide for Your Guests',
    author: 'Louis Ferguson',
    image: blog4,
    link: { name: 'pages.blog.detail' }
  }
]
