<template>
  <b-row class="mt-md-5">
    <b-col cols="12">
      <Splide :options="splideOptions" class="splide splide-main mb-3" ref="sliderRef">
        <SplideSlide v-for="(slide, index) in galleryImages" :key="index">
          <img :src="slide" alt="" />
          <CustomGLightbox :link="slide" className="stretched-link image-popup"></CustomGLightbox>
        </SplideSlide>
      </Splide>

      <Splide :options="splideThumbOptions" class="splide-thumb" ref="thumbnailRef">
        <SplideSlide v-for="(slide, index) in galleryImages" :key="index">
          <img :src="slide" alt="" />
        </SplideSlide>
      </Splide>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { type Options } from '@splidejs/splide'

import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { galleryImages } from '@/views/tour/Details/data'

const sliderRef = ref<InstanceType<typeof Splide>>()
const thumbnailRef = ref<InstanceType<typeof Splide>>()

const splideOptions: Options = {
  type: 'fade',
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  autoplay: true,
  cover: true
}

const splideThumbOptions: Options = {
  rewind: true,
  fixedWidth: 200,
  fixedHeight: 120,
  isNavigation: true,
  gap: 20,
  focus: 'center',
  pagination: false,
  cover: true,
  breakpoints: {
    600: {
      fixedWidth: 150,
      fixedHeight: 80
    }
  }
}

onMounted(() => {
  if (thumbnailRef.value.splide) {
    sliderRef.value.sync(thumbnailRef.value.splide)
  }
})
</script>
