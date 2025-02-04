<template>
  <section class="py-0">
    <b-container fluid>
      <b-row>
        <b-col lg="11" class="mx-auto">
          <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
            <div class="tiny-slider-hero">
              <CustomTinySlider id="tiny-slider-hero" :settings="heroSliderSettings">
                <b-card
                  no-body
                  class="overflow-hidden h-400px h-sm-600px rounded-0"
                  :style="{
                    backgroundImage: `url(${hotel6})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="bg-overlay bg-dark opacity-3" />
                  <div class="card-img-overlay d-flex align-items-center">
                    <b-container>
                      <b-row>
                        <b-col cols="11" lg="7">
                          <h6 class="text-white fw-normal mb-0">💖 Fall in love with the City</h6>
                          <h1 class="text-white display-6">Modern Luxury In Manhattan</h1>
                          <router-link to="#" class="btn btn-primary mb-0">
                            Reserve Today
                          </router-link>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-card>
                <b-card
                  no-body
                  class="overflow-hidden h-400px h-sm-600px rounded-0"
                  :style="{
                    backgroundImage: `url(${hotel5})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="bg-overlay bg-dark opacity-3" />
                  <div class="card-img-overlay d-flex align-items-center">
                    <b-container class="w-100 my-auto">
                      <b-row>
                        <b-col xs="11" lg="8">
                          <h1 class="text-white">Taking luxury hospitality to new heights</h1>
                          <router-link to="" class="btn btn-dark mb-0"> Take Me There </router-link>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-card>
              </CustomTinySlider>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import hotel6 from '@/assets/images/category/hotel/06.jpg'
import hotel5 from '@/assets/images/category/hotel/05.jpg'

import CustomTinySlider from '@/components/CustomTinySlider.vue'
import type { TinySliderSettings } from 'tiny-slider'

const heroSliderSettings: TinySliderSettings = {
  gutter: 1,
  controls: true,
  nav: false,
  items: 1
}
</script>
