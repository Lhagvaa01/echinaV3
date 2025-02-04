<template>
  <section class="pt-0">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <div class="d-sm-flex justify-content-sm-between align-items-center">
            <div class="mb-3 mb-sm-0">
              <h1 class="fs-3">09 Flight Available</h1>
              <ul class="nav nav-divider h6 mb-0">
                <li class="nav-item">25 Jan</li>
                <li class="nav-item">1 Stop</li>
              </ul>
            </div>
            <button
              @click="toggleOffcanvas"
              class="btn btn-primary d-xl-none mb-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
            >
              <font-awesome-icon :icon="faSlidersH" class="me-1" />
              Show filters
            </button>
          </div>
        </b-col>
      </b-row>

      <div class="bg-primary bg-opacity-10 rounded-3 overflow-hidden mt-4 p-4">
        <b-row class="g-4 align-items-center">
          <b-col cols="6" md="3" class="text-center order-1">
            <img :src="element11" class="mb-n5" alt="" />
          </b-col>

          <b-col md="6" class="order-md-2">
            <h4>International Guideline</h4>
            <p class="mb-2">
              COVID safety measures adopted by various countries including VISA restrictions,
              quarantine rules, etc.
            </p>
            <a href="#" class="btn btn-sm btn-primary mb-0">View Guidelines</a>
          </b-col>

          <b-col cols="6" md="3" class="text-center order-3">
            <img :src="element10" class="mb-n5" alt="" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>

  <b-offcanvas
    body-class="m-0 p-0"
    size="xl"
    title="Advance Filters"
    placement="end"
    v-model="show"
  >
    <div class="flex-column p-3 p-xl-0">
      <FlightListFilter />
    </div>
  </b-offcanvas>
</template>

<script setup lang="ts">
import element10 from '@/assets/images/element/10.svg'
import element11 from '@/assets/images/element/11.svg'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'

import FlightListFilter from '@/views/flights/List/components/FlightListFilter.vue'

const show = ref(false)

const toggleOffcanvas = () => {
  show.value = !show.value
}
</script>
