<template>
  <b-card no-body class="border">
    <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
      <div class="d-flex align-items-center mb-2 mb-sm-0">
        <img :src="flightLogo" class="w-30px me-2" alt="" />
        <h6 class="fw-normal mb-0">Blogzine Airline (FFR - 5682)</h6>
      </div>
      <h6 class="fw-normal mb-0"><span class="text-body">Travel Class:</span> Economy</h6>
    </b-card-header>

    <b-card-body class="p-4 pb-0">
      <b-row class="g-4">
        <b-col sm="4" md="3">
          <h4>14:50</h4>
          <p class="mb-0">BOM - Terminal 2 Mumbai, India</p>
        </b-col>

        <b-col sm="4" md="3" class="my-sm-auto text-center">
          <h5>9hr 50min</h5>
          <div class="position-relative my-4">
            <hr class="bg-primary opacity-5 position-relative" />
            <div
              class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
            >
              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
            </div>
          </div>
        </b-col>

        <b-col sm="4" md="3">
          <h4>07:35</h4>
          <p class="mb-0">JFK - Terminal 2 New York, USA</p>
        </b-col>

        <b-col md="3" class="text-md-end">
          <h4>{{ currency }}18,500</h4>
          <router-link :to="{ name: 'flights.details' }" class="btn btn-dark mb-0 mb-sm-2"
            >Book Now</router-link
          >
          <b-button
            variant="link"
            v-b-modal.flightdetail
            class="text-decoration-underline p-0 mb-0"
          >
            <BIconEyeFill class="ms-1 mb-1" />
            Flight Details
          </b-button>
        </b-col>
      </b-row>
    </b-card-body>

    <div class="card-footer pt-4">
      <ul
        class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2"
      >
        <li class="list-inline-item text-danger">Only 10 Seat Left</li>
        <li class="list-inline-item text-danger">Non-Refundable</li>
      </ul>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
import flightLogo from '@/assets/images/element/13.svg'
import { currency } from '@/helpers/constants'
</script>
