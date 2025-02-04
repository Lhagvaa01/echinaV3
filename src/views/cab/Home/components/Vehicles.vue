<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Our Awesome Vehicles</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col v-for="(vehicle, idx) in cabVehicles" :key="idx" sm="4" xl="2">
          <b-card no-body class="shadow text-center align-items-center h-100 p-4">
            <div class="icon-xxl bg-light rounded-circle">
              <img :src="vehicle.image" class="w-90px" alt="vehicleImg" />
            </div>
            <b-card-body class="px-0 pb-0">
              <b-card-title tag="h5">
                <router-link to="" class="stretched-link"> {{ vehicle.name }}</router-link>
              </b-card-title>
              <span> ({{ vehicle.availableCar }} {{ vehicle.name }}s) </span>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { cabVehicles } from '@/views/cab/Home/data'
</script>
