<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="6">
          <h2>We Provide Our Best Facilities For You</h2>
          <p>
            Book your hotel with us and don't forget to grab an awesome hotel deal to save massive
            on your stay.
          </p>
          <b-button variant="dark" class="mb-4"> Contact Us </b-button>
          <b-row class="g-sm-4">
            <b-col v-for="(chunk, idx) in serviceChunks" sm="6" :key="idx">
              <ul class="list-group list-group-borderless mt-2 mb-0">
                <li v-for="(item, idx) in chunk" class="list-group-item" :key="idx">
                  <h6 class="fw-normal mb-0">
                    <font-awesome-icon
                      :icon="item.icon"
                      class="fa-fw text-primary me-1"
                      :style="{ height: 16, width: 20 }"
                    />
                    {{ item.name }}
                  </h6>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6">
          <div class="bg-light rounded-3 h-100 p-4">
            <div class="tiny-slider arrow-round arrow-blur">
              <CustomTinySlider id="tiny-slider-services" :settings="serviceSliderSettings">
                <ServiceCard v-for="(service, idx) in serviceData" :key="idx" :service="service" />
              </CustomTinySlider>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import ServiceCard from '@/views/hotels/Chain/components/ServiceCard.vue'

import { useLayoutStore } from '@/stores/layout'
import { hotelServices, serviceData } from '@/views/hotels/Chain/data'

import type { TinySliderSettings } from 'tiny-slider'
import { splitArray } from '@/helpers/array'

const serviceChunks = splitArray(hotelServices, 4)

const useLayout = useLayoutStore()

const serviceSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  controls: true,
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
      items: 1
    },
    992: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
}
</script>
