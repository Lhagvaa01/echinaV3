<template>
  <b-card-header class="border-bottom d-md-flex justify-content-md-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="icon-lg bg-light rounded-circle flex-shrink-0">
        <font-awesome-icon :icon="booking.icon" />
      </div>
      <div class="ms-2">
        <b-card-title tag="h6" class="mb-0">{{ booking.travelRoute }}</b-card-title>
        <ul class="nav nav-divider small">
          <li class="nav-item">Booking ID: {{ booking.id }}</li>
          <li class="nav-item">{{ booking.flightType }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-2 mt-md-0">
      <a href="#" class="btn btn-primary-soft mb-0">Manage Booking</a>
      <p v-if="booking.cancelled" class="text-danger text-md-end mb-0">Booking cancelled</p>
    </div>
  </b-card-header>

  <b-card-body>
    <b-row class="g-3">
      <b-col sm="6" md="4" v-for="(item, idx) in booking.timing" :key="idx">
        <span>{{ item.label }}</span>
        <h6 class="mb-0">{{ item.name }}</h6>
      </b-col>
    </b-row>
  </b-card-body>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BookingType } from '@/views/user/Bookings/data'

defineProps({
  booking: {
    type: Object as PropType<BookingType>,
    required: true
  }
})
</script>
