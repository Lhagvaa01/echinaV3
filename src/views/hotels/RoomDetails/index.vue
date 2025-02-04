<template>
  <NavBar4 />

  <main>
    <RoomGallery />

    <RoomDetails />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/hotels/RoomDetails/components/NavBar4.vue'
import RoomGallery from '@/views/hotels/RoomDetails/components/RoomGallery.vue'
import RoomDetails from '@/views/hotels/RoomDetails/components/RoomDetails.vue'
import Footer from '@/views/hotels/RoomDetails/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
