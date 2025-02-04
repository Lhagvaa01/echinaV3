<template>
  <NavBar4 />

  <main>
    <Hero />

    <HotelLists />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/hotels/List/components/NavBar4.vue'
import Hero from '@/views/hotels/List/components/Hero.vue'
import HotelLists from '@/views/hotels/List/components/HotelLists.vue'
import Footer from '@/views/hotels/List/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
