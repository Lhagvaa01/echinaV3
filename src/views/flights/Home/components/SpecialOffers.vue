<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <h4 class="mb-0">Special Offers</h4>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col v-for="(offer, idx) in spacialOffers" :key="idx" sm="6" lg="4" xl="3">
          <OfferCard :offer="offer" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import OfferCard from '@/views/flights/Home/components/OfferCard.vue'
import { spacialOffers } from '@/views/flights/Home/data'
</script>
