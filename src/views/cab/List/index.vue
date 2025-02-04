<template>
  <NavBar4 />

  <main>
    <Hero />

    <CabCardList />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/cab/List/components/NavBar4.vue'
import Hero from '@/views/cab/List/components/Hero.vue'
import CabCardList from '@/views/cab/List/components/CabCardList.vue'
import Footer from '@/views/cab/List/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
