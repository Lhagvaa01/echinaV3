<template>
  <TopNavBar4 />

  <main>
    <Hero />

    <HotelListFilter />

    <HotelGridLayout />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import TopNavBar4 from '@/views/hotels/Grid/components/NavBar4.vue'
import Hero from '@/views/hotels/Grid/components/Hero.vue'
import HotelListFilter from '@/views/hotels/Grid/components/HotelListFilter.vue'
import HotelGridLayout from '@/views/hotels/Grid/components/HotelGridLayout.vue'
import Footer from '@/views/hotels/Grid/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
