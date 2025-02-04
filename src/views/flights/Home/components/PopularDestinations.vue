<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Popular Destinations</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col v-for="(destination, idx) in popularDestinations" :key="idx" sm="6" lg="3">
          <PopularDestinationCard :destination="destination" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import PopularDestinationCard from '@/views/flights/Home/components/PopularDestinationCard.vue'
import { popularDestinations } from '@/views/flights/Home/data'
</script>
