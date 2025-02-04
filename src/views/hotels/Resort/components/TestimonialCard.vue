<template>
  <b-card no-body class="card-metro overflow-hidden">
    <img :src="testimonial.image" alt="" />
    <div class="card-img-overlay d-flex">
      <div class="mt-auto card-text">
        <h4>
          <router-link :to="{ name: testimonial.link?.name }" class="text-white stretched-link">
            {{ testimonial.title }}
          </router-link>
        </h4>
        <p class="text-white mb-2">{{ testimonial.description }}</p>
        <b-button variant="link" class="text-white p-0 mb-0">
          Explore now
          <font-awesome-icon :icon="faArrowRightLong" class="fa-fw" />
        </b-button>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import type { PropType } from 'vue'
import type { TestimonialType } from '@/views/hotels/Resort/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
