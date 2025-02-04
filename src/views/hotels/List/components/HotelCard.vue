<template>
  <b-card no-body class="shadow p-2">
    <b-row class="g-0">
      <b-col md="5" class="position-relative">
        <div class="position-absolute top-0 start-0 z-index-1 m-2">
          <div v-if="hotel.sale" class="badge text-bg-danger">{{ hotel.sale }}</div>
        </div>
        <div class="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
          <CustomTinySlider :id="`tiny-slider-inner-${hotel.id}`" :settings="listSliderSettings">
            <div v-for="(image, idx) in hotel.images" :key="idx">
              <img :src="image" alt="hotel-img" />
            </div>
          </CustomTinySlider>
        </div>
      </b-col>

      <b-col md="7">
        <b-card-body class="py-md-2 d-flex flex-column h-100 position-relative">
          <div class="d-flex justify-content-between align-items-center">
            <ul class="list-inline mb-1">
              <li
                v-for="(_star, idx) in new Array(Math.floor(hotel.rating))"
                :key="idx"
                class="list-inline-item me-0 small"
              >
                <font-awesome-icon :icon="faStar" class="text-warning me-1" />
              </li>
              <li v-if="!Number.isInteger(hotel.rating)" class="list-inline-item me-1 small">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
              </li>
              <template v-if="hotel.rating < 5">
                <li
                  v-for="(_val, idx) in new Array(5 - Math.ceil(hotel.rating))"
                  :key="idx"
                  class="list-inline-item me-0 small"
                >
                  <font-awesome-icon :icon="faStar" />
                </li>
              </template>
            </ul>

            <ul class="list-inline mb-0 z-index-2">
              <li class="list-inline-item">
                <b-button variant="light" size="sm" class="btn-round">
                  <font-awesome-icon :icon="faHeart" class="fa-fw" />
                </b-button>
              </li>

              <b-dropdown
                toggle-class="text-decoration-none p-0 m-0"
                class="list-inline-item"
                variant="link"
                menu-class="shadow rounded dropdown-menu-end"
                no-caret
              >
                <template #button-content>
                  <b-button variant="light" size="sm" class="btn-round" id="dropdownShare">
                    <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                  </b-button>
                </template>
                <li>
                  <b-dropdown-item>
                    <font-awesome-icon :icon="faSquareTwitter" class="me-2" />
                    Twitter
                  </b-dropdown-item>
                </li>
                <li>
                  <b-dropdown-item>
                    <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                    Facebook
                  </b-dropdown-item>
                </li>
                <li>
                  <b-dropdown-item>
                    <font-awesome-icon :icon="faLinkedin" class="me-2" />
                    LinkedIn
                  </b-dropdown-item>
                </li>
                <li>
                  <b-dropdown-item>
                    <font-awesome-icon :icon="faCopy" class="me-2" />
                    Copy link
                  </b-dropdown-item>
                </li>
              </b-dropdown>
            </ul>
          </div>

          <b-card-title tag="h5" class="mb-1">
            <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
          </b-card-title>
          <small>
            <BIconGeoAlt class="me-1 mb-1"></BIconGeoAlt>
            {{ hotel.address }}
          </small>

          <ul class="nav nav-divider mt-3">
            <li v-for="(feature, idx) in hotel.features" :key="idx" class="nav-item">
              {{ feature }}
            </li>
          </ul>

          <ul class="list-group list-group-borderless small mb-0 mt-2">
            <template v-if="hotel.schemes">
              <li
                v-for="(scheme, idx) in hotel.schemes"
                :key="idx"
                class="list-group-item d-flex text-success p-0 items-center"
              >
                <BIconPatchCheckFill class="me-2" />{{ scheme }}
              </li>
            </template>
            <li v-else class="list-group-item d-flex text-danger p-0 items-center">
              <BIconPatchCheckFill class="me-2" /> Non Refundable
            </li>
          </ul>

          <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            <div class="d-flex align-items-center">
              <h5 class="fw-bold mb-0 me-1">{{ currency }}{{ hotel.price }}</h5>
              <span class="mb-0 me-2">/day</span>
              <span v-if="hotel.sale" class="text-decoration-line-through mb-0"
                >{{ currency }}1000</span
              >
            </div>

            <div class="mt-3 mt-sm-0">
              <a href="#" class="btn btn-sm btn-dark mb-0 w-100">Select Room</a>
            </div>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { BIconGeoAlt, BIconPatchCheckFill } from 'bootstrap-icons-vue'
import {
  faCopy,
  faHeart,
  faShareAlt,
  faStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

import CustomTinySlider from '@/components/CustomTinySlider.vue'

import type { PropType } from 'vue'
import type { TinySliderSettings } from 'tiny-slider'
import type { HotelType } from '@/views/hotels/List/type'

import { useLayoutStore } from '@/stores/layout'
import { currency } from '@/helpers/constants'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})

const useLayout = useLayoutStore()

const listSliderSettings: TinySliderSettings = {
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
