<template>
  <b-card no-body class="bg-transparent" id="room-options">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <div class="d-sm-flex justify-content-sm-between align-items-center">
        <h3 class="mb-2 mb-sm-0">Room Options</h3>
        <b-col sm="4">
          <form class="form-control-bg-light">
            <SelectFormInput
              id="rating"
              v-model="selectedOption"
              :options="Options"
              :choice-options="{ searchEnabled: true }"
            />
          </form>
        </b-col>
      </div>
    </b-card-header>

    <b-card-body class="pt-4 p-0">
      <div class="vstack gap-4">
        <b-card no-body class="shadow p-3">
          <b-row class="g-4">
            <b-col md="5" class="position-relative">
              <div class="position-absolute top-0 start-0 z-index-1 mt-3 ms-4">
                <div class="badge text-bg-danger">30% Off</div>
              </div>
              <div class="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                <CustomTinySlider id="tiny-slider-first" :settings="roomSliderSettings">
                  <div v-for="(slide, index) in images" :key="index">
                    <img :src="slide" alt="card-slide" />
                  </div>
                </CustomTinySlider>
              </div>

              <router-link
                to="#"
                @click="showModal = !showModal"
                class="btn btn-link text-decoration-underline p-0 mb-0 mt-1"
              >
                <BIconEyeFill class="me-1" />
                View more details
              </router-link>
            </b-col>

            <b-col md="7">
              <b-card-body class="d-flex flex-column h-100 p-0">
                <b-card-title tag="h5"><a href="#">Luxury Room with Balcony</a></b-card-title>
                <ul class="nav nav-divider mb-2">
                  <li class="nav-item">Air Conditioning</li>
                  <li class="nav-item">Wifi</li>
                  <li class="nav-item">Kitchen</li>
                  <li class="nav-item">
                    <a href="#" class="mb-0 text-primary">More+</a>
                  </li>
                </ul>

                <p class="text-success mb-0">Free Cancellation till 7 Jan 2022</p>
                <div class="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                  <div class="d-flex align-items-center">
                    <h5 class="fw-bold mb-0 me-1">{{ currency }}750</h5>
                    <span class="mb-0 me-2">/day</span>
                    <span class="text-decoration-line-through mb-0">{{ currency }}1000</span>
                  </div>
                  <div class="mt-3 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary mb-0">Select Room</a>
                  </div>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="shadow p-3">
          <b-row class="g-4">
            <b-col md="5" class="position-relative">
              <div class="position-absolute top-0 start-0 z-index-1 mt-3 ms-4">
                <div class="badge text-bg-danger">15% Off</div>
              </div>
              <div class="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                <CustomTinySlider id="tiny-slider-second" :settings="roomSliderSettings">
                  <div v-for="(slide, index) in images" :key="index">
                    <img :src="slide" alt="card-slide" />
                  </div>
                </CustomTinySlider>
              </div>
              <router-link
                to="#"
                @click="showModal = !showModal"
                class="btn btn-link text-decoration-underline p-0 mb-0 mt-1"
              >
                <BIconEyeFill class="me-1" />
                View more details
              </router-link>
            </b-col>

            <b-col md="7">
              <b-card-body class="d-flex flex-column p-0 h-100">
                <b-card-title tag="h5"
                  ><a href="#">Deluxe Pool View with Breakfast</a></b-card-title
                >

                <ul class="nav nav-divider mb-2">
                  <li class="nav-item">Air Conditioning</li>
                  <li class="nav-item">Wifi</li>
                  <li class="nav-item">Kitchen</li>
                  <li class="nav-item">
                    <a href="#" class="mb-0 text-primary">More+</a>
                  </li>
                </ul>

                <p class="text-danger mb-3">Non Refundable</p>

                <div class="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                  <div class="d-flex align-items-center">
                    <h5 class="fw-bold mb-0 me-1">{{ currency }}750</h5>
                    <span class="mb-0 me-2">/day</span>
                    <span class="text-decoration-line-through mb-0">{{ currency }}1000</span>
                  </div>
                  <div class="mt-3 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary mb-0">Select Room</a>
                  </div>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-card-body>
  </b-card>

  <!-- room modal -->
  <b-modal v-model="showModal" bodyClass="m-0 p-0" id="roomDetail" hideFooter title="Room detail">
    <div class="modal-body p-0">
      <b-card no-body class="bg-transparent p-3">
        <div class="tiny-slider arrow-round arrow-dark overflow-hidden rounded-2">
          <CustomTinySlider id="about-hotel">
            <div>
              <img src="@/assets/images/gallery/16.jpg" class="rounded-2" alt="Card image" />
            </div>
            <div>
              <img src="@/assets/images/gallery/15.jpg" class="rounded-2" alt="Card image" />
            </div>
            <div>
              <img src="@/assets/images/gallery/13.jpg" class="rounded-2" alt="Card image" />
            </div>
            <div>
              <img src="@/assets/images/gallery/12.jpg" class="rounded-2" alt="Card image" />
            </div>
          </CustomTinySlider>
        </div>

        <b-card-header class="bg-transparent pb-0">
          <b-card-title tag="h3" class="mb-0">Deluxe Pool View</b-card-title>
        </b-card-header>

        <b-card-body>
          <p>
            Club rooms are well furnished with air conditioner, 32 inch LCD television and a mini
            bar. They have attached bathroom with showerhead and hair dryer and 24 hours supply of
            hot and cold running water. Complimentary wireless internet access is available.
            Additional amenities include bottled water, a safe and a desk.
          </p>

          <b-row>
            <h5 class="mb-0">Amenities</h5>

            <b-col md="6">
              <ul class="list-group list-group-borderless mt-2 mb-0">
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Swimming pool</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Spa</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Kids play area.</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Gym</span>
                </li>
              </ul>
            </b-col>

            <b-col md="6">
              <ul class="list-group list-group-borderless mt-2 mb-0">
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">TV</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Mirror</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">AC</span>
                </li>
                <li class="list-group-item d-flex mb-0">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                  <span class="h6 fw-light mb-0">Slippers</span>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </div>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { useLayoutStore } from '@/stores/layout'
import type { TinySliderSettings } from 'tiny-slider'

import hotel04 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel02 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel03 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel01 from '@/assets/images/category/hotel/4by3/01.jpg'
import { currency } from '@/helpers/constants'

const showModal = ref(false)

const selectedOption = ref('select-option')

const Options = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Recently', text: 'Recently search' },
  { value: 'popular', text: 'Most popular' },
  { value: 'Top', text: 'Top Rated' }
]

const images = [hotel04, hotel02, hotel03, hotel01]

const useLayout = useLayoutStore()

const roomSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: false,
  controls: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 1,
  nav: false,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward'
}
</script>
