<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="g-4 g-lg-5 align-items-center">
        <b-col lg="4">
          <h2 class="mb-0">Discover the best places to visit🔥</h2>
          <div class="d-sm-flex justify-content-sm-between align-items-center mt-4">
            <ul class="avatar-group mb-sm-0">
              <li class="avatar" v-for="(img, index) in discoverImages" :key="index">
                <img class="avatar-img rounded-circle" :src="img" alt="avatar" />
              </li>
              <li class="avatar">
                <div class="avatar-img rounded-circle bg-dark">
                  <span class="text-white position-absolute top-50 start-50 translate-middle small"
                    >16+</span
                  >
                </div>
              </li>
            </ul>
            <h5 class="m-0">
              <font-awesome-icon :icon="faStar" class="text-warning me-1" />
              4.5
            </h5>
          </div>
          <a href="#" class="btn btn-lg btn-primary-soft mb-0 mt-4"
            >Explore places
            <BIconArrowRight class="fa-fw ms-2" />
          </a>
        </b-col>

        <b-col lg="8">
          <b-row>
            <b-col md="6">
              <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
                <img :src="tour6" class="rounded-3" alt="" />
                <CustomGLightbox
                  className="hover-element position-absolute w-100 h-100"
                  :link="gallery01"
                >
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                  >
                    <BIconFullscreen class="fs-6 text-white" />
                  </div>
                </CustomGLightbox>
              </b-card>
              <div class="tiny-slider arrow-round arrow-blur arrow-hover arrow-xs my-4 mb-md-0">
                <CustomTinySlider id="tiny-slider-inner">
                  <b-card no-body class="bg-transparent">
                    <b-row class="align-items-center">
                      <b-col cols="4">
                        <img :src="team1" class="card-img" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <b-card-body class="p-0">
                          <p class="mb-0">Farther-related bed and passage comfort civilly.</p>
                          <b-card-title tag="h6" class="mb-0 mt-2">Louis Ferguson</b-card-title>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card no-body class="bg-transparent">
                    <b-row class="align-items-center">
                      <b-col cols="4">
                        <img :src="team2" class="card-img" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <b-card-body class="p-0">
                          <p class="mb-0">Farther-related bed and passage comfort civilly.</p>
                          <b-card-title tag="h6" class="mb-0 mt-2">Lori Stevens</b-card-title>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </CustomTinySlider>
              </div>
            </b-col>

            <b-col md="6">
              <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden mb-4">
                <img :src="gallery02" class="rounded-3" alt="" />
                <CustomGLightbox
                  className="hover-element position-absolute w-100 h-100"
                  link="https://www.youtube.com/embed/tXHviS-4ygo"
                >
                  <span
                    class="btn text-danger btn-round btn-white position-absolute top-50 start-50 translate-middle mb-0"
                  >
                    <font-awesome-icon :icon="faPlay" />
                  </span>
                </CustomGLightbox>
              </b-card>
              <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
                <img :src="gallery03" class="rounded-3" alt="" />
                <CustomGLightbox
                  className="hover-element position-absolute w-100 h-100"
                  :link="gallery03"
                >
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                  >
                    <BIconFullscreen class="fs-6 text-white" />
                  </div>
                </CustomGLightbox>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconFullscreen } from 'bootstrap-icons-vue'

import gallery01 from '@/assets/images/gallery/01.jpg'
import gallery02 from '@/assets/images/gallery/02.jpg'
import gallery03 from '@/assets/images/gallery/03.jpg'

import tour6 from '@/assets/images/category/tour/06.jpg'

import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'

import CustomGLightbox from '@/components/CustomGLightbox.vue'
import CustomTinySlider from '@/components/CustomTinySlider.vue'

import { discoverImages } from '@/views/tour/Home/data'
</script>
