import type { currency } from '@/helpers/constants';
<template>
  <b-col md="6" xl="12">
    <b-card no-body class="shadow rounded-2">
      <b-card-header class="border-bottom">
        <b-card-title tag="h5" class="mb-0">Price Summary</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Room Charges</span>
            <span class="fs-5">{{ currency }}28,660</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0"
              >Total Discount<span class="badge text-bg-danger smaller mb-0 ms-2"
                >10% off</span
              ></span
            >
            <span class="fs-5 text-success">-{{ currency }}2,560</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Price after discount</span>
            <span class="fs-5">{{ currency }}1852</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Taxes % Fees</span>
            <span class="fs-5">{{ currency }}350</span>
          </li>
        </ul>
      </b-card-body>

      <div class="card-footer border-top">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0">Payable Now</span>
          <span class="h5 mb-0">{{ currency }}22,500</span>
        </div>
      </div>
    </b-card>
  </b-col>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
</script>
