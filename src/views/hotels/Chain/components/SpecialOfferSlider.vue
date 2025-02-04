<template>
  <section class="pb-0">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h3 class="mb-0">Special Offers</h3>
        </b-col>
      </b-row>
      <div class="arrow-round arrow-blur arrow-hover">
        <CustomTinySlider id="tiny-slider-offer" class="mb-8" :settings="offerSliderSettings">
          <div v-for="(offer, idx) in offerData" :key="idx">
            <OfferCard :offer="offer" />
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import type { TinySliderSettings } from 'tiny-slider'
import { offerData } from '@/views/hotels/Chain/data'
import { useLayoutStore } from '@/stores/layout.js'
import OfferCard from '@/views/hotels/Chain/components/OfferCard.vue'

const useLayout = useLayoutStore()

const offerSliderSettings: TinySliderSettings = {
  autoplay: true,
  controls: true,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  loop: true,
  items: 3,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    1: {
      items: 1,
      gutter: 10
    },
    576: {
      items: 1,
      gutter: 8
    },
    768: {
      items: 2,
      gutter: 30
    },
    992: {
      items: 3,
      gutter: 30
    },
    1200: {
      items: 3,
      gutter: 30
    }
  }
}
</script>
