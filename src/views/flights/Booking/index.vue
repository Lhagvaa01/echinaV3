<template>
  <Header />

  <main>


    <Stepper :step="3" />
    <section>
      <b-container class="position-relative" data-sticky-container>
        <b-row class="g-4">
          <b-col xl="8">
            <div class="vstack gap-4">
              <PaymentDetails />
              <TravelerInfo />

              <Warning />
              <!-- <div v-if="showTariffRules">
                <TariffRulesModal :tariffRules="TariffRules" />
              </div> -->
            </div>
          </b-col>

          <aside class="col-xl-4">
            <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="1199">
              <b-row class="g-4">
                <FareSummary />
                <!-- <YourBooking /> -->
              </b-row>
            </CustomStickyElement>
          </aside>
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/flights/Booking/components/NavBar4.vue'
import Header from '@/components/NewNavbar.vue'
import PaymentDetails from '@/views/flights/Booking/components/PaymentDetails.vue'
import TravelerInfo from '@/views/flights/Booking/components/TravelerInfo.vue'
import Warning from '@/views/flights/Booking/components/Warning.vue'
import FareSummary from '@/views/flights/Booking/components/FareSummary.vue'
import YourBooking from '@/views/flights/Booking/components/YourBooking.vue'
import Footer from '@/views/flights/Booking/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
import Stepper from '../Components/Stepper.vue'
</script>
