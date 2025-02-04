<template>
  <b-card no-body :class="`bg-${offer.variant}`" class="bg-opacity-10 h-100 p-4">
    <img :src="offer.image" class="w-75" alt="" />
    <b-card-body class="mt-4 p-0">
      <span class="mb-1">Flat</span>
      <h4 class="mb-1">
        {{ offer.off }}
      </h4>
      <h6 class="fw-normal">{{ offer.flightType }}</h6>

      <div class="d-flex justify-content-between align-items-center mt-4">
        <div
          class="bg-primary bg-opacity-10 border border-2 border-primary border-dashed rounded-2 px-3 py-2"
        >
          <h5 class="fw-normal user-select-all mb-0">{{ offer.couponCode }}</h5>
        </div>
        <router-link :to="{ name: offer.link?.name }" class="btn btn-lg btn-white btn-round mb-0">
          <BIconArrowRight class="mb-1" />
        </router-link>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'

import type { PropType } from 'vue'
import type { OffersType } from '@/views/flights/Home/type'

defineProps({
  offer: {
    type: Object as PropType<OffersType>,
    required: true
  }
})
</script>
