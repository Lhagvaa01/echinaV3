<template>
  <h6 class="fw-normal mb-3">{{ testimonial.review }}</h6>
  <div class="d-sm-flex justify-content-between align-items-bottom">
    <div class="d-flex align-items-center">
      <div class="avatar avatar-xs">
        <img class="avatar-img rounded-circle" :src="testimonial.author.avatar" alt="avatar" />
      </div>
      <div class="ms-2">
        <h6 class="mb-0 fw-light">
          <router-link to="#">{{ testimonial.author.name }}</router-link>
        </h6>
      </div>
    </div>
    <ul class="list-inline mb-0">
      <li
        v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))"
        class="list-inline-item small me-1"
        :key="idx"
      >
        <font-awesome-icon :icon="faFillStar" class="text-warning" />
      </li>
      <li
        v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0)))"
        class="list-inline-item small"
        :key="idx"
      >
        <font-awesome-icon :icon="faStar" class="text-warning" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { faStar as faFillStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import type { PropType } from 'vue'
import type { TestimonialReviewType } from '@/views/hotels/Resort/type'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialReviewType>,
    required: true
  }
})
</script>
