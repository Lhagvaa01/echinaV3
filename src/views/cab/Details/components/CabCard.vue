<template>
  <b-card no-body class="border p-4">
    <b-card-body class="p-0">
      <b-row class="g-4 align-items-center">
        <b-col md="4">
          <div class="bg-light rounded-3 px-4 py-5">
            <img :src="vehicle1" alt="vehicle-Img" />
          </div>
        </b-col>

        <b-col md="8">
          <div class="d-sm-flex justify-content-sm-between">
            <div>
              <b-card-title class="mb-2">Camry, Accord</b-card-title>
              <ul class="nav nav-divider h6 fw-normal mb-2">
                <li class="nav-item">SEDAN</li>
                <li class="nav-item">AC</li>
                <li class="nav-item">4 Seats</li>
              </ul>
            </div>

            <ul class="list-inline mb-0">
              <li
                v-for="(_star, idx) in new Array(Math.floor(4.5))"
                :key="idx"
                class="list-inline-item me-1"
              >
                <font-awesome-icon :icon="faStarFill" class="text-warning" />
              </li>
              <li v-if="!Number.isInteger(4.5)" class="list-inline-item me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
              </li>
              <template v-if="4.5 < 5">
                <li
                  v-for="(_val, idx) in new Array(5 - Math.ceil(4.5))"
                  :key="idx"
                  class="list-inline-item me-0"
                >
                  <font-awesome-icon :icon="faStar" class="text-warning"></font-awesome-icon>
                </li>
              </template>
            </ul>
          </div>

          <ul class="list-group list-group-borderless mt-2 mb-0">
            <li class="list-group-item d-flex pb-0 mb-0">
              <span class="h6 fw-normal mb-0">
                <BIconCheckCircle class="me-2" />600Kms included. After that {{ currency }}15/Kms
              </span>
            </li>
            <li class="list-group-item d-flex pb-0 mb-0">
              <span class="h6 fw-normal mb-0">
                <BIconCheckCircle class="me-2" />2 luggage bags
              </span>
            </li>
            <li class="list-group-item d-flex pb-0 mb-0">
              <span class="h6 fw-normal mb-0"> <BIconCheckCircle class="me-2" />Diesel Car </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card-body>

    <b-card-footer class="p-0 pt-4">
      <div class="hstack gap-3 flex-wrap">
        <h6
          class="bg-success bg-opacity-10 text-success fw-light rounded-2 d-inline-block mb-0 py-2 px-4"
        >
          Free Cancellation, till 1 hour of Pick up
        </h6>
        <h6
          class="bg-success bg-opacity-10 text-success fw-light rounded-2 d-inline-block mb-0 py-2 px-4"
        >
          Free waiting up to 45 minutes
        </h6>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import vehicle1 from '@/assets/images/category/cab/sedan.svg'
import { faStar as faStarFill, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { BIconCheckCircle } from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'
</script>
