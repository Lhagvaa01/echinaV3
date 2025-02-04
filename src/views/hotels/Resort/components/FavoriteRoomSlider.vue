<template>
  <section class="pt-5 pt-md-8 pb-0">
    <b-container fluid class="px-lg-5">
      <b-row class="mb-4">
        <b-col xxl="8" class="mx-auto">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h2 class="mb-0">Our Favorite Rooms</h2>
            <b-button variant="dark" class="mb-0 d-grid">See all rooms</b-button>
          </div>
        </b-col>
      </b-row>

      <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
        <CustomTinySlider id="tiny-slider-room" :settings="roomSliderSettings">
          <div class="overflow-hidden" v-for="(room, idx) in roomSlides" :key="idx">
            <b-card
              no-body
              class="rounded-0 h-600px"
              :style="{
                backgroundImage: `url(${room.image})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover'
              }"
            >
              <div class="bg-overlay bg-dark opacity-3" />
              <b-row class="mt-auto justify-content-end z-index-9">
                <b-col md="8" xl="6" xxl="4">
                  <b-card no-body class="z-3 bg-mode rounded p-3 p-md-5 m-2 m-lg-6">
                    <h4>{{ room.name }}</h4>
                    <div class="nav h6 fw-light nav-divider mb-2 mb-sm-3">
                      <div class="nav-item">{{ room.sqfoot }} SQ.Ft</div>
                      <div class="nav-item">{{ room.sqm }} SQ.M</div>
                    </div>
                    <p class="mb-3">{{ room.description }}</p>
                    <ul class="list-inline hstack flex-wrap gap-2 mb-3">
                      <li
                        v-for="(feature, idx) in room.feature"
                        :key="idx"
                        class="list-inline-item h6 fw-normal mb-0"
                      >
                        <BIconCheckLg class="text-success me-1" />
                        {{ feature }}
                      </li>
                    </ul>
                    <button class="btn btn-light mb-0">
                      Reserve
                      <font-awesome-icon :icon="faArrowRightLong" />
                    </button>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { roomSlides } from '../data'
import { BIconCheckLg } from 'bootstrap-icons-vue'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'
import CustomTinySlider from '@/components/CustomTinySlider.vue'

const useLayout = useLayoutStore()

const roomSliderSettings: TinySliderSettings = {
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
</script>
