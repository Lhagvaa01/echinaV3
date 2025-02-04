<template>
  <NavBar4 />

  <main>
    <AvailabilityFilter />

    <HotelAddress />

    <ImageGallery />

    <AboutHotel />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/hotels/HotelDetails/components/NavBar4.vue'
import AvailabilityFilter from '@/views/hotels/HotelDetails/components/AvailabilityFilter.vue'
import HotelAddress from '@/views/hotels/HotelDetails/components/HotelAddress.vue'
import ImageGallery from '@/views/hotels/HotelDetails/components/ImageGallery.vue'
import AboutHotel from '@/views/hotels/HotelDetails/components/AboutHotel.vue'
import Footer from '@/views/hotels/HotelDetails/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
