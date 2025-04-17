const landingRoute = [
  {
    path: '/landing',
    name: 'landing',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/Landing/index.vue')
  }
]

const hotelRoutes = [
  {
    path: '/',
    name: 'flights.home',
    meta: {
      title: 'Home - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/flights/Home/index.vue')
  },
  {
    path: '/flights/List',
    name: 'flights.list',
    meta: {
      title: 'List - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/flights/List/index.vue')
  },
  {
    path: '/ss',
    name: 'hotels.home',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/Home/index.vue')
  },
  {
    path: '/hotels/chain',
    name: 'hotels.chain',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/Chain/index.vue')
  },
  {
    path: '/hotels/resort',
    name: 'hotels.resort',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/Resort/index.vue')
  },
  {
    path: '/hotels/grid',
    name: 'hotels.grid',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/Grid/index.vue')
  },
  {
    path: '/hotels/list',
    name: 'hotels.list',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/List/index.vue')
  },
  {
    path: '/hotels/detail',
    name: 'hotels.details',
    meta: {
      title: 'Hotel Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/HotelDetails/index.vue')
  },
  {
    path: '/hotels/room-detail',
    name: 'hotels.room-details',
    meta: {
      title: 'Room Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/RoomDetails/index.vue')
  },
  {
    path: '/hotels/booking',
    name: 'hotels.booking',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/hotels/Booking/index.vue')
  }
]

const flightRoutes = [
  
  
  {
    path: '/flights/detail',
    name: 'flights.details',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/flights/Details/index.vue')
  },
  {
    path: '/flights/booking',
    name: 'flights.booking',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/flights/Booking/index.vue')
  },{
    path: '/flights/OrderInfo',
    name: 'flights.OrderInfo',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/flights/OrderInfo/index.vue')
  }
]

const toursRoutes = [
  {
    path: '/tour/home',
    name: 'tour.home',
    meta: {
      title: 'Home - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/tour/Home/index.vue')
  },
  {
    path: '/tour/grid',
    name: 'tour.grid',
    meta: {
      title: 'Grid - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/tour/Grid/index.vue')
  },
  {
    path: '/tour/detail',
    name: 'tour.detail',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/tour/Details/index.vue')
  },
  {
    path: '/tour/booking',
    name: 'tour.booking',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/tour/Booking/index.vue')
  }
]

const cabsRoutes = [
  {
    path: '/cabs/home',
    name: 'cabs.home',
    meta: {
      title: 'Home - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/cab/Home/index.vue')
  },
  {
    path: '/cabs/list',
    name: 'cabs.list',
    meta: {
      title: 'List - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/cab/List/index.vue')
  },
  {
    path: '/cabs/detail',
    name: 'cabs.detail',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/cab/Details/index.vue')
  },
  {
    path: '/cabs/booking',
    name: 'cabs.booking',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/cab/Booking/index.vue')
  }
]

const directoryRoutes = [
  {
    path: '/directories/home',
    name: 'directories.home',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/directories/Home/index.vue')
  },
  {
    path: '/directories/detail',
    name: 'directories.detail',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/directories/Details/index.vue')
  }
]

const addListingRoutes = [
  {
    path: '/listings/add',
    name: 'listings.add',
    meta: {
      title: 'Add Listing - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listings/AddListing/index.vue')
  },
  {
    path: '/listings/join-us',
    name: 'listings.join-us',
    meta: {
      title: 'Join Us - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listings/JoinUs/index.vue')
  },
  {
    path: '/listings/add-minimal',
    name: 'listings.add-minimal',
    meta: {
      title: 'Details - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listings/AddMinimal/index.vue')
  },
  {
    path: '/listings/added',
    name: 'listings.added',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listings/Added/index.vue')
  }
]

const heroesRoutes = [
  {
    path: '/heroes/inline-form',
    name: 'heroes.inline-form',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/heroes/InlineForm/index.vue')
  },
  {
    path: '/heroes/multiple-search',
    name: 'heroes.multiple-search',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/heroes/MultipleSearch/index.vue')
  },
  {
    path: '/heroes/image-gallery',
    name: 'heroes.image-gallery',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/heroes/ImageGallery/index.vue')
  },
  {
    path: '/heroes/split',
    name: 'heroes.split',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/heroes/Split/index.vue')
  }
]

const listingPagesRoutes = [
  {
    path: '/offer-detail',
    name: 'offer-detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listing-pages/OfferDetail/index.vue')
  },
  {
    path: '/compare-listing',
    name: 'compare-listing',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listing-pages/CompareListing/index.vue')
  },
  {
    path: '/booking-confirmed',
    name: 'booking-confirmed',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/listing-pages/BookingConfirm/index.vue')
  }
]

const pagesRoute = [
  {
    path: '/pages/about',
    name: 'pages.about',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/About/index.vue')
  },
  {
    path: '/pages/contact',
    name: 'pages.contact',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Contact.vue')
  },
  {
    path: '/pages/contact-2',
    name: 'pages.contact-2',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Contact2.vue')
  },
  {
    path: '/pages/our-team',
    name: 'pages.our-team',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Team/index.vue')
  },
  {
    path: '/help/center',
    name: 'pages.help.center',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Help/Center/index.vue')
  },
  {
    path: '/help/detail',
    name: 'pages.help.detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Help/Detail/index.vue')
  },
  {
    path: '/help/privacy-policy',
    name: 'pages.help.privacy-policy',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Help/PrivacyPolicy/index.vue')
  },
  {
    path: '/help/service',
    name: 'pages.help.service',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Help/TermsOfServices/index.vue')
  },
  {
    path: '/pricing',
    name: 'pages.pricing',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Pricing/index.vue')
  },
  {
    path: '/blog',
    name: 'pages.blog',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Blogs/Blog/index.vue')
  },
  {
    path: '/blog/detail',
    name: 'pages.blog.detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Blogs/Blog-detail/index.vue')
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/ComingSoon.vue')
  },
  {
    path: '/error-404',
    name: 'error-404',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Error404.vue')
  },
  {
    path: '/faq',
    name: 'pages.faq',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/pages/Faq.vue')
  }
]

const userRoutes = [
  {
    path: '/user/profile',
    name: 'user.profile',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/Profile/index.vue')
  },
  {
    path: '/user/bookings',
    name: 'user.bookings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/Bookings/index.vue')
  },
  {
    path: '/user/travelers',
    name: 'user.travelers',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/Travelers/index.vue')
  },
  {
    path: '/user/payment-details',
    name: 'user.payment-details',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/PaymentDetails/index.vue')
  },
  {
    path: '/user/wishlist',
    name: 'user.wishlist',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/Wishlist/index.vue')
  },
  {
    path: '/user/settings',
    name: 'user.settings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/Settings/index.vue')
  },
  {
    path: '/user/delete-profile',
    name: 'user.delete-profile',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/user/DeleteProfile/index.vue')
  }
]

const agentRoutes = [
  {
    path: '/agent/dashboard',
    name: 'agent.dashboard',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Dashboard/index.vue')
  },
  {
    path: '/agent/listings',
    name: 'agent.listings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Listings/index.vue')
  },
  {
    path: '/agent/bookings',
    name: 'agent.bookings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Bookings/index.vue')
  },
  {
    path: '/agent/activities',
    name: 'agent.activities',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Activities/index.vue')
  },
  {
    path: '/agent/earnings',
    name: 'agent.earnings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Earnings/index.vue')
  },
  {
    path: '/agent/reviews',
    name: 'agent.reviews',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Reviews/index.vue')
  },
  {
    path: '/agent/settings',
    name: 'agent.settings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/agent/Settings/index.vue')
  }
]

const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: 'admin.dashboard',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/Dashboard/index.vue')
  },
  {
    path: '/admin/bookings/list',
    name: 'admin.bookings.list',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/bookings/List/index.vue')
  },
  {
    path: '/admin/bookings/detail',
    name: 'admin.bookings.detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/bookings/Detail/index.vue')
  },
  {
    path: '/admin/guests/list',
    name: 'admin.guests.list',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/guests/List/index.vue')
  },
  {
    path: '/admin/guests/detail',
    name: 'admin.guests.detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/guests/Detail/index.vue')
  },
  {
    path: '/admin/agents/list',
    name: 'admin.agents.list',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/agents/List/index.vue')
  },
  {
    path: '/admin/agents/detail',
    name: 'admin.agents.detail',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/agents/Detail/index.vue')
  },
  {
    path: '/admin/reviews',
    name: 'admin.reviews',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/Reviews/index.vue')
  },
  {
    path: '/admin/earnings',
    name: 'admin.earnings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/Earnings/index.vue')
  },
  {
    path: '/admin/settings',
    name: 'admin.settings',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme',
      authRequired: true
    },
    component: () => import('@/views/admin/Settings/index.vue')
  }
]

const otherRoutes = [
  {
    path: '/not-found',
    name: 'not-found',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/NotFound/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'not-found'
  }
]

const authRoutes = [
  {
    path: '/sign-in',
    name: 'auth.sign-in',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/auth/SignIn/index.vue')
  },
  {
    path: '/sign-up',
    name: 'auth.sign-up',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/auth/SignUp/index.vue')
  },
  {
    path: '/forgot-password',
    name: 'auth.forgot-password',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/auth/ForgotPassword/index.vue')
  },
  {
    path: '/two-factor',
    name: 'auth.two-factor',
    meta: {
      title: 'Booking - Multipurpose Online Booking Theme'
    },
    component: () => import('@/views/auth/TwoFactor/index.vue')
  }
]

const listingRoutes = [
  ...hotelRoutes,
  ...flightRoutes,
  ...toursRoutes,
  ...cabsRoutes,
  ...directoryRoutes,
  ...addListingRoutes,
  ...heroesRoutes,
  ...listingPagesRoutes
]

const accountRoutes = [...userRoutes, ...agentRoutes, ...adminRoutes]

export const allRoutes = [
  ...landingRoute,
  ...listingRoutes,
  ...pagesRoute,
  ...accountRoutes,
  ...otherRoutes,
  ...authRoutes
]
