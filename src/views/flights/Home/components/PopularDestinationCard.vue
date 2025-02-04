<template>
  <b-card no-body class="card-img-scale overflow-hidden bg-transparent">
    <div v-if="destination.information" class="position-absolute top-0 end-0 p-3 z-index-9">
      <a
        tabindex="0"
        class="mb-0 btn btn-white btn-round"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        v-b-popover.focus.left="destination.information"
      >
        <BIconInfoCircle class="mb-1" />
      </a>
    </div>

    <div class="card-img-scale-wrapper rounded-3">
      <img :src="destination.image" class="card-img" alt="hotel image" />
    </div>

    <b-card-body class="px-2">
      <div class="d-flex justify-content-between align-items-center">
        <b-card-title tag="h5">
          <router-link :to="{ name: destination.link?.name }" class="stretched-link">{{
            destination.name
          }}</router-link>
        </b-card-title>
        <h6 class="mb-0">
          {{ destination.rating }}
          <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
        </h6>
      </div>

      <span class="mb-0">{{ destination.flightInterval }}</span>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import type { PropType } from 'vue'
import type { DestinationType } from '@/views/flights/Home/type'

defineProps({
  destination: {
    type: Object as PropType<DestinationType>,
    required: true
  }
})
</script>
