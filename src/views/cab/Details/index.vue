<template>
  <NavBar4 />

  <main>
    <MainTitle />

    <CabDetail />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/cab/Details/components/NavBar4.vue'
import MainTitle from '@/views/cab/Details/components/MainTitle.vue'
import CabDetail from '@/views/cab/Details/components/CabDetail.vue'
import Footer from '@/views/cab/Details/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
