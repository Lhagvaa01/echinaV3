<template>
  <b-alert v-model="showAlert" variant="warning" fade dismissible close-class="pb-2"
    class="py-2 m-0 bg-primary border-0 rounded-0 show text-center overflow-hidden">
    <p class="text-white m-0">
      Traveling internationally? Get update information on COVID-19 travel guidance and
      restrictions<a href="#" class="btn btn-xs btn-dark ms-2 mb-0">Learn more!</a>
    </p>
  </b-alert>

  <Header />

  <main>
    <Hero />

    <!-- <SpecialOffers /> -->

    <PopularDestinations />

    <DestinationSteps />

    <!-- <ActionBox /> -->

    <!-- <BlogsAndNews /> -->
  </main>

  <NewFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar5 from '@/views/flights/Home/components/NavBar5.vue'
import Header from '@/components/NewNavbar.vue'
import Hero from '@/views/flights/Home/components/Hero.vue'
import SpecialOffers from '@/views/flights/Home/components/SpecialOffers.vue'
import PopularDestinations from '@/views/flights/Home/components/PopularDestinations.vue'
import DestinationSteps from '@/views/flights/Home/components/DestinationSteps.vue'
import ActionBox from '@/views/flights/Home/components/ActionBox.vue'
import BlogsAndNews from '@/views/flights/Home/components/BlogsAndNews.vue'
import Footer4 from '@/views/flights/Home/components/Footer4.vue'
import NewFooter from '@/components/NewFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import { ref } from 'vue'

const showAlert = ref(true)
</script>
