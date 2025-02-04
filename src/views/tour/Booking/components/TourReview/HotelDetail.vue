<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom d-flex justify-content-between">
      <h5 class="mb-0">Hotel Details</h5>
      <a
        href="#"
        class="btn btn-link p-0 mb-0 text-primary-hover text-reset text-decoration-underline"
        >View details</a
      >
    </b-card-header>

    <b-card-body>
      <template v-for="(hotel, idx) in hotelDetails" :key="idx">
        <b-row>
          <b-col sm="8">
            <h6>{{ hotel.name }}</h6>
            <h6 class="mb-1 fw-light">
              <span class="text-secondary">Room:</span> {{ hotel.room }}
            </h6>
            <ul class="list-inline mb-0">
              <li
                v-for="(_star, idx) in Array.from(new Array(Math.floor(hotel.rating)))"
                :key="idx"
                class="list-inline-item me-0 small"
              >
                <font-awesome-icon :icon="faStarFill" class="text-warning me-1" />
              </li>
              <li v-if="!Number.isInteger(hotel.rating)" class="list-inline-item me-0 small">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
              </li>
              <template v-if="hotel.rating < 5">
                <li
                  v-for="(_star, idx) in Array.from(new Array(5 - Math.ceil(hotel.rating)))"
                  :key="idx"
                  class="list-inline-item me-0 small"
                >
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                </li>
              </template>
            </ul>
          </b-col>
          <b-col sm="4">
            <h6 class="mb-0">{{ hotel.date }}</h6>
            <p class="text-success mb-0">Breakfast Included</p>
          </b-col>
        </b-row>

        <hr v-if="idx != hotelDetails.length - 1" />
      </template>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faStar as faStarFill, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { hotelDetails } from '@/views/tour/Booking/data'
</script>
