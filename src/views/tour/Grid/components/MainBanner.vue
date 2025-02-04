<template>
  <section class="pt-0">
    <b-container>
      <div
        class="p-3 p-sm-5 rounded-3"
        :style="{
          backgroundImage: `url(${bg04})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      >
        <b-row>
          <b-col md="8" class="mx-auto my-5">
            <h1 class="text-center text-dark">Maldives</h1>
            <ul class="nav nav-divider h6 text-dark mb-0 justify-content-center">
              <li class="nav-item">1 Destination</li>
              <li class="nav-item">115 Package</li>
            </ul>
          </b-col>
        </b-row>
      </div>

      <b-row class="mt-n4 mt-sm-n7">
        <b-col cols="11" class="mx-auto">
          <div class="bg-mode shadow p-4 rounded-3">
            <form class="form-control-bg-transparent bg-mode rounded-3">
              <b-row class="g-4 align-items-center">
                <b-col xl="10">
                  <b-row class="g-4">
                    <b-col md="6" lg="4">
                      <label class="h6 fw-normal mb-0">
                        <BIconGeoAlt class="text-primary" />
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
                        <BIconCalendar class="text-primary" />
                        Date
                      </label>
                      <div class="form-border-bottom form-control-transparent form-fs-lg mt-2">
                        <CustomFlatpicker
                          id="date"
                          placeholder="Choose a date"
                          v-model="date"
                          :options="{ dateFormat: 'd M Y', defaultDate: '20 Nov 2022' }"
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

            <div class="d-grid mt-4">
              <input type="checkbox" class="btn-check" id="btn-check-soft" />
              <label
                class="btn btn-primary-soft btn-primary-check mb-0"
                for="btn-check-soft"
                v-b-toggle.collapseExample
              >
                <BIconSliders class="fa-fe me-1 mb-1" />
                Advance Filters
              </label>
            </div>

            <b-collapse class="collapse" id="collapseExample">
              <b-form class="row g-4 mt-3">
                <b-col md="6" lg="4">
                  <div class="form-control-borderless">
                    <label class="form-label">Enter Tour Name</label>
                    <b-form-input size="lg" type="text" class="bg-light" />
                  </div>
                </b-col>

                <b-col md="6" lg="4">
                  <label class="form-label">Price Range</label>
                  <div class="d-flex justify-content-between">
                    <span>{{ currency }} {{ priceRange[0] }}</span>
                    <span>{{ currency }} {{ priceRange[1] }}</span>
                  </div>
                  <div class="position-relative">
                    <VueSlider
                      v-model="priceRange"
                      :min="500"
                      :max="2000"
                      :dotSize="19"
                      :dotStyle="dotStyle"
                      :processStyle="processStyle"
                      :railStyle="railStyle"
                      tooltip="none"
                    />
                  </div>
                </b-col>

                <b-col md="6" lg="4">
                  <label class="form-label">Duration (3D/4N)</label>
                  <div class="d-flex justify-content-between">
                    <span>{{ duration[0] }}</span>
                    <span>{{ duration[1] }}</span>
                  </div>
                  <div class="position-relative">
                    <VueSlider
                      v-model="duration"
                      :min="2"
                      :max="7"
                      :dotSize="19"
                      :dotStyle="dotStyle"
                      :processStyle="processStyle"
                      :railStyle="railStyle"
                      tooltip="none"
                    />
                  </div>
                </b-col>

                <b-col md="6" lg="4">
                  <label class="form-label">Flights</label>
                  <div>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        checked
                      />
                      <label class="btn btn-light btn-primary-soft-check mb-0" for="btnradio1"
                        >With Flights</label
                      >

                      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                      <label class="btn btn-light btn-primary-soft-check mb-0" for="btnradio2"
                        >Without Flights</label
                      >
                    </div>
                  </div>
                </b-col>

                <b-col md="6" lg="4">
                  <label class="form-label">Star Rating</label>
                  <ul class="list-inline mb-0 g-3">
                    <li class="list-inline-item">
                      <input type="checkbox" class="btn-check" id="btn-check-9" />
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-9"
                        >1
                        <BIconStarFill class="mb-1" />
                      </label>
                    </li>
                    <li class="list-inline-item">
                      <input type="checkbox" class="btn-check" id="btn-check-10" />
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-10"
                        >2
                        <BIconStarFill class="mb-1" />
                      </label>
                    </li>
                    <li class="list-inline-item">
                      <input type="checkbox" class="btn-check" id="btn-check-11" />
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-11"
                        >3
                        <BIconStarFill class="mb-1" />
                      </label>
                    </li>
                    <li class="list-inline-item">
                      <input type="checkbox" class="btn-check" id="btn-check-12" />
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-12"
                        >4
                        <BIconStarFill class="mb-1" />
                      </label>
                    </li>
                    <li class="list-inline-item">
                      <input type="checkbox" class="btn-check" id="btn-check-13" />
                      <label class="btn btn-light btn-primary-soft-check" for="btn-check-13"
                        >5
                        <BIconStarFill class="mb-1" />
                      </label>
                    </li>
                  </ul>
                </b-col>

                <b-col md="6" lg="4">
                  <div class="form-control-bg-light form-size-lg">
                    <label class="form-label">Holiday Type</label>
                    <SelectFormInput
                      id="holiday"
                      v-model="selectedHoliday"
                      :options="holidayOptions"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </div>
                </b-col>
              </b-form>
            </b-collapse>
          </div>
        </b-col>
      </b-row>

      <b-alert
        v-model="showAlert"
        variant="danger"
        class="d-flex align-items-center mt-5 rounded-3 mb-0"
        role="alert"
      >
        <span class="h4 mb-0 alert-heading">
          <BIconExclamationOctagonFill class="me-2 mb-1" />
        </span>
        <div class="ms-3">
          <h6 class="mb-0 alert-heading">Hurry! 51% off the tours are already fully booked</h6>
          <p class="mb-0">Many trips to various areas have been ordered, don't let you miss it</p>
        </div>
      </b-alert>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faPersonSkating } from '@fortawesome/free-solid-svg-icons'
import {
  BIconGeoAlt,
  BIconCalendar,
  BIconSliders,
  BIconStarFill,
  BIconExclamationOctagonFill
} from 'bootstrap-icons-vue'

import bg04 from '@/assets/images/bg/04.jpg'
import VueSlider from 'vue-3-slider-component'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { ref } from 'vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { currency } from '@/helpers/constants'

const priceRange = ref([700, 1500])
const duration = ref([3, 4])
const selectedDestination = ref('select-location')
const selectedHoliday = ref('select-option')

const showAlert = ref(true)

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

const holidayOptions = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'popular', text: 'Most Popular' },
  { value: 'experiential', text: 'Experiential Stays' },
  { value: 'featured', text: 'Featured' },
  { value: 'holiday', text: 'Group Holiday' },
  { value: 'experiential', text: 'Experiential' },
  { value: 'offbeat', text: 'offbeat' }
]

const date = ref()

const dotStyle = {
  backgroundColor: '#5143d9',
  border: '5px solid #fff',
  boxShadow: '0px 0px 0px 1px #5143d9'
}

const processStyle = {
  backgroundColor: '#5143d9'
}

const railStyle = {
  backgroundColor: 'rgb(81, 67, 217, 0.1)'
}
</script>
