import { currency } from '@/helpers/constants';
<template>
  <aside class="col-xl-5 d-none d-xl-block">
    <b-card no-body class="bg-transparent border">
      <b-card-header class="bg-transparent border-bottom">
        <b-card-title class="mb-0">Price Summary</b-card-title>
      </b-card-header>

      <b-card-body>
        <b-row class="g-4 mb-3">
          <b-col md="6">
            <div class="bg-light py-3 px-4 rounded-3">
              <h6 class="fw-light small mb-1">Check-in</h6>
              <h6 class="mb-0">4 March 2022</h6>
            </div>
          </b-col>

          <b-col md="6">
            <div class="bg-light py-3 px-4 rounded-3">
              <h6 class="fw-light small mb-1">Check out</h6>
              <h6 class="mb-0">8 March 2022</h6>
            </div>
          </b-col>
        </b-row>

        <ul class="list-group list-group-borderless mb-3">
          <li class="list-group-item px-2 d-flex justify-content-between">
            <span class="h6 fw-light mb-0">{{ currency }}6,100 x 2 Nights</span>
            <span class="h6 fw-light mb-0">{{ currency }}13,200</span>
          </li>
          <li class="list-group-item px-2 d-flex justify-content-between">
            <span class="h6 fw-light mb-0">10% campaign discount</span>
            <span class="h6 fw-light mb-0">-{{ currency }}500</span>
          </li>
          <li class="list-group-item px-2 d-flex justify-content-between">
            <span class="h6 fw-light mb-0">Services Fee</span>
            <span class="h6 fw-light mb-0">{{ currency }}100</span>
          </li>
          <li class="list-group-item bg-light d-flex justify-content-between rounded-2 px-2 mt-2">
            <span class="h5 fw-normal mb-0 ps-1">Total</span>
            <span class="h5 fw-normal mb-0">{{ currency }}13,500</span>
          </li>
        </ul>

        <div class="d-grid gap-2">
          <router-link :to="{ name: 'hotels.booking' }" class="btn btn-dark mb-0"
            >Continue To Book</router-link
          >
        </div>
      </b-card-body>
    </b-card>
  </aside>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
</script>
