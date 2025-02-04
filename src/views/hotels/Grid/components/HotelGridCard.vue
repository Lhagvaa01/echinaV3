<template>
  <b-card no-body class="shadow p-2 pb-0 h-100">
    <div v-if="hotel.sale" class="position-absolute top-0 start-0 z-index-1 m-4">
      <div class="badge bg-danger text-white">{{ hotel.sale }}</div>
    </div>
    <div class="tiny-slider arrow-round arrow-xs arrow-dark rounded-2 overflow-hidden">
      <CustomTinySlider
        :id="`tiny-slider-card-${hotel.id}`"
        class="tiny-slider-inner"
        :settings="gridSliderSettings"
      >
        <div v-for="(image, idx) in hotel.images" :key="idx">
          <img :src="image" alt="Card-img" :style="{ height: '270px' }" />
        </div>
      </CustomTinySlider>
    </div>
    <b-card-body class="px-3 pb-0">
      <div class="d-flex justify-content-between mb-3 align-items-center">
        <router-link to="#" class="badge bg-dark text-white items-center">
          <BIconStarFill class="fa-fw me-2 text-warning" />
          {{ hotel.rating }}
        </router-link>
        <router-link to="#" class="h6 mb-0 z-index-2" @click="toggle">
          <BIconBookmark v-if="!isOpen" class="fa-fw" />
          <BIconBookmarkFill v-else-if="isOpen" color="red" class="fa-fw" />
        </router-link>
      </div>
      <b-card-title tag="h5">
        <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
      </b-card-title>
      <ul class="nav nav-divider mb-2 mb-sm-3">
        <li v-for="(feature, idx) in hotel.features" :key="idx" class="nav-item">
          {{ feature }}
        </li>
      </ul>
    </b-card-body>
    <b-card-footer class="pt-0">
      <div class="d-sm-flex justify-content-sm-between align-items-center">
        <div class="d-flex align-items-center">
          <h5 class="fw-normal text-success mb-0 me-1">{{ currency }}{{ hotel.price }}</h5>
          <span class="mb-0 me-2">/day</span>

          <span v-if="hotel.sale" class="text-decoration-line-through">{{ currency }}1000</span>
        </div>
        <div class="mt-2 mt-sm-0">
          <router-link
            :to="{ name: hotel.link?.name }"
            class="btn btn-sm btn-primary-soft mb-0 w-100 items-center"
          >
            View Detail
            <BIconArrowRight class="ms-2" />
          </router-link>
        </div>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue'

import {
  BIconArrowRight,
  BIconBookmark,
  BIconBookmarkFill,
  BIconStarFill
} from 'bootstrap-icons-vue'

import type { TinySliderSettings } from 'tiny-slider'
import type { HotelType } from '@/views/hotels/Grid/type'

import CustomTinySlider from '@/components/CustomTinySlider.vue'

import { useLayoutStore } from '@/stores/layout'
import { currency } from '@/helpers/constants'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})

let isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const useLayout = useLayoutStore()

const gridSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: false,
  controls: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 1,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false
}
</script>
