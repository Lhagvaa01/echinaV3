<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row>
        <b-col lg="10" class="ms-auto position-relative">
          <img :src="bgImg3" class="rounded-3" alt="" />
          <b-col cols="11" sm="10" lg="8" xl="6" class="position-lg-middle ms-lg-8 ms-xl-7">
            <b-card no-body class="shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">
              <b-card-header class="border-bottom p-3 p-sm-4">
                <b-card-title tag="h5" class="mb-0">Book Your Online Cab</b-card-title>
              </b-card-header>

              <b-form class="card-body form-control-border p-3 p-sm-4">
                <div class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <div class="form-check form-check-inline" id="cab2-one-way-tab">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="cabRadio1"
                      value="option1"
                      @click="show = true"
                      :checked="show"
                    />
                    <label class="form-check-label" for="cabRadio1">One Way</label>
                  </div>
                  <div class="form-check form-check-inline" id="cab2-round-way-tab">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="cabRadio2"
                      value="option2"
                      @click="show = false"
                      :checked="!show"
                    />
                    <label class="form-check-label" for="cabRadio2">Round Trip</label>
                  </div>
                </div>

                <div class="tab-content my-4" id="pills-tabContent">
                  <div
                    class="tab-pane fade"
                    :class="show && 'show active'"
                    id="cab2-one-way"
                    role="tabpanel"
                    aria-labelledby="cab2-one-way-tab"
                  >
                    <b-row class="g-2 g-md-4">
                      <b-col md="6" class="position-relative">
                        <div class="form-fs-lg form-control-transparent">
                          <SelectFormInput
                            id="location"
                            label="Pickup"
                            v-model="selectedDestination"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>

                        <div class="btn-flip-icon z-index-9 mt-2 mt-md-1">
                          <b-button variant="dark" class="shadow btn-round mb-0">
                            <font-awesome-icon :icon="faRightLeft" />
                          </b-button>
                        </div>
                      </b-col>

                      <b-col md="6" class="text-md-end">
                        <div class="form-fs-lg form-control-transparent">
                          <SelectFormInput
                            id="location2"
                            label="Drop"
                            v-model="selectedDestination2"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="pickupdate"
                            label="Pickup Date"
                            label-class="small"
                            placeholder="Select date"
                            customClass="form-control flatpickr"
                            v-model="pickupdate"
                            :options="{ dateFormat: 'd M' }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6" class="text-md-end">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="pickuptime"
                            label="Pickup time"
                            label-class="small ms-3 ms-md-0 me-md-3"
                            placeholder="Select time"
                            customClass="form-control flatpickr text-md-end"
                            v-model="pickupTime"
                            :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                          />
                        </div>
                      </b-col>
                    </b-row>
                  </div>

                  <div
                    class="tab-pane fade"
                    :class="!show && 'show active'"
                    id="cab2-round-way"
                    role="tabpanel"
                    aria-labelledby="cab2-round-way-tab"
                  >
                    <b-row class="g-2 g-md-4">
                      <b-col md="6" class="position-relative">
                        <div class="form-fs-lg form-control-transparent">
                          <SelectFormInput
                            id="location3"
                            label="Pickup"
                            v-model="selectedDestination3"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>

                        <div class="btn-flip-icon z-index-9 mt-2 mt-md-1">
                          <b-button variant="dark" class="shadow btn-round mb-0">
                            <font-awesome-icon :icon="faRightLeft" />
                          </b-button>
                        </div>
                      </b-col>

                      <b-col sm="6" class="text-sm-end">
                        <div class="form-fs-lg form-control-transparent">
                          <SelectFormInput
                            id="location4"
                            label="Drop"
                            v-model="selectedDestination4"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col sm="6">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="pickupdate1"
                            label="Pickup Date"
                            placeholder="Select date"
                            customClass="form-control flatpickr"
                            v-model="pickupdate"
                            :options="{ dateFormat: 'd M' }"
                          />
                        </div>
                      </b-col>

                      <b-col sm="6" class="text-sm-end">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="pickuptime1"
                            label="Pickup time"
                            label-class="small ms-3 ms-md-0 me-md-3"
                            placeholder="Select time"
                            customClass="form-control flatpickr text-sm-end"
                            v-model="pickupTime"
                            :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                          />
                        </div>
                      </b-col>

                      <b-col sm="6">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="returndate"
                            label="Return Date"
                            label-class="small"
                            placeholder="Select date"
                            customClass="form-control flatpickr"
                            v-model="returndate"
                            :options="{ dateFormat: 'd M' }"
                          />
                        </div>
                      </b-col>

                      <b-col sm="6" class="text-sm-end">
                        <div class="form-fs-lg form-control-transparent">
                          <CustomFlatpicker
                            id="returntime"
                            label="Return time"
                            label-class="small ms-3 ms-md-0 me-md-3"
                            placeholder="Select time"
                            customClass="form-control flatpickr text-sm-end"
                            v-model="returnTime"
                            :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                          />
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                <div class="d-grid">
                  <b-button variant="dark" class="mb-0">Search Cabs</b-button>
                </div>
              </b-form>
            </b-card>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import bgImg3 from '@/assets/images/bg/03.jpg'

import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

const selectedDestination = ref('select-location')
const selectedDestination2 = ref('select-location')
const selectedDestination3 = ref('select-location')
const selectedDestination4 = ref('select-location')

const destinationOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'New York', text: 'New York' },
  { value: 'canada', text: 'Canada' },
  { value: 'paris', text: 'Paris' }
]

const pickupdate = ref()
const returndate = ref()
const pickupTime = ref()
const returnTime = ref()

const show = ref(true)
</script>
