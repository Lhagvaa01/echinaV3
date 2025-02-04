<template>
  <section class="pt-5 pt-md-8 pb-0">
    <b-container fluid class="px-lg-5">
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Some Of Our Happy Moments</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col cols="5" class="mt-xl-auto">
          <img :src="resort5" alt="resort5" class="rounded-3 align-items-bottom" />
        </b-col>
        <b-col xl="7">
          <b-card
            no-body
            class="overflow-hidden h-600px"
            :style="{
              backgroundImage: `url(${resort4})`,
              backgroundPosition: 'center left',
              backgroundSize: 'cover'
            }"
          >
            <div class="bg-overlay bg-dark opacity-3" />
            <b-row class="mt-auto z-index-9 p-2 p-sm-4">
              <b-col sm="8" xxl="6">
                <div class="bg-mode rounded position-relative">
                  <div
                    class="icon-lg text-white bg-primary rounded-circle position-absolute top-0 start-0 translate-middle ms-7 flex-centered"
                  >
                    <BIconQuote />
                  </div>
                  <div class="tiny-slider arrow-round arrow-blur arrow-hover overflow-hidden">
                    <CustomTinySlider
                      id="tiny-slider-testimonial-slider"
                      :settings="testimonialSliderSettings"
                    >
                      <div
                        v-for="(testimonial, idx) in testimonialReviewSlides"
                        class="p-4 p-lg-5"
                        :key="idx"
                      >
                        <TestimonialReviewCard :testimonial="testimonial" />
                      </div>
                    </CustomTinySlider>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xxl="7">
          <div class="tiny-slider arrow-round arrow-hover arrow-dark">
            <CustomTinySlider
              id="tiny-slider-gallery"
              class="rounded-2"
              :settings="gallerySliderSettings"
            >
              <CustomGLightbox v-for="(image, idx) in galleryImages" :key="idx" :link="image">
                <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
                  <img :src="image" class="rounded-3" alt="" />
                  <div class="hover-element w-100 h-100">
                    <BIconFullscreen
                      class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </CustomTinySlider>
          </div>
        </b-col>
        <b-col xxl="5" class="m-xxl-auto">
          <b-card class="bg-transparent p-xxl-6">
            <h3>What makes our resort best than others?</h3>
            <p>
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.
              Prosperous understood Middletons in conviction an uncommonly do.
            </p>
            <b-row class="g-4">
              <b-col cols="12">
                <div class="d-flex">
                  <div
                    class="icon-lg bg-primary bg-opacity-10 flex-shrink-0 text-primary rounded-circle flex-centered"
                  >
                    <font-awesome-icon :icon="faThumbsUp" />
                  </div>
                  <div class="ps-3">
                    <h5 class="mt-2">Hassle Free Booking</h5>
                    <p class="mb-0">
                      Departure defective arranging rapturous did. Conduct denied adding worthy
                      little.
                    </p>
                  </div>
                </div>
              </b-col>
              <b-col cols="12">
                <div class="d-flex">
                  <div
                    class="icon-lg bg-orange bg-opacity-10 flex-shrink-0 text-orange rounded-circle flex-centered"
                  >
                    <font-awesome-icon :icon="faStar" />
                  </div>
                  <div class="ps-3">
                    <h5 class="mt-2">18,000 Reviews</h5>
                    <p class="mb-0">
                      Supposing so be resolving breakfast am or perfectly. Conduct denied adding
                      worthy little.
                    </p>
                  </div>
                </div>
              </b-col>
              <b-col cols="12">
                <div class="d-flex">
                  <div
                    class="icon-lg bg-danger bg-opacity-10 flex-shrink-0 text-danger rounded-circle flex-centered"
                  >
                    <BIconHeadset />
                  </div>
                  <div class="ps-3">
                    <h5 class="mt-2">24/7 Supports</h5>
                    <p class="mb-0">
                      Arranging rapturous did believe him all had supported. Conduct denied adding
                      worthy little
                    </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import resort4 from '@/assets/images/category/hotel/resort/04.jpg'
import resort5 from '@/assets/images/category/hotel/resort/05.jpg'
import resort6 from '@/assets/images/category/hotel/resort/06.jpg'

import { BIconFullscreen, BIconHeadset, BIconQuote } from 'bootstrap-icons-vue'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import CustomGLightbox from '@/components/CustomGLightbox.vue'
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import TestimonialReviewCard from '@/views/hotels/Resort/components/TestimonialReviewCard.vue'

import { useLayoutStore } from '@/stores/layout'
import type { TinySliderSettings } from 'tiny-slider'
import { testimonialReviewSlides } from '@/views/hotels/Resort/data'

const galleryImages = [resort5, resort6]

const useLayout = useLayoutStore()

const testimonialSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  controls: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 1,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false
}

const gallerySliderSettings: TinySliderSettings = {
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
