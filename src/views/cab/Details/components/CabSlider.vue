<template>
  <div class="tiny-slider arrow-round arrow-xs arrow-dark">
    <CustomTinySlider id="tiny-slider-inner" class="rounded-2" :settings="cabSliderSettings">
      <div v-for="(image, idx) in cabSlideImages" :key="idx">
        <CustomGLightbox class="w-100 h-100" :link="image">
          <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
            <img :src="image" class="rounded-3" alt="" />
            <div class="hover-element w-100 h-100">
              <BIconFullscreen
                class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
              />
            </div>
          </b-card>
        </CustomGLightbox>
      </div>
    </CustomTinySlider>
  </div>
</template>

<script lang="ts" setup>
import { BIconFullscreen } from 'bootstrap-icons-vue'

import CustomTinySlider from '@/components/CustomTinySlider.vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'

import cab1 from '@/assets/images/category/cab/4by3/01.jpg'
import cab2 from '@/assets/images/category/cab/4by3/02.jpg'
import cab3 from '@/assets/images/category/cab/4by3/03.jpg'
import cab4 from '@/assets/images/category/cab/4by3/04.jpg'
import cab5 from '@/assets/images/category/cab/4by3/05.jpg'

import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const cabSlideImages = [cab1, cab2, cab3, cab4, cab5]

const cabSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: false,
  gutter: 30,
  controls: true,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 3,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    1: {
      items: 1,
      gutter: 10
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
}
</script>
