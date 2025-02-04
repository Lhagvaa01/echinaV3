<template>
  <b-card no-body class="border">
    <b-card-body class="p-4 pb-0">
      <b-row class="g-4">
        <b-col md="3">
          <img :src="flightLogo" class="w-80px mb-3" alt="" />
          <h6 class="fw-normal mb-0">Phillippines Airline</h6>
          <h6 class="fw-normal mb-0">PA - 5620</h6>
        </b-col>

        <b-col sm="4" md="3">
          <h4>14:50</h4>
          <h6 class="mb-0">Sun, 29 Jan 2023</h6>
          <p class="mb-0">BOM - Terminal 2 Mumbai, India</p>
        </b-col>

        <b-col sm="4" md="3">
          <h4>07:35</h4>
          <h6 class="mb-0">Sun, 30 Jan 2023</h6>
          <p class="mb-0">JFK - Terminal 2 New York, USA</p>
        </b-col>

        <b-col sm="4" md="3">
          <h4>{{ currency }}18,500</h4>
          <router-link :to="{ name: 'flights.details' }" class="btn btn-dark">Book Now</router-link>
          <b-button
            variant="link"
            v-b-modal.flightdetail
            class="btn btn-link text-decoration-underline p-0 mb-0"
          >
            <BIconEyeFill class="ms-1 mb-1" />
            Flight Details
          </b-button>
        </b-col>
      </b-row>
    </b-card-body>

    <div class="card-footer p-4">
      <div class="bg-light p-2 rounded-2">
        <ul class="list-inline d-sm-flex justify-content-sm-between mb-0 mx-4">
          <li class="list-inline-item text-danger">Only 10 Seat Left</li>
          <li class="list-inline-item">Total time: 10h 35m</li>
          <li class="list-inline-item text-success">Refundable</li>
        </ul>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import flightLogo from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'
import { BIconEyeFill } from 'bootstrap-icons-vue'
</script>
