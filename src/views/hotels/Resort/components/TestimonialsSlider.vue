<template>
  <section class="pt-5 pt-md-8 pb-0">
    <b-container fluid class="px-lg-5">
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2>Our Exciting Experience</h2>
        </b-col>
      </b-row>
      <div class="tiny-slider arrow-round arrow-blur rounded-3 overflow-hidden">
        <CustomTinySlider id="tiny-slider-testimonial" :settings="testimonialSliderSettings">
          <div v-for="(testimonial, idx) in testimonialData" :key="idx">
            <TestimonialCard :testimonial="testimonial" />
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import TestimonialCard from '@/views/hotels/Resort/components/TestimonialCard.vue'

import { useLayoutStore } from '@/stores/layout'
import { testimonialData } from '@/views/hotels/Resort/data'

import type { TinySliderSettings } from 'tiny-slider'

const useLayout = useLayoutStore()

const testimonialSliderSettings: TinySliderSettings = {
  nested: 'inner',
  gutter: 30,
  controls: true,
  edgePadding: 2,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
}
</script>
