<template>
  <NavBar4 />

  <main>
    <Hero />

    <OurListings />

    <ActionBox />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/listing-pages/CompareListing/components/NavBar4.vue'
import Hero from '@/views/listing-pages/CompareListing/components/Hero.vue'
import ActionBox from '@/views/listing-pages/CompareListing/components/ActionBox.vue'
import OurListings from '@/views/listing-pages/CompareListing/components/OurListings.vue'
import Footer from '@/views/listing-pages/CompareListing/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
