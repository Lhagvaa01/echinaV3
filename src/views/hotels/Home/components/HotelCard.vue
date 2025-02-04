<template>
  <b-card no-body class="card-img-scale overflow-hidden bg-transparent">
    <div class="card-img-scale-wrapper rounded-3">
      <img :src="hotel.image" class="card-img" alt="hotel image" />
      <div class="position-absolute bottom-0 start-0 p-3">
        <div class="badge text-bg-dark fs-6 rounded-pill stretched-link d-flex">
          <BIconGeoAlt class="me-2" />
          {{ hotel.location }}
        </div>
      </div>
    </div>
    <b-card-body class="px-2">
      <b-card-title tag="h5">
        <router-link :to="{ name: hotel?.link?.name }" class="stretched-link">
          {{ hotel.name }}
        </router-link>
      </b-card-title>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="text-success mb-0">
          {{ currency }}
          {{ hotel.price }} <small class="fw-light">/starting at</small>
        </h6>
        <h6 class="mb-0 d-flex">
          {{ hotel.ratings }}
          <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
        </h6>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { FeaturedHotelType } from '@/views/hotels/Home/type'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { BIconGeoAlt } from 'bootstrap-icons-vue'

import type { PropType } from 'vue'
import { currency } from '@/helpers/constants'

defineProps({
  hotel: {
    type: Object as PropType<FeaturedHotelType>,
    required: true
  }
})
</script>
