<template>
  <NavBar4 />

  <main>
    <section class="pt-4 pt-lg-5">
      <b-container>
        <b-row class="g-4 g-xl-5">
          <Orderinfo />
          <!-- <aside class="col-xl-4">
            <b-row class="g-4">
              <FareSummary />
              <YourBooking />
            </b-row>
          </aside> -->
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/flights/Booking/components/NavBar4.vue'
import Orderinfo from './components/Orderinfo.vue'
import Footer from '@/views/flights/Booking/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
