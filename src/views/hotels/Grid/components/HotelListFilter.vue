<template>
  <section class="pt-0 pb-4">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <div class="d-flex justify-content-between">
            <input type="checkbox" class="btn-check" id="btn-check-soft" />
            <label
              v-b-toggle.collapseFilter
              class="btn btn-primary-soft btn-primary-check mb-0"
              for="btn-check-soft"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilter"
              aria-controls="collapseFilter"
            >
              <BIconSliders class="fa-fe me-1 mb-1" />
              Show Filters
            </label>

            <ul class="nav nav-pills nav-pills-dark" id="tour-pills-tab" role="tablist">
              <li class="nav-item">
                <router-link
                  class="nav-link rounded-start rounded-0 mb-0"
                  :to="{ name: 'hotels.list' }"
                >
                  <BIconListUl class="fa-fw mb-1" />
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link rounded-end rounded-0 mb-0 active"
                  :to="{ name: 'hotels.grid' }"
                >
                  <BIconGridFill class="fa-fw mb-1" />
                </router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <b-collapse class="collapse" id="collapseFilter">
        <b-card no-body class="bg-light p-4 mt-4 z-index-9">
          <b-form class="row g-4">
            <b-col md="6" lg="4">
              <div class="form-control-borderless">
                <label class="form-label">Enter Hotel Name</label>
                <input type="text" class="form-control form-control-lg" />
              </div>
            </b-col>

            <b-col md="6" lg="4">
              <div class="form-control-borderless">
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
              </div>
            </b-col>

            <b-col md="6" lg="4">
              <div class="form-size-lg form-control-borderless">
                <label class="form-label">Popular Filters</label>
                <SelectFormInput
                  id="filter"
                  :options="filterOptions"
                  :choice-options="{ searchEnabled: true }"
                  v-model="selectedFilter"
                />
              </div>
            </b-col>

            <b-col md="6" lg="4">
              <div class="form-control-borderless">
                <label class="form-label">Customer Rating</label>
                <ul class="list-inline mb-0 g-3">
                  <li class="list-inline-item">
                    <input type="checkbox" class="btn-check" id="btn-check-1" />
                    <label class="btn btn-white btn-primary-soft-check" for="btn-check-1">3+</label>
                  </li>

                  <li class="list-inline-item">
                    <input type="checkbox" class="btn-check" id="btn-check-2" />
                    <label class="btn btn-white btn-primary-soft-check" for="btn-check-2"
                      >3.5+</label
                    >
                  </li>

                  <li class="list-inline-item">
                    <input type="checkbox" class="btn-check" id="btn-check-3" />
                    <label class="btn btn-white btn-primary-soft-check" for="btn-check-3">4+</label>
                  </li>

                  <li class="list-inline-item">
                    <input type="checkbox" class="btn-check" id="btn-check-4" />
                    <label class="btn btn-white btn-primary-soft-check" for="btn-check-4"
                      >4.5+</label
                    >
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="6" lg="4">
              <div class="form-control-borderless">
                <label class="form-label">Star Rating</label>
                <ul class="list-inline mb-0 d-flex g-3 gap-1">
                  <li v-for="(_val, idx) in new Array(5)" :key="idx" class="list-inline-item">
                    <input type="checkbox" class="btn-check" :id="`btn-check2-${idx}`" />
                    <label
                      class="btn btn-white btn-primary-soft-check d-flex align-items-center"
                      :for="`btn-check2-${idx}`"
                      >{{ idx + 1 }}
                      <BIconStarFill class="mb-1" />
                    </label>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="6" lg="4">
              <div class="form-size-lg form-control-borderless">
                <label class="form-label">Hotel Type</label>
                <SelectFormInput
                  id="hotel-type"
                  :options="hotelOptions"
                  :choice-options="{ searchEnabled: true }"
                  v-model="selectedHotel"
                />
              </div>
            </b-col>

            <b-col cols="12">
              <div class="form-control-borderless">
                <label class="form-label">Amenities</label>
                <b-row class="g-3">
                  <b-col
                    v-for="(item, idx) in amenities"
                    :key="`amenities-${idx + 1}`"
                    cols="6"
                    md="4"
                    lg="3"
                    xl="2"
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        :id="`flexCheckDefault-amenities${idx}`"
                      />
                      <label
                        class="form-check-label h6 fw-light mb-0"
                        :for="`flexCheckDefault-amenities${idx}`"
                      >
                        {{ item }}
                      </label>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>

            <div class="text-end align-items-center">
              <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
              <b-button variant="dark" class="mb-0 ms-3">Apply filter</b-button>
            </div>
          </b-form>
        </b-card>
      </b-collapse>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import SelectFormInput from '@/components/SelectFormInput.vue'
import { currency } from '@/helpers/constants'
import { BIconGridFill, BIconListUl, BIconSliders, BIconStarFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'
const priceRange = ref([700, 1500])
const selectedFilter = ref('select-option')
const selectedHotel = ref('select-option')

const filterOptions = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Recently', text: 'Recently search' },
  { value: 'Most', text: 'Most popular' },
  { value: 'Top', text: 'Top rated' }
]
const hotelOptions = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Cancellation Available', text: 'Free Cancellation Available' },
  { value: 'Hotel Available', text: 'Pay At Hotel Available' },
  { value: 'Breakfast Included', text: 'Free Breakfast Included' }
]

const amenities = [
  'Air Conditioning',
  'Room Services',
  'Dining',
  'Caretaker',
  'Free Internet',
  'Business Service',
  'Bonfire',
  'Mask',
  'Spa',
  'Swimming pool',
  'Fitness Centre',
  'Bar'
]

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
