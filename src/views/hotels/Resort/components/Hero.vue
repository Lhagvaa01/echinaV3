<template>
  <section
    class="position-relative py-8 py-sm-9"
    :style="{
      backgroundImage: `url(${resortBg})`,
      backgroundPosition: 'left center',
      backgroundSize: 'cover'
    }"
  >
    <div class="bg-overlay bg-dark opacity-2"></div>
    <b-container class="z-index-9 position-relative">
      <b-row>
        <b-col xl="8" class="m-auto text-center py-xl-8">
          <h1 class="display-4 text-white mb-3">A World Of Luxury Awaits You</h1>
          <h5 class="text-white mb-3">Discover a New Look of Luxury Resorts.</h5>
          <router-link to="#" class="btn btn-lg btn-dark mb-0">Discover More</router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import resortBg from '@/assets/images/category/hotel/resort/bg-01.jpg'
</script>
