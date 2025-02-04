<template>
  <b-card no-body class="card-hover-shadow pb-0 h-100">
    <div class="position-relative">
      <img :src="place.image" class="card-img-top" alt="Card image" />
      <div class="card-img-overlay d-flex flex-column p-4 z-index-1">
        <div>
          <span class="badge text-bg-danger me-1" v-if="place.sale">{{ place.sale }}</span>
          <span class="badge text-bg-dark">{{ place.category }}</span>
        </div>
        <div class="w-100 mt-auto">
          <span class="badge text-bg-white fs-6">{{ place.duration }}</span>
        </div>
      </div>
    </div>

    <b-card-body class="px-3">
      <b-card-title tag="h5" class="mb-0">
        <router-link :to="{ name: place.link?.name }" class="stretched-link"
          >{{ place.title }}
        </router-link>
      </b-card-title>
      <span class="small"><font-awesome-icon :icon="faCalendarAlt" class="me-2" />April 12-17</span>

      <ul class="nav nav-divider mt-3 mb-0">
        <li
          class="nav-item h6 fw-normal mb-0"
          v-for="(feature, index) in place.features"
          :key="index"
        >
          <font-awesome-icon :icon="feature.icon" :class="`text-${feature.color} me-1`" />
          {{ feature.text }}
        </li>
      </ul>
    </b-card-body>

    <b-card-footer class="pt-0">
      <div class="d-sm-flex justify-content-sm-between align-items-center flex-wrap">
        <div class="hstack gap-2">
          <h5 class="fw-normal text-success mb-0">${{ place.price }}</h5>
          <small>/per person</small>
          <span class="text-decoration-line-through" v-if="place.sale">{{ currency }}1800</span>
        </div>
        <div class="mt-2 mt-sm-0">
          <a href="#" class="btn btn-sm btn-primary mb-0">View Details</a>
        </div>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import type { PropType } from 'vue'
import type { PlaceType } from '@/views/tour/Grid/data'
import { currency } from '@/helpers/constants'

defineProps({
  place: {
    type: Object as PropType<PlaceType>,
    required: true
  }
})
</script>
