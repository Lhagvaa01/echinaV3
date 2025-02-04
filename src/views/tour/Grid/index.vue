<template>
  <NavBar4 />

  <main>
    <MainBanner />

    <TourPlacesGrid />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import TourPlacesGrid from './components/TourPlacesGrid.vue'
import MainBanner from './components/MainBanner.vue'
import NavBar4 from '@/views/tour/Grid/components/NavBar4.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/views/tour/Grid/components/Footer.vue'
</script>
