<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col xl="7">
          <b-card no-body class="bg-transparent p-0">
            <b-card-header
              class="bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3"
            >
              <h4 class="mb-2 mb-sm-0">Select Rooms</h4>

              <b-col sm="4">
                <b-form class="form-control-bg-light">
                  <SelectFormInput
                    id="rating"
                    v-model="selectedOption"
                    :options="Options"
                    :choice-options="{ searchEnabled: true }"
                  />
                </b-form>
              </b-col>
            </b-card-header>

            <b-card-body class="p-0 pt-3">
              <div class="vstack gap-5">
                <b-card no-body class="border bg-transparent p-3">
                  <b-row class="g-3 g-md-4">
                    <b-col md="4">
                      <div class="position-relative">
                        <img
                          src="@/assets/images/category/hotel/4by3/02.jpg"
                          class="card-img"
                          alt=""
                        />
                        <div class="card-img-overlay">
                          <CustomGLightbox
                            :link="gallery12"
                            className="badge bg-dark stretched-link "
                          >
                            5 Photos
                            <BIconArrowRight />
                          </CustomGLightbox>
                        </div>
                        <CustomGLightbox :link="gallery11" className="stretched-link z-index-9 " />
                        <CustomGLightbox :link="gallery15" />
                        <CustomGLightbox :link="gallery16" />
                      </div>
                    </b-col>

                    <b-col md="8">
                      <b-card-body class="d-flex flex-column p-0 h-100">
                        <b-card-title tag="h5">Deluxe Pool View with Breakfast</b-card-title>
                        <ul class="nav small nav-divider mb-0">
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faSquare" class="me-1" />
                            315 sq.ft
                          </li>
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faTableCellsLarge" class="me-1" />
                            City view
                          </li>
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faBed" class="me-1" />
                            King Bed
                          </li>
                        </ul>
                        <div
                          class="d-flex justify-content-between align-items-center mt-2 mt-md-auto"
                        >
                          <div class="d-flex text-success">
                            <h6 class="h5 mb-0 text-success">{{ currency }}385</h6>
                            <span class="fw-light">/per night</span>
                          </div>
                          <a href="#" class="btn btn-sm btn-dark mb-0">Select room</a>
                        </div>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                <b-card no-body class="border bg-transparent p-3">
                  <b-row class="g-3 g-md-4">
                    <b-col md="4">
                      <div class="position-relative">
                        <img
                          src="@/assets/images/category/hotel/4by3/10.jpg"
                          class="card-img"
                          alt=""
                        />
                        <div class="card-img-overlay">
                          <CustomGLightbox
                            :link="gallery13"
                            className="badge bg-dark stretched-link "
                          >
                            4 Photos
                            <BIconArrowRight />
                          </CustomGLightbox>
                        </div>
                        <CustomGLightbox
                          :link="gallery11"
                          className="stretched-link z-index-9 "
                        ></CustomGLightbox>
                        <CustomGLightbox :link="gallery15" />
                        <CustomGLightbox :link="gallery16" />
                      </div>
                    </b-col>
                    <b-col md="8">
                      <b-card-body class="d-flex flex-column h-100 p-0">
                        <b-card-title tag="h5">Deluxe Room</b-card-title>
                        <ul class="nav small nav-divider mb-0">
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faSquare" class="me-1" />
                            458 sq.ft
                          </li>
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faTableCellsLarge" class="me-1" />
                            City view
                          </li>
                          <li class="nav-item mb-0">
                            <font-awesome-icon :icon="faBed" class="me-1" />
                            King Bed
                          </li>
                        </ul>

                        <div
                          class="d-flex justify-content-between align-items-center mt-2 mt-md-auto"
                        >
                          <div class="d-flex text-success">
                            <h6 class="h5 mb-0 text-success">{{ currency }}485</h6>
                            <span class="fw-light">/per night</span>
                          </div>
                          <a href="#" class="btn btn-sm btn-dark mb-0">Select room</a>
                        </div>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <PriceSummary />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faTableCellsLarge, faBed } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import PriceSummary from './PriceSummary.vue'

import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery12 from '@/assets/images/gallery/12.jpg'
import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery15 from '@/assets/images/gallery/15.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { currency } from '@/helpers/constants'

const selectedOption = ref('select-option')

const Options = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Recently', text: 'Recently search' },
  { value: 'popular', text: 'Most popular' },
  { value: 'Top', text: 'Top Rated' }
]
</script>
