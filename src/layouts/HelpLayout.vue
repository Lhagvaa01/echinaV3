<template>
  <NavBar12 />
  <main>
    <slot />
  </main>
  <Footer />
  <BackToTop />
</template>

<script lang="ts" setup>
import NavBar12 from '@/layouts/partials/NavBar12.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
