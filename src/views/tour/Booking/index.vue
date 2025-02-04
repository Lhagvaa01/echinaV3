<template>
  <NavBar4 />

  <main>
    <Hero />

    <Stepper />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/tour/Booking/components/NavBar4.vue'
import Hero from '@/views/tour/Booking/components/Hero.vue'
import Stepper from '@/views/tour/Booking/components/Stepper.vue'
import Footer from '@/views/tour/Booking/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
