<template>
  <b-card no-body class="border">
    <b-card-header>
      <div class="d-md-flex justify-content-md-between">
        <div class="d-flex align-items-center mb-2 mb-md-0">
          <img :src="element14" class="w-30px me-2" alt="" />
          <h6 class="fw-normal mb-0">Folio Airline (CCE - 2158)</h6>
        </div>
        <h6 class="fw-normal mb-0"><span class="text-body">Travel Class:</span> Economy</h6>
      </div>
    </b-card-header>

    <b-card-body class="p-4 pb-0">
      <b-row class="g-4 align-items-center">
        <b-col md="9">
          <b-row class="g-4">
            <b-col sm="4">
              <h4>14:50</h4>
              <h6 class="mb-0 fw-normal">Sun, 29 Jan 2023</h6>
              <p class="mb-0">BOM - Terminal 2 Mumbai, India</p>
            </b-col>

            <b-col sm="4" class="my-sm-auto text-center">
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

            <b-col sm="4">
              <h4>07:35</h4>
              <h6 class="mb-0 fw-normal">Sun, 30 Jan 2023</h6>
              <p class="mb-0">JFK - Terminal 2 New York, USA</p>
            </b-col>
          </b-row>

          <hr class="my-4" />

          <b-row class="g-4">
            <b-col sm="4">
              <h4>04:50</h4>
              <h6 class="mb-0 fw-normal">Sun, 19 Feb 2023</h6>
              <p class="mb-0">JFK - Terminal 2 New York, USA</p>
            </b-col>

            <b-col sm="4" class="my-sm-auto text-center">
              <h5>10hr 35min</h5>
              <div class="position-relative my-4">
                <hr class="bg-primary opacity-5 position-relative" />
                <div
                  class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
                >
                  <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                </div>
              </div>
            </b-col>

            <b-col sm="4">
              <h4>15:48</h4>
              <h6 class="mb-0 fw-normal">Sun, 19 Feb 2023</h6>
              <p class="mb-0">BOM - Terminal 2 Mumbai, India</p>
            </b-col>
          </b-row>
        </b-col>

        <b-col md="3" class="text-md-end">
          <h4>{{ currency }}18,500</h4>
          <router-link :to="{ name: 'flights.details' }" class="btn btn-dark mb-0 mb-sm-2"
            >Book Now</router-link
          >
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

    <b-card-footer class="pt-4">
      <div class="">
        <ul
          class="list-inline bg-light d-sm-flex text-center justify-content-sm-between rounded-2 py-2 px-4 mb-0"
        >
          <li class="list-inline-item text-danger">Only 10 Seat Left</li>
          <li class="list-inline-item text-success">Refundable</li>
        </ul>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import element14 from '@/assets/images/element/14.svg'
import { currency } from '@/helpers/constants'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
</script>
