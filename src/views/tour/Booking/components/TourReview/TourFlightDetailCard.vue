<template>
  <div
    class="p-3 bg-light rounded-2 d-sm-flex justify-content-sm-between align-items-center mb-4"
    :class="idx && 'my-4'"
  >
    <h6 class="mb-0">{{ flight.departure.placeName }} - {{ flight.arrival.placeName }}</h6>
    <h6 class="fw-normal mb-0"><span class="text-body">Date:</span> 12 April 2022</h6>
  </div>

  <b-row class="g-4">
    <b-col md="3">
      <img :src="element9" class="w-80px mb-3" alt="" />
      <h6 class="fw-normal small mb-0">Phillippines Airline</h6>
    </b-col>

    <b-col cols="4" md="3">
      <h5>{{ flight.departure.tag }}</h5>
      <h6 class="mb-0">{{ flight.departure.time }}</h6>
    </b-col>

    <b-col class="text-center">
      <h6>5hr 50min</h6>

      <div class="position-relative my-4">
        <hr class="bg-primary opacity-5 position-relative" />
        <div
          class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
        >
          <font-awesome-icon :icon="faPlane" class="fa-fw" />
        </div>
      </div>
    </b-col>

    <b-col class="text-end">
      <h5>{{ flight.arrival.tag }}</h5>
      <h6 class="mb-0">{{ flight.arrival.time }}</h6>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import element9 from '@/assets/images/element/09.svg'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import type { PropType } from 'vue'
import type { FlightRouteDetailType } from '@/views/tour/Booking/type'

defineProps({
  flight: {
    type: Object as PropType<FlightRouteDetailType>,
    required: true
  },
  idx: {
    type: Number,
    required: true
  }
})
</script>
