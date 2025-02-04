<template>
  <section class="pt-0">
    <b-container class="position-relative">
      <div
        class="rounded-3 p-4 p-sm-5"
        :style="{
          backgroundImage: `url(${bg02})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      >
        <b-row class="justify-content-between pt-0 pb-5">
          <b-col md="7" lg="8" xxl="7" class="pb-5 mb-0 mb-lg-5">
            <h1 class="text-white">Life Is Adventure Make The Best Of It</h1>
            <p class="text-white mb-0">
              Planning for a trip? we will organize your best trip with the best destination and
              within the best budgets!
            </p>
          </b-col>
          <b-col md="5" lg="4" xl="3" class="mb-3 mb-sm-0">
            <b-card no-body class="shadow p-2 pb-0">
              <div class="position-absolute top-0 start-0 mt-n3 ms-n3 z-index-9">
                <img :src="element5" class="position-relative h-70px" alt="" />
                <span class="h5 text-white position-absolute top-50 start-50 translate-middle"
                  >40%</span
                >
              </div>

              <div class="rounded-3 overflow-hidden position-relative">
                <img :src="tour5" class="card-img" alt="" />
                <div class="bg-overlay bg-dark opacity-4"></div>

                <div class="card-img-overlay d-flex">
                  <h6 class="text-white fw-normal mt-auto mb-0">5 Days / 4 Nights</h6>
                </div>
              </div>
              <b-card-body class="px-2">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" class="badge bg-primary bg-opacity-10 text-primary">Adventure</a>
                  <h6 class="fw-light m-0">
                    <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    4.5
                  </h6>
                </div>

                <b-card-title tag="h6"
                  ><a href="#">Maldives Sightseeing & Adventure Tour</a></b-card-title
                >

                <div class="d-flex justify-content-between align-items-center mb-0">
                  <h6 class="text-success mb-0">
                    {{ currency }}385 <span class="fw-light">/person</span>
                  </h6>
                  <span class="text-decoration-line-through mb-0 text-reset"
                    >{{ currency }}682</span
                  >
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <b-row class="mt-n7">
        <b-col cols="11" class="mx-auto">
          <form class="bg-mode shadow rounded-3 p-4">
            <b-row class="g-4 align-items-center">
              <b-col xl="10">
                <b-row class="g-4">
                  <b-col md="6" lg="4">
                    <label class="h6 fw-normal mb-0">
                      <BIconGeoAlt class="text-primary mb-1" />
                      Location
                    </label>
                    <div class="form-border-bottom form-control-transparent form-fs-lg mt-2">
                      <SelectFormInput
                        id="location"
                        v-model="selectedDestination"
                        :options="destinationOptions"
                        :choice-options="{ searchEnabled: true }"
                      />
                    </div>
                  </b-col>

                  <b-col md="6" lg="4">
                    <label class="h6 fw-normal mb-0">
                      <BIconCalendar class="text-primary mb-1" />
                      Date
                    </label>
                    <div class="form-border-bottom form-control-transparent form-fs-lg mt-2">
                      <CustomFlatpicker
                        id="date"
                        placeholder="Choose a date"
                        v-model="date"
                        :options="{ dateFormat: 'd M Y' }"
                      />
                    </div>
                  </b-col>

                  <b-col md="6" lg="4">
                    <label class="h6 fw-normal mb-0">
                      <font-awesome-icon :icon="faPersonSkating" class="text-primary" />
                      Tour type</label
                    >
                    <div class="form-border-bottom form-control-transparent form-fs-lg mt-2">
                      <SelectFormInput
                        id="tour"
                        v-model="selectedTour"
                        :options="tourOptions"
                        :choice-options="{ searchEnabled: true }"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-col>

              <b-col xl="2">
                <div class="d-grid">
                  <a href="#" class="btn btn-lg btn-dark mb-0">Take a Tour</a>
                </div>
              </b-col>
            </b-row>
          </form>
        </b-col>
      </b-row>
      <RecentSearches />
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { faStar, faPersonSkating } from '@fortawesome/free-solid-svg-icons'
import { BIconGeoAlt, BIconCalendar } from 'bootstrap-icons-vue'

import element5 from '@/assets/images/element/05.svg'
import tour5 from '@/assets/images/category/tour/05.jpg'

import bg02 from '@/assets/images/bg/02.jpg'
import RecentSearches from './RecentSearches.vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { currency } from '@/helpers/constants'

const selectedDestination = ref('select-location')

const destinationOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const selectedTour = ref('select-type')

const tourOptions = [
  { value: 'select-type', text: 'Select type' },
  { value: 'adventure', text: 'Adventure' },
  { value: 'beach', text: 'Beach' },
  { value: 'desert', text: 'Desert' },
  { value: 'history', text: 'History' }
]

const date = ref()
</script>
