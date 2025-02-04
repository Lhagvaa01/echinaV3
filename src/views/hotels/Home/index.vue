<template>
  <NavBar />

  <main>
    <Hero />

    <OfferSlider />

    <FeaturedHoliday />

    <FeaturedHotels />

    <Clients />

    <Testimonial />

    <NearbyPlaces />

    <AppsLink />
  </main>

  <Footer />

  <MobileBottomMenu />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar from '@/views/hotels/Home/components/NavBar.vue'
import Hero from '@/views/hotels/Home/components/Hero.vue'
import OfferSlider from '@/views/hotels/Home/components/OfferSlider.vue'
import FeaturedHoliday from '@/views/hotels/Home/components/FeaturedHoliday.vue'
import FeaturedHotels from '@/views/hotels/Home/components/FeaturedHotels.vue'
import Clients from '@/views/hotels/Home/components/Clients.vue'
import Testimonial from '@/views/hotels/Home/components/Testimonial.vue'
import NearbyPlaces from '@/views/hotels/Home/components/NearbyPlaces.vue'
import AppsLink from './components/AppsLink.vue'
import Footer from '@/views/hotels/Home/components/Footer.vue'
import MobileBottomMenu from './components/MobileBottomMenu.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
