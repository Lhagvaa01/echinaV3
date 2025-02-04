<template>
  <NavBar4 />

  <main>
    <section>
      <b-container class="position-relative" data-sticky-container>
        <b-row class="g-4">
          <b-col xl="9">
            <div class="vstack gap-4">
              <div class="d-flex align-items-center">
                <h1 class="display-4 mb-0">
                  <font-awesome-icon :icon="faPlane" class="rtl-flip" />
                </h1>
                <div class="ms-3">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item me-2">
                      <h3 class="mb-0">Mumbai(BOM)</h3>
                    </li>
                    <li class="list-inline-item me-2">
                      <h3 class="mb-0">
                        <BIconArrowRight class="mb-1 mx-1" />
                      </h3>
                    </li>
                    <li class="list-inline-item me-0">
                      <h3 class="mb-0">New York(JFK)</h3>
                    </li>
                  </ul>
                  <ul class="nav nav-divider h6 fw-normal text-body mb-0">
                    <li class="nav-item">25 Jan</li>
                    <li class="nav-item">1 Stop</li>
                    <li class="nav-item">05h 25m</li>
                  </ul>
                </div>
              </div>
              <BaggageFareRules />
              <Information />
              <TravelerDetails />
            </div>
          </b-col>

          <aside class="col-xl-3">
            <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="1199">
              <b-row class="g-4">
                <FareSummary />
                <OfferDiscount />
                <CancelPolicy />
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
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import NavBar4 from '@/views/flights/Details/components/NavBar4.vue'
import BaggageFareRules from '@/views/flights/Details/components/BaggageFareRules.vue'
import Information from '@/views/flights/Details/components/Information.vue'
import TravelerDetails from '@/views/flights/Details/components/TravelerDetails.vue'
import FareSummary from '@/views/flights/Details/components/FareSummary.vue'
import OfferDiscount from '@/views/flights/Details/components/OfferDiscount.vue'
import CancelPolicy from '@/views/flights/Details/components/CancelPolicy.vue'
import Footer from '@/views/flights/Details/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
import CustomStickyElement from '@/components/CustomStickyElement.vue'
</script>
