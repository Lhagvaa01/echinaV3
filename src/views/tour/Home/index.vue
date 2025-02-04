<template>
  <NavBar />

  <main>
    <Hero />

    <Packages />

    <Subscribe />

    <Categories />

    <PlacesToVisit />
  </main>

  <Footer3 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar from '@/views/tour/Home/components/NavBar.vue'
import Hero from '@/views/tour/Home/components/Hero.vue'
import Packages from '@/views/tour/Home/components/Packages.vue'
import Subscribe from '@/views/tour/Home/components/Subscribe.vue'
import Categories from '@/views/tour/Home/components/Categories.vue'
import PlacesToVisit from '@/views/tour/Home/components/PlacesToVisit.vue'
import Footer3 from '@/views/tour/Home/components/Footer3.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
