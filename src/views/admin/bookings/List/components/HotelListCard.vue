<template>
  <b-row
    class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-6 g-2 g-sm-4 align-items-md-center border-bottom px-2 py-4"
  >
    <b-col>
      <small class="d-block d-xxl-none">Room name:</small>
      <div class="d-flex align-items-center">
        <div class="w-80px flex-shrink-0">
          <img :src="hotel.image" class="rounded" />
        </div>
        <h6 class="mb-0 ms-2">{{ hotel.name }}</h6>
      </div>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Bed Type:</small>
      <h6 class="mb-0 fw-normal">{{ hotel.bed }}</h6>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Room Floor:</small>
      <h6 class="mb-0 fw-normal">{{ hotel.floor }}</h6>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Amount:</small>
      <h6 class="text-success mb-0">
        {{ currency }}
        {{ hotel.price }}
      </h6>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Payment:</small>
      <ul class="list-inline mb-0">
        <li
          v-for="(_star, idx) in new Array(Math.floor(hotel.rating))"
          :key="idx"
          class="list-inline-item me-1 small"
        >
          <font-awesome-icon :icon="faStarFill" class="text-warning" />
        </li>
        <li v-if="!Number.isInteger(hotel.rating)" class="list-inline-item me-1 small">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <template v-if="hotel.rating < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(hotel.rating))"
            :key="idx"
            class="list-inline-item me-0 small"
          >
            <font-awesome-icon :icon="faStar" class="text-warning"></font-awesome-icon>
          </li>
        </template>
      </ul>
    </b-col>
    <b-col>
      <router-link :to="{ name: hotel.link?.name }" class="btn btn-sm btn-light mb-0">
        View
      </router-link>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { faStar as faStarFill, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { currency } from '@/helpers/constants'

import type { PropType } from 'vue'
import type { HotelType } from '@/views/admin/bookings/List/types'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
