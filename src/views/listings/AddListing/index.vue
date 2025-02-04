<template>
  <NavBar4 />

  <main>
    <Hero />

    <ListingForms />
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/listings/AddListing/components/NavBar4.vue'
import Hero from '@/views/listings/AddListing/components/Hero.vue'
import ListingForms from '@/views/listings/AddListing/components/ListingForms.vue'
import Footer5 from '@/views/listings/AddListing/components/Footer5.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
