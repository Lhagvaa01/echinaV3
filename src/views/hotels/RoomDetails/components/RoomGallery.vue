<template>
  <section class="pt-4">
    <b-container>
      <b-row>
        <b-col cols="12" class="mb-4">
          <h1 class="fs-3">Luxury Room with Balcony</h1>
          <p class="fw-bold mb-0">
            <BIconGeoAlt class="me-1 mb-1" />
            5855 W Century Blvd, Los Angeles - 90045
          </p>
        </b-col>
      </b-row>

      <div class="tiny-slider arrow-round arrow-blur">
        <CustomTinySlider id="tiny-slider-inner" :settings="roomSliderSettings">
          <div v-for="(image, idx) in images" :key="idx">
            <CustomGLightbox :id="`room-detail-${idx + 1}`" className="w-100 h-100" :link="image">
              <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
                <img :src="image" class="rounded-3" alt="" />
                <div class="hover-element w-100 h-100">
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                  >
                    <BIconFullscreen class="fs-6 text-white" />
                  </div>
                </div>
              </b-card>
            </CustomGLightbox>
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { BIconGeoAlt, BIconFullscreen } from 'bootstrap-icons-vue'

import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'
import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery14 from '@/assets/images/gallery/14.jpg'

import CustomTinySlider from '@/components/CustomTinySlider.vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'

import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const images = [gallery13, gallery16, gallery11, gallery14]

const roomSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  controls: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 2,
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
      items: 2
    },
    1200: {
      items: 2
    }
  }
}
</script>
