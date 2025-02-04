<template>
  <section class="pt-5 pt-md-8 pb-0">
    <b-container fluid class="px-lg-5">
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2>Offers Of The Month</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col v-for="(offer, idx) in monthlyOffers" cols="6" md="4" xl="2" :key="idx">
          <b-card no-body class="bg-transparent h-100">
            <img :src="offer.image" class="card-img" alt="offer-image" />
            <b-card-body class="text-center p-2">
              <h6 class="mb-0">
                <router-link to="#" class="stretched-link">
                  {{ offer.title }}
                </router-link>
              </h6>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="6" md="4" xl="2">
          <b-card no-body class="bg-transparent h-100">
            <div class="bg-light card-img position-relative h-100">
              <b-button
                variant="primary"
                size="lg"
                class="btn-round mb-0 position-absolute top-50 start-50 translate-middle"
              >
                <BIconArrowRight />
              </b-button>
            </div>
            <b-card-body class="text-center p-2">
              <h6 class="mb-0">
                <router-link to="#" class="stretched-link"> View All Offers</router-link>
              </h6>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { monthlyOffers } from '@/views/hotels/Resort/data'
</script>
