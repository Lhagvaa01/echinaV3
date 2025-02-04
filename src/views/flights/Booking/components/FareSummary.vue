<template>
  <b-col md="6" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">Fare Summary</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0"
              >Base Fare
              <a
                tabindex="0"
                v-b-popover.focus.bottom="'COVID-19 test required Vaccinated travelers can visit'"
              >
                <BIconInfoCircle class="mb-1" />
              </a>
            </span>
            <span class="fs-5">{{ currency }}38,660</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0">Discount</span>
            <span class="fs-5 text-success">+{{ currency }}2,560</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0">Other Services</span>
            <span class="fs-5">{{ currency }}20</span>
          </li>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 fw-normal mb-0">Total Fare</span>
          <span class="h5 fw-normal mb-0">{{ currency }}36,500</span>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
</script>
