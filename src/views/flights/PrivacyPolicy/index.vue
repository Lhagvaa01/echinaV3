<template>
  <Header />

  <main>
    <!-- <section> -->
    <!-- <b-container> -->
    <b-row>
      <PrivacyPolicy />
      <!-- <aside class="col-xl-4">
            <b-row class="g-4">
              <FareSummary />
              <YourBooking />
            </b-row>
          </aside> -->
    </b-row>
    <!-- </b-container> -->
    <!-- </section> -->
  </main>

  <NewFooter />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/flights/Booking/components/NavBar4.vue'
import Header from '@/components/NewNavbar.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import Footer from '@/views/flights/Booking/components/Footer.vue'
import NewFooter from '@/components/NewFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
