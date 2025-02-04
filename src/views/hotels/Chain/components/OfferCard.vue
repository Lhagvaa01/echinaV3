<template>
  <b-card no-body>
    <img :src="offer.image" class="card-img" alt="" />
    <div class="position-absolute top-100 start-50 translate-middle w-100">
      <b-card-body class="text-center bg-mode shadow rounded mx-4 p-3">
        <b-card-title tag="h6" class="mb-1"
          ><a href="#">{{ offer.title }}</a></b-card-title
        >
        <small>Valid through {{ offer.validity }}</small>
        <div class="mt-2"><a href="#" class="btn btn-sm btn-dark mb-0">View Offer</a></div>
      </b-card-body>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { OfferType } from '@/views/hotels/Chain/type'

defineProps({
  offer: {
    type: Object as PropType<OfferType>,
    required: true
  }
})
</script>
