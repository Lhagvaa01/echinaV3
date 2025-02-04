<template>
  <TopNavBar3 />

  <main>
    <Hero />

    <About />

    <TestimonialsSlider />

    <FavoriteRoomSlider />

    <MonthlyOffers />

    <Gallery />

    <ActionBox />
  </main>

  <Footer2 />

  <BackToTop />
</template>

<script setup lang="ts">
import TopNavBar3 from '@/views/hotels/Resort/components/NavBar3.vue'
import Hero from '@/views/hotels/Resort/components/Hero.vue'
import About from '@/views/hotels/Resort/components/About.vue'
import TestimonialsSlider from '@/views/hotels/Resort/components/TestimonialsSlider.vue'
import FavoriteRoomSlider from '@/views/hotels/Resort/components/FavoriteRoomSlider.vue'
import MonthlyOffers from '@/views/hotels/Resort/components/MonthlyOffers.vue'
import Gallery from '@/views/hotels/Resort/components/Gallery.vue'
import ActionBox from '@/views/hotels/Resort/components/ActionBox.vue'
import Footer2 from '@/views/hotels/Resort/components/Footer2.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
