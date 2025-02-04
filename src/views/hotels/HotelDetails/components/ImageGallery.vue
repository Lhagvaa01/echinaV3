<template>
  <section class="card-grid pt-0">
    <b-container>
      <b-row class="g-2">
        <b-col md="6">
          <CustomGLightbox :link="gallery14">
            <b-card
              no-body
              class="card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
              :style="{
                backgroundImage: `url(${gallery14})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover'
              }"
            >
              <div class="hover-element position-absolute w-100 h-100">
                <BIconFullscreen
                  class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                />
              </div>
            </b-card>
          </CustomGLightbox>
        </b-col>

        <b-col md="6">
          <b-row class="g-2">
            <b-col cols="12">
              <CustomGLightbox :link="gallery13">
                <b-card
                  no-body
                  class="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                  :style="{
                    backgroundImage: `url(${gallery13})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="hover-element position-absolute w-100 h-100">
                    <BIconFullscreen
                      class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </b-col>

            <b-col md="6">
              <CustomGLightbox :link="gallery12">
                <b-card
                  no-body
                  class="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                  :style="{
                    backgroundImage: `url(${gallery12})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="hover-element position-absolute w-100 h-100">
                    <BIconFullscreen
                      class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </b-col>

            <b-col md="6">
              <b-card
                no-body
                class="card-grid-sm overflow-hidden"
                :style="{
                  backgroundImage: `url(${gallery11})`,
                  backgroundPosition: 'center left',
                  backgroundSize: 'cover'
                }"
              >
                <div class="bg-overlay bg-dark opacity-7"></div>
                <CustomGLightbox
                  :link="gallery14"
                  className="stretched-link z-index-9"
                ></CustomGLightbox>
                <CustomGLightbox :link="gallery15" />
                <CustomGLightbox :link="gallery16" />
                <div class="card-img-overlay d-flex h-100 w-100">
                  <b-card-title tag="h6" class="m-auto fw-light text-decoration-underline">
                    <a href="#" class="text-white">View all</a>
                  </b-card-title>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery12 from '@/assets/images/gallery/12.jpg'
import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery14 from '@/assets/images/gallery/14.jpg'
import gallery15 from '@/assets/images/gallery/15.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'

import { BIconFullscreen } from 'bootstrap-icons-vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
</script>
