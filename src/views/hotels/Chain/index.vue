<template>
  <TopNavBar2 />

  <main>
    <Hero />

    <SpecialOfferSlider />

    <About />

    <NearbyPlaces />

    <Services />

    <ActionBox />

    <Gallery />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import TopNavBar2 from './components/NavBar2.vue'
import Hero from '@/views/hotels/Chain/components/Hero.vue'
import SpecialOfferSlider from '@/views/hotels/Chain/components/SpecialOfferSlider.vue'
import About from '@/views/hotels/Chain/components/About.vue'
import NearbyPlaces from '@/views/hotels/Chain/components/NearbyPlaces.vue'
import Services from '@/views/hotels/Chain/components/Services.vue'
import ActionBox from '@/views/hotels/Chain/components/ActionBox.vue'
import Gallery from '@/views/hotels/Chain/components/Gallery.vue'
import Footer from './components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
