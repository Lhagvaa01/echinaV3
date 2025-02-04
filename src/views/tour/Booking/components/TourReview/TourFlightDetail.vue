<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom d-flex justify-content-between">
      <h5 class="mb-0">Flight Details</h5>
      <a
        href="#"
        class="btn btn-link p-0 mb-0 text-primary-hover text-reset text-decoration-underline"
        >View details</a
      >
    </b-card-header>

    <b-card-body>
      <TourFlightDetailCard
        v-for="(flight, idx) in tourFlightDetail"
        :flight="flight"
        :key="idx"
        :idx="idx"
      />
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import TourFlightDetailCard from '@/views/tour/Booking/components/TourReview/TourFlightDetailCard.vue'
import { tourFlightDetail } from '@/views/tour/Booking/data'
</script>
