<template>
  <section>
    <b-container fluid>
      <b-row class="mb-md-4">
        <b-col cols="12" class="mx-auto text-center mb-4">
          <h2 class="mb-0">Our Hotel Precious Moments</h2>
        </b-col>
      </b-row>
      <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
        <CustomTinySlider
          id="tiny-slider-gallery"
          class="tiny-slider-inner d-flex align-items-end"
          :settings="gallerySliderSettings"
        >
          <CustomGLightbox v-for="(image, idx) in galleryImages" :link="image" :key="idx">
            <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
              <img :src="image" alt="galleryImg" class="rounded-3" />
              <div class="hover-element w-100 h-100">
                <BIconFullscreen
                  class="h4 z-3 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                />
              </div>
            </b-card>
          </CustomGLightbox>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconFullscreen } from 'bootstrap-icons-vue'

import CustomTinySlider from '@/components/CustomTinySlider.vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'

import gallery1 from '@/assets/images/category/hotel/gallery/01.jpg'
import gallery2 from '@/assets/images/category/hotel/gallery/02.jpg'
import gallery3 from '@/assets/images/category/hotel/gallery/03.jpg'
import gallery4 from '@/assets/images/category/hotel/gallery/04.jpg'
import gallery5 from '@/assets/images/category/hotel/gallery/05.jpg'
import gallery6 from '@/assets/images/category/hotel/gallery/06.jpg'
import gallery7 from '@/assets/images/category/hotel/gallery/07.jpg'
import gallery8 from '@/assets/images/category/hotel/gallery/08.jpg'

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8
]

import type { TinySliderSettings } from 'tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'

const gallerySliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  gutter: 30,
  controls: true,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 6,
  nav: false,
  responsive: {
    1: {
      items: 2,
      gutter: 10
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 4
    }
  }
}
</script>
