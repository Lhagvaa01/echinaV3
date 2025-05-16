<template>
  <NavBar11 />

  <main>
    <slot />
  </main>

  <Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
// import NavBar11 from '@/layouts/partials/NavBar11.vue'
// import Footer from '@/layouts/partials/Footer.vue'
import NavBar11 from '@/components/NewNavbar.vue'
import Footer from '@/components/NewFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
