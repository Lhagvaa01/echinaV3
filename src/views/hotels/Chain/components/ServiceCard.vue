<template>
  <b-card no-body class="bg-transparent">
    <b-row class="g-4 align-items-center">
      <b-col sm="6">
        <img :src="service.image" class="img-fluid card-img" alt="..." />
      </b-col>
      <b-col sm="6">
        <b-card-body class="p-0">
          <h6 class="fw-normal mb-3">{{ service.tag }}</h6>
          <b-card-title class="mb-3"
            ><a href="#" class="stretched-link">{{ service.title }}</a>
          </b-card-title>
          <a href="#" class="btn btn-link p-0">
            Explore Now
            <BIconArrowRight />
          </a>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { BIconArrowRight } from 'bootstrap-icons-vue'
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/hotels/Chain/type'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
