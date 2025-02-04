<template>
  <NavBar4 />

  <main>
    <Hero />

    <DetailTabs />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/tour/Details/components/NavBar4.vue'
import Hero from '@/views/tour/Details/components/Hero.vue'
import DetailTabs from '@/views/tour/Details/components/DetailTabs.vue'
import Footer from '@/views/tour/Details/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
